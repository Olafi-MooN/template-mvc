const db = require('../../database/db-config');

const insert = async (first_name, last_name) => {
    const user = await db('users').insert(
        {
            first_name,
            last_name
        }
    );
    return user;
}

module.exports = insert;