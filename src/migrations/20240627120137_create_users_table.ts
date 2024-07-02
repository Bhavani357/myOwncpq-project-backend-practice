// const Knex = require('knex');

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
