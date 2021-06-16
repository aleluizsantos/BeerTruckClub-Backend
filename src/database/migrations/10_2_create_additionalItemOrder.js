exports.up = async function (knex) {
  return knex.schema.createTable("additionalItemOrder", (table) => {
    table.increments("id").primary();

    table.integer("request_id").notNullable();
    table.foreign("request_id").references("id").inTable("request");

    table.integer("itemOrder_id").notNullable();
    table.foreign("itemOrder_id").references("id").inTable("itemsRequets");

    table.integer("additional_id").notNullable();
    table.foreign("additional_id").references("id").inTable("additional");
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTable("additionalItemOrder");
};
