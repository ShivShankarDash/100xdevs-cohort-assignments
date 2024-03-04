import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
   
    const sqlQuery = `INSERT INTO USERS (username, password, name) VALUES ($1,$2,$3)`
    const values = [username, password, name]
    const result = await client.query(sqlQuery,values)
    return result.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    
    const sqlQuery  = `SELECT * FROM users WHERE id=$1`;
    const values = [userId]
    const result = await client.query(sqlQuery,values)
    if(result.rows.length > 0){
        return result.rows[0]
    }
    else {
        return null
    }
}
 