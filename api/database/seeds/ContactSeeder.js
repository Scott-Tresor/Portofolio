'use strict'

/*
|--------------------------------------------------------------------------
| ContactSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ContactSeeder {
  async run () {
    await Factory
              .model('App/Models/Contact')
              .createMany(10)
  }
}

module.exports = ContactSeeder
