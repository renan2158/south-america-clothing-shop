exports.up = function(knex) {
    return knex.schema.createTable('items', function (table) {
        table.increments('id');
        table.string('imageUrl').notNullable();
        table.string('description').notNullable();
        table.string('size').notNullable();
        table.string('category').notNullable();
        table.string('gender').notNullable();
        table.decimal('price').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('items');
};
