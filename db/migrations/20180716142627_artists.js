
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', (table)=>{
    table.increments();    
    table.string('fullname');
    table.integer('age');
    table.string('city');
    table.text('bio');
    table.string('email');
    table.string('password');
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists');
};
