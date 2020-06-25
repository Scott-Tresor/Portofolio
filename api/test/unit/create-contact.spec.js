'use strict'

const { test } = use('Test/Suite')('Create Contact')

test('can create a challenge if valid data', async({ assert }) => {
  const response = // do api call

  response.assertStatus(201);
})
