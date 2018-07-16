
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skits').del()
    .then(function () {
      // Inserts seed entries
      return knex('skits').insert([
        {title: 'Best of mitchHedberg', video_url: `https://www.youtube.com/watch?v=bVceIdoWf5o`, artist_id: 2},
        {title: 'Be a man', video_url: `https://www.youtube.com/watch?v=ITwPzduUmCw`, artist_id: 1},
        {title: 'Geroge Carlin', video_url: `https://www.youtube.com/watch?v=Qn16DsftSjI`, artist_id: 3}
      ]);
    });
};
