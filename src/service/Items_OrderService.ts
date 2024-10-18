const{connection } = require('../BD/db')


export async function create( Id_Produto: string , Id_Pedido:string) {
    // Realizar a query para cadastrar um novo produto
        const query= `INSERT INTO items_order (Id_Produto , Id_Pedido) 
        VALUES(?,?)`;

        await connection.execute([Id_Produto , Id_Pedido])

        return { success: true,}
    }

    export  async  function index() {
        // Realizar a query para recuperar todos os produtos
            const query = `SELECT * FROM items_order`;

            const [rows ]: any = await connection.execute(query);
        return {
            success: true,
          
            result: rows,

        };
    }

    export async function show( id:number) {
        // Realizar a query para recuperar um produto pelo ID
        const query = `SELECT * FROM items_order WHERE id = ?`;

        const [rows] :any = await connection.execute(query, [id] );

        return {
            success: true,
          
            result: rows[0],
        };
    }

    export   async function update(id:number,Id_Produto: string , Id_Pedido:string) {
        // Realizar a query para atualizar um produto pelo ID
        const query = `UPDATE items_order SET  Id_Produto = ?, Id_Pedido = ? WHERE id = ?`;
        await connection.execute(query,[Id_Produto , Id_Pedido, id], );

        return { success: true, };
    }

    export   async function deleteIO(id:number) {
       const  query = `DELETE FROM items_order WHERE id = ?`;

        await connection.execute(query, [id]);

        return {
            success: true,
          
        }
    }


export {};