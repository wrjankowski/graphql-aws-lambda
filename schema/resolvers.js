'use strict'

module.exports = {
  Query: {
    allMessages: (root, {}, {} ) => {
      return [
        {id: 1, content: 'Witamy!!!'},
        {id: 2, content: 'Welcome'}
      ]
    }
  }
}
