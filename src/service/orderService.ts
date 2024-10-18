const { connection } = require('../BD/db')


export async function create(table_number: String) {
    // Realizar a query para cadastrar um novo produto
    const query = `INSERT INTO order_product (table_number) 
        VALUES(?)`;

    await connection.execute([table_number])

    return { success: true, }
}

export async function index() {
    // Realizar a query para recuperar todos os produtos
    const query = `SELECT * FROM order_product`;

    const [rows]: any = await connection.execute(query);
    return {
        success: true,
      
        result: rows,

    };
}

export async function show(id: number) {
    // Realizar a query para recuperar um produto pelo ID
    const query = `SELECT * FROM order_product WHERE id = ?`;

    const [rows]: any = await connection.execute(query, [id]);

    return {
        success: true,
      
        result: rows[0],
    };
}

export async function update(id: number, table_number: string) {
    // Realizar a query para atualizar um produto pelo ID
    const query = `UPDATE order_product SET  table_number = ? WHERE id = ?`;
    await connection.execute(query, [table_number, id],);

    return { success: true, };
}

export async function deleteP(id: number) {
    const query = `DELETE FROM order_product WHERE id = ?`;

    await connection.execute(query, [id]);

    return {
        success: true,
       
    }
}


export { };