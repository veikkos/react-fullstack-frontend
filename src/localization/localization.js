import LocalizedStrings from 'react-localization'

const strings = new LocalizedStrings({
  en: {
    name: 'Name',
    address: 'Address',
    developer: 'Developer',
    showDevelopers: 'Show developers',
    add: 'Add'
  },
  fi: {
    name: 'Nimi',
    address: 'Osoite',
    developer: 'Kehittäjä',
    showDevelopers: 'Näytä kehittäjät',
    add: 'Lisää'
  }
})

export default strings
