// 1. Criar uma tabela
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
        }) 
};

// 1.2 Deleta a tabela
exports.down = function(knex) {
    return knex.schema
        .dropTable("users");
};
