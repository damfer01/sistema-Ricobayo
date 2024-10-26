
const{connection } = require('../BD/db')


export async function create( name: string , sale: string, description: string , amount:string, ingredients: string) {
    // Realizar a query para cadastrar um novo produto
        const query= `INSERT INTO products (name, sale, description, amount , ingredients) 
        VALUES(?,?,?,?,?,?)`;

        await connection.execute([name, sale, description,amount, ingredients])

        return { success: true,}
    }

    export  async  function index() {
        // Realizar a query para recuperar todos os produtos
            const query = `SELECT * FROM products`;

            const [rows ]: any = await connection.execute(query);
        return {
            success: true,
          
            result: rows,

        };
    }

    export async function show( id:number) {
        // Realizar a query para recuperar um produto pelo ID
        const query = `SELECT * FROM products WHERE id = ?`;

        const [rows] :any = await connection.execute(query, [id] );

        return {
            success: true,
           
            result: rows[0],
        };
    }

    export   async function update(id:number,name:string, sale:string, description:string, amount:string, ingredients:string) {
        // Realizar a query para atualizar um produto pelo ID
        const query = `UPDATE products SET  name = ?, sale = ?, description = ? , amount +?, = ?, ingredients = ? WHERE id = ?`;
        await connection.execute(query,[name, sale, description,amount, ingredients , id], );

        return { success: true,  };
    }

    export   async function deleteP(id:number) {
       const  query = `DELETE FROM products WHERE id = ?`;

        await connection.execute(query, [id]);

        return {
            success: true,
           
        }
    }


export {};

