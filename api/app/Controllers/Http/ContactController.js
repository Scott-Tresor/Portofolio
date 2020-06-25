'use strict'


const Contact = use('App/Models/Contact')


class ContactController {
  async index({ request, response, view }) {
    const contact = await Contact.all()
    return response.json(contact)
  }
}

module.exports = ContactController
