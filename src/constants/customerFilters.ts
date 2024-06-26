const headers = [
  {
    key: 'Customer',
    title: 'Customer name',
    sortable: false,
    removable: false,
    align: 'start',
  },
  {
    key: 'email',
    title: 'Email',
    sortable: false,
    removable: false,
    align: 'start',
  },
  {
    key: 'phoneNumber',
    title: 'Phone Number',
    sortable: true,
    removable: false,
    align: 'start',
  },
  {
    key: 'price',
    title: 'Spent',
    removable: false,
    align: 'start',
  },
  {
    key: 'itemsNumber',
    title: 'Items NO.',
    sortable: false,
    removable: false,
    align: 'center',
  },
  {
    key: 'joiningDate',
    title: 'Joining date',
    sortable: false,
    removable: false,
    align: 'center',
  },
  {
    key: 'status',
    title: 'Status',
    sortable: true,
    removable: false,
    align: 'center',
  },
];

const items = [
  {
    Customer: 'Mahmod Attar',
    email: 'test@gmail.com',
    phoneNumber: '+965 983 373 282',
    price: ' 20',
    itemsNumber: '451245',
    joiningDate: '21/3/2024',
    status: 'Active',
  },
  {
    orderNumber: '#875243',
    Customer: 'Lorem ipsum ',
    email: 'test@gmail.com',
    phoneNumber: '+965 983 373 282',
    price: ' 20',
    itemsNumber: '451245',
    joiningDate: '21/3/2024',
    status: 'Active',
  },
  {
    orderNumber: '#76459811',
    Customer: 'Lorem ipsum ',
    email: 'test@gmail.com',
    phoneNumber: '+965 983 373 282',
    price: ' 20',
    itemsNumber: '451245',
    joiningDate: '21/3/2024',

    status: 'Blocked',
  },
  {
    orderNumber: '#76459811',
    Customer: 'Lorem ipsum ',
    email: 'test@gmail.com',
    phoneNumber: '+965 983 373 282',
    price: ' 20',
    itemsNumber: '451245',
    joiningDate: '21/3/2024',
    status: 'Blocked',
  },
  {
    orderNumber: '#76459811',
    Customer: 'Lorem ipsum ',
    email: 'test@gmail.com',
    phoneNumber: '+965 983 373 282',
    price: ' 20',
    itemsNumber: '451245',
    joiningDate: '21/3/2024',
    status: 'Active',
  },
  {
    orderNumber: '#76459811',
    Customer: 'Lorem ipsum ',
    email: 'test@gmail.com',
    phoneNumber: '+965 983 373 282',
    price: ' 20',
    itemsNumber: '451245',
    joiningDate: '21/3/2024',
    status: 'Active',
  },
  {
    orderNumber: '#76459811',
    Customer: 'Lorem ipsum ',
    email: 'test@gmail.com',
    phoneNumber: '+965 983 373 282',
    price: ' 20',
    itemsNumber: '451245',
    joiningDate: '21/3/2024',
    status: 'Active',
  },
  {
    orderNumber: '#76459811',
    Customer: 'Lorem ipsum ',
    email: 'test@gmail.com',
    phoneNumber: '+965 983 373 282',
    price: ' 20',
    itemsNumber: '451245',
    joiningDate: '21/3/2024',
    status: 'Rejected',
  },
];
const customerFilters = [
  {
    id: 0,
    label: 'View Details',
    svg: 'eye',

  },
  {
    id: 1,
    label: 'Block',
    svg: 'Block',

  },
  {
    id: 2,
    label: 'Delete',
    svg: 'delete (1)',

  },
  {
    id: 3,
    label: 'Select All',
    icon: '',
  },
  {
    id: 4,
    label: 'Cancel Sellection',
    icon: '',
  },
];

export { headers, items, customerFilters };
