// import { connect } from 'http2';
import * as mysql from 'mysql';
import chirps from './chirps';
import users from './users';



export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:'chirprapp',
    database: 'chirpr'
});

export const Query = (Query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(Query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
chirps,
users
}