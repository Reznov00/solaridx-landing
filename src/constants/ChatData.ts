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
    name: "Introduction to Solar Energy",
    createdAt: "2025-01-20T10:30:00Z",
  },
  {
    _id: "room_2",
    name: "Best Solar Panels in 2025",
    createdAt: "2025-01-18T15:45:00Z",
  },
  {
    _id: "room_3",
    name: "How to Calculate Solar Efficiency",
    createdAt: "2025-01-19T08:20:00Z",
  },
  {
    _id: "room_4",
    name: "Off-Grid vs On-Grid Solar Systems",
    createdAt: "2025-01-21T12:00:00Z",
  },
  {
    _id: "room_5",
    name: "Solar Energy Myths Debunked",
    createdAt: "2025-01-17T21:10:00Z",
  },
  {
    _id: "room_6",
    name: "Latest Solar Innovations",
    createdAt: "2025-01-15T19:30:00Z",
  },
  {
    _id: "room_7",
    name: "How to Store Solar Power Efficiently",
    createdAt: "2025-01-20T10:30:00Z",
  },
  {
    _id: "room_8",
    name: "Understanding Net Metering",
    createdAt: "2025-01-18T15:45:00Z",
  },
  {
    _id: "room_9",
    name: "Solar Energy for Homes: Cost & Benefits",
    createdAt: "2025-01-19T08:20:00Z",
  },
  {
    _id: "room_10",
    name: "DIY Solar Panel Installation Guide",
    createdAt: "2025-01-21T12:00:00Z",
  },
  {
    _id: "room_11",
    name: "Solar Incentives & Government Policies",
    createdAt: "2025-01-17T21:10:00Z",
  },
  {
    _id: "room_12",
    name: "The Future of Solar Technology",
    createdAt: "2025-01-15T19:30:00Z",
  },
  {
    _id: "room_13",
    name: "Solar Panels vs Solar Tiles: Which is Better?",
    createdAt: "2025-01-19T08:20:00Z",
  },
  {
    _id: "room_14",
    name: "How Weather Affects Solar Performance",
    createdAt: "2025-01-21T12:00:00Z",
  },
  {
    _id: "room_15",
    name: "Choosing the Right Solar Battery",
    createdAt: "2025-01-17T21:10:00Z",
  },
  {
    _id: "room_16",
    name: "Solar Farming: How It Works",
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

