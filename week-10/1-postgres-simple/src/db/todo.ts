import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    
    const sqlQuery = `INSERT INTO todos (user_id, title, description) VALUES ($1,$2,$3) RETURNING *`
    const values = [userId,title,description]
    const result = await client.query(sqlQuery,values)
    return result.rows[0]
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    
    const sqlQuery = `UPDATE todos SET done=$2 where id=$1 RETURNING *`
    const values = [todoId,true]
    const result = await client.query(sqlQuery,values)
    return result.rows[0]
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    
    const sqlQuery = `SELECT * FROM todos where user_id=$1`
    const values = [userId]
    const result = await client.query(sqlQuery,values)
    return result.rows
}