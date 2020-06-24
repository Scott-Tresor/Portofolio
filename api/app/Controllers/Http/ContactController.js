'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const Contact = use('App/Models/Contact');

class ContactController {

  async index ({view, response}) {
    const user = await Contact.all()

  }

  async create ({ request, response, view }) {
  }

}

module.exports = ContactController
