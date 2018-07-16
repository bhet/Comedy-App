
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table)=>{
    table.increments();
    table.text('comment');
    table.integer('skit_id')
    .references('id')
    .inTable('skits')
    .onDelete('CASCADE')
    .index();
    table.timestamps(true. true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
