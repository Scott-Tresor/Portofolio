'use strict'


const Contact = use('App/Models/Contact')


class ContactController {
  async index({ request, response, view }) {
    const contact = await Contact.all()
    return response.json(contact)
  }

  async store({request, response})
  {
    const name = request.input('name')
    const email = request.input('email')
    const title = request.input('title')
    const tel = request.input('tel')

    const contact = new Contact()
    contact.name = name
    contact.email = email
    contact.title = title
    contact.tel = tel

    await contact.save()
    return response.json(contact)
  }
}

module.exports = ContactController
