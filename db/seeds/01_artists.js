
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {fullname: 'Donnie Z', age: 45, city: 'Mesa', bio: 'He does not know what a bio is', email: 'don@don.com', password: 'dilbert'},
        {fullname: 'Timmy K', age: 23, city: 'Tempe', bio: 'Moved from Seattle and feels less depressed, but warmer', email: 'tim@tim.com', password: 'timtim'},
        {fullname: 'T Yazzie', age: 26, city: 'Tempe', bio: 'Comes from a famous line of coders know as the "Yazzies"', email: 'ty@ty.com', password: 'tyty'}
      ]);
    });
};
