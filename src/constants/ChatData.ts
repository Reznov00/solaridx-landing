import { ChatRoomInterface, MessageItemInterface } from "src/interfaces";

export const chatHeaderData: MessageItemInterface = {
  _id: '',
  prompt: '',
  chatRoom: {
    _id: '',
    createdAt: '',
    name: '',
  },
  createdAt: '',
  answer: 'I am your bot ask me anything'
}

export const chatRooms: ChatRoomInterface[] = [
  {
    _id: "room_1",
    name: "How are you doing today?",
    createdAt: "2025-01-20T10:30:00Z",
  },
  {
    _id: "room_2",
    name: "Meeting agenda for tomorrow",
    createdAt: "2025-01-18T15:45:00Z",
  },
  {
    _id: "room_3",
    name: "Can you help me with this?",
    createdAt: "2025-01-19T08:20:00Z",
  },
  {
    _id: "room_4",
    name: "What are your weekend plans?",
    createdAt: "2025-01-21T12:00:00Z",
  },
  {
    _id: "room_5",
    name: "Let's brainstorm project ideas",
    createdAt: "2025-01-17T21:10:00Z",
  },
  {
    _id: "room_6",
    name: "Check out this book recommendation",
    createdAt: "2025-01-15T19:30:00Z",
  },
  {
    _id: "roocm_1",
    name: "How are you doing today?",
    createdAt: "2025-01-20T10:30:00Z",
  },
  {
    _id: "roaom_2",
    name: "Meeting agenda for tomorrow",
    createdAt: "2025-01-18T15:45:00Z",
  },
  {
    _id: "roomf_3",
    name: "Can you help me with this?",
    createdAt: "2025-01-19T08:20:00Z",
  },
  {
    _id: "roaom_4",
    name: "What are your weekend plans?",
    createdAt: "2025-01-21T12:00:00Z",
  },
  {
    _id: "rood_5",
    name: "Let's brainstorm project ideas",
    createdAt: "2025-01-17T21:10:00Z",
  },
  {
    _id: "roovm_26",
    name: "Check out this book recommendation",
    createdAt: "2025-01-15T19:30:00Z",
  },
  {
    _id: "rogfomf_3",
    name: "Can you help me with this?",
    createdAt: "2025-01-19T08:20:00Z",
  },
  {
    _id: "roadsfom_4",
    name: "What are your weekend plans?",
    createdAt: "2025-01-21T12:00:00Z",
  },
  {
    _id: "rodsod_5",
    name: "Let's brainstorm project ideas",
    createdAt: "2025-01-17T21:10:00Z",
  },
  {
    _id: "rooscm_26",
    name: "Check out this book recommendation",
    createdAt: "2025-01-15T19:30:00Z",
  },
];

export const dummyChats: MessageItemInterface[] = [
  {
    _id: '1',
    prompt: 'What are the benefits of solar energy?',
    answer: 'Solar energy is renewable, reduces electricity bills, and is environmentally friendly.',
    chatRoom: {
      _id: '101',
      name: 'Benefits of solar energy',
      createdAt: '2025-01-20T10:00:00Z',
    },
    createdAt: '2025-01-20T10:05:00Z',
  },
  {
    _id: '2',
    prompt: 'How does a solar panel work?',
    answer: 'Solar panels convert sunlight into electricity using photovoltaic cells.',
    chatRoom: {
      _id: '102',
      name: 'How solar panels work',
      createdAt: '2025-01-20T11:00:00Z',
    },
    createdAt: '2025-01-20T11:10:00Z',
  },
  {
    _id: '3',
    prompt: 'What is the lifespan of a solar panel?',
    answer: 'On average, a solar panel lasts 25 to 30 years with proper maintenance.',
    chatRoom: {
      _id: '103',
      name: 'Lifespan of solar panels',
      createdAt: '2025-01-20T12:00:00Z',
    },
    createdAt: '2025-01-20T12:15:00Z',
  },
  {
    _id: '4',
    prompt: 'Can solar panels work on cloudy days?',
    answer: 'Yes, solar panels can generate electricity on cloudy days, but their efficiency decreases.',
    chatRoom: {
      _id: '104',
      name: 'Solar panels on cloudy days',
      createdAt: '2025-01-20T13:00:00Z',
    },
    createdAt: '2025-01-20T13:10:00Z',
  },
  {
    _id: '5',
    prompt: 'What are the maintenance requirements for solar panels?',
    answer: 'Solar panels require minimal maintenance, such as regular cleaning and inspection for damage.',
    chatRoom: {
      _id: '105',
      name: 'Solar panel maintenance',
      createdAt: '2025-01-20T14:00:00Z',
    },
    createdAt: '2025-01-20T14:05:00Z',
  },
];

