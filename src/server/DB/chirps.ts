import { query }from './index';


const all = async () => query('select * from chirps');
const one = async (id: number) => query('SELCT * from chirps where id =?',[id]);
const insert = (userid: number, message: string, _insertId: number) => query('INSERT INTO chirps (userid, message) VALUE (?)', [[userid, message]]);
const update = (message: string, id: number) => query('UPDATE chirps SET message = ? WHERE id = ?', [message, id]);
const destroy = (id: number) => query('DELETE FROM chirps WHERE id = ?', [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
};