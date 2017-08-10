
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {user_id: 1, event: 'funk da alemanha', ticket_hash: 'HASH23H213123H12H312HASDA', avaiable: false},
        {user_id: 1, event: 'funk da alemanha', ticket_hash: 'HASH23H213123H12H312HASDA', avaiable: false},
        {user_id: 1, event: 'funk da alemanha', ticket_hash: 'HASH23H213123H12H312HASDA', avaiable: false}
      ]);
    });
};
