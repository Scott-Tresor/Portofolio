'use strict'

class Contact {
  get rules () {
    return {
        username: 'required',
        email: 'required|email',
        phone: 'required',
        message: 'required'
      }
  }
}

module.exports = Contact
