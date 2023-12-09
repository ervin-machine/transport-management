export const CONTACT_STATUS_LIST = [
    'Salaried',
    'Commission',
    'Terminated',
  ];

  export const newContact = {
    id: 0,
    name: '',
    address: '',
    firstName: '',
    lastName: '',
    status: 'Salaried',
    position: '',
    manager: '',
    company: '',
    city: '',
    state: {
      stateShort: '',
    },
    zipCode: 0,
    phone: '',
    email: '',
    image: '',
    activities: [],
    opportunities: [],
    tasks: [],
  };