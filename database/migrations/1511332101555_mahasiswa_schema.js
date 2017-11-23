'use strict'

const Schema = use('Schema')

class MahasiswaSchema extends Schema {
  up () {
    this.table('mahasiswa', (table) => {
     
    })
  }

  down () {
    this.table('mahasiswa', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MahasiswaSchema
