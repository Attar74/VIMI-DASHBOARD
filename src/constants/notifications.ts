const headers = [
  {
    key: 'Title',
    title: 'Title',
    sortable: false,
    removable: false,
    align: 'center',
  },
  {
    key: 'Content',
    title: 'Content',
    sortable: false,
    removable: false,
    align: 'start',
  },
  {
    key: 'NotifyTo',
    title: 'Notify to',
    sortable: true,
    removable: false,
    align: 'start',
  },
  {
    key: 'NavigateTo',
    title: 'Navigate to',
    removable: false,
    align: 'start',
  },
  {
    key: 'Schedule',
    title: 'Schedule',
    sortable: false,
    removable: false,
    align: 'center',
  },
  {
    key: 'LastSentDate',
    title: 'Last sent date',
    sortable: false,
    removable: false,
    align: 'center',
  },
  {
    key: 'notificationActions',
    title: '',
    sortable: true,
    removable: false,
    align: 'center',
  },
];

const items = [
  {
    id: 1,
    Title: 'Failed to return',
    Content: 'Lorem ipsum dolor sit ame consectetur... ',
    NotifyTo: 'All Users',
    NavigateTo: 'Custom products',
    LastSentDate: '21/3/2024',
    Schedule: 'Daily',
  },
  {
    id: 0,
    Title: 'Failed to return',
    Content: 'Lorem ipsum dolor sit ame consectetur... ',
    NotifyTo: 'All Users',
    NavigateTo: 'Custom products',
    LastSentDate: '21/3/2024',
    Schedule: 'Daily',
  },
];
const notificationsFilter = [
  {
    id: 0,
    label: 'View Details',
    svg: 'eye',
  },
  {
    id: 1,
    label: 'Edit',
    svg: 'edit (1)',
  },
  {
    id: 2,
    label: 'Delete',
    svg: 'delete (1)',
  },
  {
    id: 4,
    label: 'Select All',
    icon: '',
  },
  {
    id: 5,
    label: 'Cancel Selection',
    icon: '',
  },
];

export { headers, items, notificationsFilter };
