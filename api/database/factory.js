'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Contact', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    phone: faker.phone(),
    message:  faker.paragraph(4)
  }
})
