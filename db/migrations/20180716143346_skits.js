
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skits', (table)=>{
    table.increments();
    table.string('title');
    table.text('video_url');
    table.integer('artist_id')
    .references('id')
    .inTable('artists')
    .onDelete('CASCADE')
    .index();
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('skits');
};
