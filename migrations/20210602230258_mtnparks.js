exports.up = function (knex) {
  return knex.schema.createTable('mtnparks', table => {
    table.increments('id')
    table.string('title')
    table.string('description')
    table.string('conditions')
    table.decimal('lat')
    table.decimal('lon')
    table.string('image')
    table.string('area')
    table.string('access')
    table.boolean('special')
    table.boolean('costs')
    table.boolean('club')
    table.string('website')
    table.decimal('difficulty')
  }
  )
}

exports.down = function (knex) {
  return knex.schema.dropTable('mtnparks')
}
