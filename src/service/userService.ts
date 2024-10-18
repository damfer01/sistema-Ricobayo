const { connection }  = require('../BD/db') ;
import bcrypt from 'bcrypt';

// Função para criar um novo login
export async function create(name: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `
    INSERT INTO login (name, password)
    VALUES (?, ?)
  `;
  await connection.execute(query, [name, hashedPassword]);
}

// Função para buscar todos os logins
export async function index() {
  const query = `
    SELECT * FROM login
  `;
  const [rows]: any = await connection.execute(query);
  return rows;
}

// Função para buscar um login específico
export async function show(id: number) {
  const query = `
    SELECT * FROM login WHERE id = ?
  `;
  const [rows]: any = await connection.execute(query, [id]);
  return rows[0];
}

// Função para atualizar um login
export async function update(id: number, name: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `
    UPDATE login SET name = ?, password = ? WHERE id = ?
  `;
  await connection.execute(query, [name, hashedPassword, id]);
}

// Função para deletar um login
export async function deleteLogin(id: number) {
  const query = `
    DELETE FROM login WHERE id = ?
  `;
  await connection.execute(query, [id]);
}
export {};