import Flight from "../model/Flight";

const flights: Flight[] = [
  {
    id: 1,
    code:'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Antalya Airport',
    departureDate: '2024-03-18T09:00:00',
    returnDate: '2024-04-18T14:30:00',
    duration: '5h 30m',
    price: 980,
  },
  {
    id: 2,
    code:'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Antalya Airport',
    departureDate: '2024-05-19T12:30:00',
    returnDate: '2024-06-19T18:45:00',
    duration: '6h 15m',
    price: 786,
  },
  {
    id: 3,
    code:'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Antalya Airport',
    departureDate: '2024-03-20T15:45:00',
    returnDate: '2024-04-21T10:30:00',
    duration: '5h 45m',
    price: 875,
  },
  {
    id: 4,
    code:'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Sivas Airport',
    departureDate: '2024-04-22T08:00:00',
    returnDate: '2024-05-23T16:45:00',
    duration: '3h 45m',
    price: 760,
  },
  {
    id: 5,
    code:'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Sivas Airport',
    departureDate: '2024-03-24T11:30:00',
    returnDate: '2024-04-25T19:15:00',
    duration: '3h 25m',
    price: 590,
  },
  {
    id: 6,
    code: 'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Sivas Airport',
    departureDate: '2024-03-26T14:15:00',
    returnDate: '2024-04-27T20:30:00',
    duration: '6h 15m',
    price: 900,
  },
  {
    id: 7,
    code: 'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-28T17:30:00',
    returnDate: '2024-04-29T22:45:00',
    duration: '3h 15m',
    price: 870,
  },
  {
    id: 9,
    code: 'Ist',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-04T13:00:00',
    returnDate: '2024-04-02T18:15:00',
    duration: '2h 35m',
    price: 675,
  },
  {
    id: 10,
    code: 'Ist',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-04T17:00:00',
    returnDate: '2024-04-02T19:50:00',
    duration: '2h 50m',
    price: 695,
  },
  {
    id: 11,
    code: 'Ist',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-04T14:20:00',
    returnDate: '2024-04-02T19:50:00',
    duration: '5h 30m',
    price: 780,
  },
  {
  id: 12,
  code: 'Ist',
  departureAirport: 'Istanbul Airport',
  arrivalAirport: 'Adana Sakirpaşa Airport',
  departureDate: '2024-03-04T13:00:00',
  returnDate: '2024-04-02T18:10:00',
  duration: '5h 10m',
  price: 880,
  },
  {
    id: 13,
    code: 'Ist',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-04T16:00:00',
    returnDate: '2024-04-02T21:30:00',
    duration: '5h 20m',
    price: 730,
  },
  {
    id: 14,
    code: 'MLX',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-14T05:15:00',
    returnDate: '2024-04-12T07:25:00',
    duration: '3h 25m',
    price: 730,
  },
  {
    id: 15,
    code: 'MLX',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-15T06:30:00',
    returnDate: '2024-04-13T08:40:00',
    duration: '3h 20m',
    price: 750,
  },
  {
  id: 16,
  code: 'MLX',
  departureAirport: 'Istanbul Airport',
  arrivalAirport: 'Bodrum Milas Airport',
  departureDate: '2024-03-16T08:45:00',
  returnDate: '2024-04-14T10:55:00',
  duration: '3h 30m',
  price: 720,
  },
  {
    id: 17,
      code: 'IST',
      departureAirport: 'Istanbul Airport',
      arrivalAirport: 'Ankara Esenboğa Airport',
      departureDate: '2024-03-16T12:30:00',
      returnDate: '2024-04-14T14:15:00',
      duration: '1h 30m',
      price: 868,
    },
    {
    id: 18,
    code: 'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-16T12:30:00',
    returnDate: '2024-04-14T13:45:00',
    duration: '1h 10m',
    price: 908,
  },
  {
    id: 19,
    code: 'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-16T17:30:00',
    returnDate: '2024-04-14T16:35:00',
    duration: '1h 5m',
    price: 790,
  },
  {
    id: 20,
    code: 'BJV',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-04-22T10:15:00',
    returnDate: '2024-05-22T15:30:00',
    duration: '1h 5m',
    price: 768,
  },
  {
    id: 21,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-23T12:00:00',
    returnDate: '2024-04-23T17:15:00',
    duration: '3h 15m',
    price: 890,
  },
  {
    id: 22,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-04-24T13:30:00',
    returnDate: '2024-05-24T18:45:00',
    duration: '3h 45m',
    price: 910,
  },
  {
    id: 23,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-25T15:00:00',
    returnDate: '2024-04-25T20:15:00',
    duration: '3h 25m',
    price: 880,
  },
  {
    id: 24,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-26T16:30:00',
    returnDate: '2024-04-26T21:45:00',
    duration: '3h 10m',
    price: 900,
  },
  {
    id: 25,
    code: 'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-23T12:00:00',
    returnDate: '2024-04-23T17:15:00',
    duration: '3h 15m',
    price: 890,
  },
  {
    id: 26,
    code: 'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-24T13:30:00',
    returnDate: '2024-05-24T18:45:00',
    duration: '3h 45m',
    price: 910,
  },
  {
    id: 27,
    code: 'IST',
    departureAirport: 'Istanbul Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-25T15:00:00',
    returnDate: '2024-04-25T20:15:00',
    duration: '3h 25m',
    price: 880,
  },
  {
    id: 28,
    code:'AYT',
    departureAirport: 'Antalya Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-18T09:00:00',
    returnDate: '2024-04-18T14:30:00',
    duration: '5h 30m',
    price: 980,
  },
  {
    id: 29,
    code:'AYT',
    departureAirport: 'Antalya Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-19T12:30:00',
    returnDate: '2024-04-19T18:45:00',
    duration: '6h 15m',
    price: 786,
  },
  {
    id: 30,
    code:'AYT',
    departureAirport: 'Antalya Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-20T15:45:00',
    returnDate: '2024-04-21T10:30:00',
    duration: '5h 45m',
    price: 875,
  },
  {
    id: 31,
    code:'SVS',
    departureAirport: 'Sivas Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-22T08:00:00',
    returnDate: '2024-04-23T16:45:00',
    duration: '3h 45m',
    price: 760,
  },
  {
    id: 32,
    code:'IST',
    departureAirport: 'Sivas Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-24T11:30:00',
    returnDate: '2024-04-25T19:15:00',
    duration: '3h 25m',
    price: 590,
  },
  {
    id: 33,
    code: 'IST',
    departureAirport: 'Sivas Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-26T14:15:00',
    returnDate: '2024-04-27T20:30:00',
    duration: '6h 15m',
    price: 900,
  },
  {
    id: 34,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-28T17:30:00',
    returnDate: '2024-04-29T22:45:00',
    duration: '3h 15m',
    price: 870,
  },
  {
    id: 35,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-04T13:00:00',
    returnDate: '2024-04-02T18:15:00',
    duration: '3h 35m',
    price: 675,
  },
  {
    id: 36,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport:  'Istanbul Airport',
    departureDate: '2024-03-04T17:00:00',
    returnDate: '2024-04-02T19:50:00',
    duration: '2h 50m',
    price: 695,
  },
  {
    id: 37,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-04T14:20:00',
    returnDate: '2024-04-02T19:50:00',
    duration: '5h 18m',
    price: 780,
  },
  {
  id: 38,
  code: 'ADB',
  departureAirport: 'Adana Sakirpaşa Airport',
  arrivalAirport: 'Istanbul Airport',
  departureDate: '2024-03-04T13:00:00',
  returnDate: '2024-04-02T18:10:00',
  duration: '5h 10m',
  price: 880,
  },
  {
    id: 39,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-04T16:00:00',
    returnDate: '2024-04-02T21:30:00',
    duration: '5h 30m',
    price: 790,
  },
  {
    id: 40,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-14T05:15:00',
    returnDate: '2024-04-12T07:25:00',
    duration: '3h 25m',
    price: 730,
  },
  {
    id: 41,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-15T06:30:00',
    returnDate: '2024-04-13T08:40:00',
    duration: '3h 20m',
    price: 750,
  },
  {
    id: 42,
      code: 'ANK',
      departureAirport: 'Ankara Esenboğa Airport',
      arrivalAirport: 'Istanbul Airport',
      departureDate: '2024-03-16T12:30:00',
      returnDate: '2024-04-14T14:15:00',
      duration: '1h 30m',
      price: 868,
    },
    {
    id: 43,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-16T12:30:00',
    returnDate: '2024-04-14T13:45:00',
    duration: '1h 10m',
    price: 908,
  },
  {
    id: 44,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Istanbul Airport',
    departureDate: '2024-03-16T17:30:00',
    returnDate: '2024-04-14T16:35:00',
    duration: '1h 5m',
    price: 790,
  },
  {
    id: 45,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-23T11:30:00',
    returnDate: '2024-04-23T16:45:00',
    duration: '1h 10m',
    price: 800,
  },
  {
    id: 46,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-24T13:00:00',
    returnDate: '2024-04-24T18:15:00',
    duration: '1h 5m',
    price: 820,
  },
  {
    id: 47,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-25T14:30:00',
    returnDate: '2024-04-25T19:45:00',
    duration: '1h 15m',
    price: 780,
  },
  {
    id: 45,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-23T11:30:00',
    returnDate: '2024-04-23T16:45:00',
    duration: '1h 10m',
    price: 800,
  },
  {
    id: 46,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-24T13:00:00',
    returnDate: '2024-04-24T18:15:00',
    duration: '1h 5m',
    price: 820,
  },
  {
    id: 47,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-25T14:30:00',
    returnDate: '2024-04-25T19:45:00',
    duration: '1h 15m',
    price: 780,
  },
  {
    id: 48,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-01T08:45:00',
    returnDate: '2024-04-01T13:00:00',
    duration: '1h 30m',
    price: 680,
  },
  {
    id: 49,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-02T10:15:00',
    returnDate: '2024-04-02T14:30:00',
    duration: '1h 25m',
    price: 700,
  },
  {
    id: 50,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-03T11:45:00',
    returnDate: '2024-04-03T16:00:00',
    duration: '1h 20m',
    price: 720,
  },
  {
    id: 51,
    code: 'BJM',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-01T08:45:00',
    returnDate: '2024-04-01T13:00:00',
    duration: '1h 30m',
    price: 680,
  },
  {
    id: 52,
    code: 'BJM',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-02T10:15:00',
    returnDate: '2024-04-02T14:30:00',
    duration: '1h 25m',
    price: 700,
  },
  {
    id: 53,
    code: 'BJM',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-03T11:45:00',
    returnDate: '2024-04-03T16:00:00',
    duration: '1h 20m',
    price: 720,
  },
  {
    id: 54,
    code: 'SVS',
    departureAirport: 'Sivas Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-10T13:30:00',
    returnDate: '2024-04-10T18:45:00',
    duration: '2h 10m',
    price: 850,
  },
  {
    id: 55,
    code: 'SVS',
    departureAirport: 'Sivas Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-11T15:00:00',
    returnDate: '2024-04-11T20:15:00',
    duration: '2h 5m',
    price: 870,
  },
  {
    id: 56,
    code: 'SVS',
    departureAirport: 'Sivas Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-12T16:30:00',
    returnDate: '2024-04-12T21:45:00',
    duration: '2h',
    price: 890,
  },
  {
    id: 57,
    code: 'GZT',
    departureAirport:'Gaziantep Airport',
    arrivalAirport: 'Sivas Airport',
    departureDate: '2024-03-10T13:30:00',
    returnDate: '2024-04-10T18:45:00',
    duration: '2h 10m',
    price: 850,
  },
  {
    id: 58,
    code: 'GZT',
    departureAirport:'Gaziantep Airport',
    arrivalAirport: 'Sivas Airport',
    departureDate: '2024-03-11T15:00:00',
    returnDate: '2024-04-11T20:15:00',
    duration: '2h 5m',
    price: 870,
  },
  {
    id: 59,
    code: 'GZT',
    departureAirport:'Gaziantep Airport',
    arrivalAirport: 'Sivas Airport',
    departureDate: '2024-03-12T16:30:00',
    returnDate: '2024-04-12T21:45:00',
    duration: '2h',
    price: 890,
  },
  {
    id: 60,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-15T09:45:00',
    returnDate: '2024-04-15T14:45:00',
    duration: '2h 30m',
    price: 920,
  },
  {
    id: 61,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-16T11:15:00',
    returnDate: '2024-04-16T16:15:00',
    duration: '2h 25m',
    price: 940,
  },
  {
    id: 62,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-17T12:45:00',
    returnDate: '2024-04-17T17:45:00',
    duration: '2h 20m',
    price: 960,
  },
  {
    id: 63,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-15T09:45:00',
    returnDate: '2024-04-15T14:45:00',
    duration: '2h 30m',
    price: 920,
  },
  {
    id: 64,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-16T11:15:00',
    returnDate: '2024-04-16T16:15:00',
    duration: '2h 25m',
    price: 940,
  },
  {
    id: 65,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-17T12:45:00',
    returnDate: '2024-04-17T17:45:00',
    duration: '2h 20m',
    price: 960,
  },
  {
    id: 66,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-15T10:30:00',
    returnDate: '2024-04-15T15:30:00',
    duration: '1h 45m',
    price: 850,
  },
  {
    id: 67,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-16T12:00:00',
    returnDate: '2024-04-16T17:00:00',
    duration: '1h 50m',
    price: 870,
  },
  {
    id: 68,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-17T13:30:00',
    returnDate: '2024-04-17T18:30:00',
    duration: '1h 55m',
    price: 890,
  },
  {
    id: 69,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-15T10:30:00',
    returnDate: '2024-04-15T15:30:00',
    duration: '1h 45m',
    price: 850,
  },
  {
    id: 70,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-16T12:00:00',
    returnDate: '2024-04-16T17:00:00',
    duration: '1h 50m',
    price: 870,
  },
  {
    id: 71,
    code: 'BJM',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-17T13:30:00',
    returnDate: '2024-04-17T18:30:00',
    duration: '1h 55m',
    price: 890,
  },
  {
    id: 72,
    code: 'SVS',
    departureAirport: 'Sivas Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-20T09:45:00',
    returnDate: '2024-04-20T14:45:00',
    duration: '2h 15m',
    price: 780,
  },
  {
    id: 73,
    code: 'SVS',
    departureAirport: 'Sivas Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-21T11:15:00',
    returnDate: '2024-04-21T16:15:00',
    duration: '2h 20m',
    price: 800,
  },
  {
    id: 74,
    code: 'SVS',
    departureAirport: 'Sivas Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-22T12:45:00',
    returnDate: '2024-04-22T17:45:00',
    duration: '2h 25m',
    price: 820,
  },
  {
    id: 75,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport:  'Sivas Airport',
    departureDate: '2024-03-20T09:45:00',
    returnDate: '2024-04-20T14:45:00',
    duration: '2h 15m',
    price: 780,
  },
  {
    id: 76,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport:  'Sivas Airport',
    departureDate: '2024-03-21T11:15:00',
    returnDate: '2024-04-21T16:15:00',
    duration: '2h 20m',
    price: 800,
  },
  {
    id: 77,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport:  'Sivas Airport',
    departureDate: '2024-03-22T12:45:00',
    returnDate: '2024-04-22T17:45:00',
    duration: '2h 25m',
    price: 820,
  },
  {
    id: 78,
    code: 'AYT',
    departureAirport: 'Antalya Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-25T08:30:00',
    returnDate: '2024-04-25T12:30:00',
    duration: '1h 45m',
    price: 550,
  },
  {
    id: 79,
    code: 'AYT',
    departureAirport: 'Antalya Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-26T10:00:00',
    returnDate: '2024-04-26T14:00:00',
    duration: '1h 50m',
    price: 570,
  },
  {
    id: 80,
    code: 'AYT',
    departureAirport: 'Antalya Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-27T11:30:00',
    returnDate: '2024-04-27T15:30:00',
    duration: '1h 55m',
    price: 590,
  },
  {
    id: 81,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Antalya Airport',
    departureDate: '2024-03-25T08:30:00',
    returnDate: '2024-04-25T12:30:00',
    duration: '1h 45m',
    price: 550,
  },
  {
    id: 82,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Antalya Airport',
    departureDate: '2024-03-26T10:00:00',
    returnDate: '2024-04-26T14:00:00',
    duration: '1h 50m',
    price: 570,
  },
  {
    id: 83,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Antalya Airport',
    departureDate: '2024-03-27T11:30:00',
    returnDate: '2024-04-27T15:30:00',
    duration: '1h 55m',
    price: 590,
  },
  {
    id: 84,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-28T14:45:00',
    returnDate: '2024-04-28T18:45:00',
    duration: '1h 30m',
    price: 480,
  },
  {
    id: 85,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-29T16:00:00',
    returnDate: '2024-04-29T20:00:00',
    duration: '1h 35m',
    price: 500,
  },
  {
    id: 86,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-03-30T17:15:00',
    returnDate: '2024-04-30T21:15:00',
    duration: '1h 40m',
    price: 520,
  },
  {
    id: 87,
    code: 'ANK',
    departureAirport:'Ankara Esenboğa Airport',
    arrivalAirport:  'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-28T14:45:00',
    returnDate: '2024-04-28T18:45:00',
    duration: '1h 30m',
    price: 480,
  },
  {
    id: 88,
    code: 'ANK',
    departureAirport:'Ankara Esenboğa Airport',
    arrivalAirport:  'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-29T16:00:00',
    returnDate: '2024-04-29T20:00:00',
    duration: '1h 35m',
    price: 500,
  },
  {
    id: 89,
    code: 'ANK',
    departureAirport:'Ankara Esenboğa Airport',
    arrivalAirport:  'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-30T17:15:00',
    returnDate: '2024-04-30T21:15:00',
    duration: '1h 40m',
    price: 520,
  },
  {
    id: 90,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-15T10:30:00',
    returnDate: '2024-04-10T15:45:00',
    duration: '1h 50m',
    price: 600,
  },
  {
    id: 91,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-16T11:45:00',
    returnDate: '2024-04-11T16:30:00',
    duration: '1h 55m',
    price: 620,
  },
  {
    id: 92,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-17T13:00:00',
    returnDate: '2024-04-12T17:15:00',
    duration: '2h 0m',
    price: 640,
  },
  {
    id: 93,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-18T14:15:00',
    returnDate: '2024-04-13T18:30:00',
    duration: '2h 5m',
    price: 660,
  },
  {
    id: 94,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-03-19T15:30:00',
    returnDate: '2024-04-14T19:45:00',
    duration: '2h 10m',
    price: 680,
  },
  {
    id: 95,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport:'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-15T10:30:00',
    returnDate: '2024-04-10T15:45:00',
    duration: '1h 50m',
    price: 600,
  },
  {
    id: 96,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport:'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-16T11:45:00',
    returnDate: '2024-04-11T16:30:00',
    duration: '1h 55m',
    price: 620,
  },
  {
    id: 97,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport:'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-17T13:00:00',
    returnDate: '2024-04-12T17:15:00',
    duration: '2h 0m',
    price: 640,
  },
  {
    id: 98,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport:'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-18T14:15:00',
    returnDate: '2024-04-13T18:30:00',
    duration: '2h 5m',
    price: 660,
  },
  {
    id: 99,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport:'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-19T15:30:00',
    returnDate: '2024-04-14T19:45:00',
    duration: '2h 10m',
    price: 680,
  },
 {
    id: 100,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-04-05T08:30:00',
    returnDate: '2024-05-05T12:30:00',
    duration: '1h 45m',
    price: 550,
  },
  {
    id: 101,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-04-06T10:00:00',
    returnDate: '2024-05-06T14:00:00',
    duration: '2h',
    price: 580,
  },
  {
    id: 102,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-04-07T11:30:00',
    returnDate: '2024-05-07T15:30:00',
    duration: '2h 15m',
    price: 610,
  },
  {
    id: 103,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-04-08T13:00:00',
    returnDate: '2024-05-08T17:00:00',
    duration: '2h 30m',
    price: 640,
  },
  {
    id: 104,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Ankara Esenboğa Airport',
    departureDate: '2024-04-09T14:30:00',
    returnDate: '2024-05-09T18:30:00',
    duration: '2h 45m',
    price: 670,
  },
  {
    id: 105,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-05T08:30:00',
    returnDate: '2024-05-05T12:30:00',
    duration: '1h 45m',
    price: 550,
  },
  {
    id: 106,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-06T10:00:00',
    returnDate: '2024-05-06T14:00:00',
    duration: '2h',
    price: 580,
  },
  {
    id: 107,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-07T11:30:00',
    returnDate: '2024-05-07T15:30:00',
    duration: '2h 15m',
    price: 610,
  },
  {
    id: 108,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-08T13:00:00',
    returnDate: '2024-05-08T17:00:00',
    duration: '2h 30m',
    price: 640,
  },
  {
    id: 109,
    code: 'ANK',
    departureAirport: 'Ankara Esenboğa Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-09T14:30:00',
    returnDate: '2024-05-09T18:30:00',
    duration: '2h 45m',
    price: 670,
  },
  {
    id: 110,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-05T08:30:00',
    returnDate: '2024-05-05T12:30:00',
    duration: '1h 15m',
    price: 350,
  },
  {
    id: 111,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-06T10:00:00',
    returnDate: '2024-05-06T14:00:00',
    duration: '1h 20m',
    price: 370,
  },
  {
    id: 112,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-07T11:30:00',
    returnDate: '2024-05-07T15:30:00',
    duration: '1h 25m',
    price: 390,
  },
  {
    id: 113,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-08T13:00:00',
    returnDate: '2024-05-08T17:00:00',
    duration: '1h 30m',
    price: 410,
  },
  {
    id: 114,
    code: 'ADB',
    departureAirport: 'Adana Sakirpaşa Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-09T14:30:00',
    returnDate: '2024-05-09T18:30:00',
    duration: '1h 35m',
    price: 430,
  },
  {
    id: 115,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-05T08:30:00',
    returnDate: '2024-05-05T12:30:00',
    duration: '1h 15m',
    price: 350,
  },
  {
    id: 116,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-06T10:00:00',
    returnDate: '2024-05-06T14:00:00',
    duration: '1h 20m',
    price: 370,
  },
  {
    id: 117,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-07T11:30:00',
    returnDate: '2024-05-07T15:30:00',
    duration: '1h 25m',
    price: 390,
  },
  {
    id: 118,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-08T13:00:00',
    returnDate: '2024-05-08T17:00:00',
    duration: '1h 30m',
    price: 410,
  },
  {
    id: 119,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Adana Sakirpaşa Airport',
    departureDate: '2024-04-09T14:30:00',
    returnDate: '2024-05-09T18:30:00',
    duration: '1h 35m',
    price: 430,
  },
  {
    id: 120,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-03-31T10:30:00',
    returnDate: '2024-04-01T14:30:00',
    duration: '1h 15m',
    price: 400,
  },
  {
    id: 121,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-04-01T12:00:00',
    returnDate: '2024-05-02T16:00:00',
    duration: '1h 20m',
    price: 420,
  },
  {
    id: 123,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-04-02T13:30:00',
    returnDate: '2024-05-03T17:30:00',
    duration: '1h 25m',
    price: 440,
  },
  {
    id: 124,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-04-03T15:00:00',
    returnDate: '2024-05-04T19:00:00',
    duration: '1h 30m',
    price: 460,
  },
  {
    id: 125,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Izmir Adnan Menderes Airport',
    departureDate: '2024-04-04T16:30:00',
    returnDate: '2024-05-05T20:30:00',
    duration: '1h 35m',
    price: 480,
  },
  {
    id: 126,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-31T10:30:00',
    returnDate: '2024-04-01T14:30:00',
    duration: '1h 15m',
    price: 400,
  },
  {
    id: 127,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-01T12:00:00',
    returnDate: '2024-05-02T16:00:00',
    duration: '1h 20m',
    price: 420,
  },
  {
    id: 128,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-02T13:30:00',
    returnDate: '2024-05-03T17:30:00',
    duration: '1h 25m',
    price: 440,
  },
  {
    id: 129,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-03T15:00:00',
    returnDate: '2024-05-04T19:00:00',
    duration: '1h 30m',
    price: 460,
  },
  {
    id: 130,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-04-04T16:30:00',
    returnDate: '2024-05-05T20:30:00',
    duration: '1h 35m',
    price: 480,
  },
  {
    id: 131,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-10T08:30:00',
    returnDate: '2024-04-08T12:30:00',
    duration: '2h 15m',
    price: 620,
  },
  {
    id: 132,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-11T09:45:00',
    returnDate: '2024-04-09T13:45:00',
    duration: '2h 20m',
    price: 640,
  },
  {
    id: 133,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-12T11:00:00',
    returnDate: '2024-04-10T15:00:00',
    duration: '2h 25m',
    price: 660,
  },
  {
    id: 134,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-13T12:15:00',
    returnDate: '2024-04-11T16:15:00',
    duration: '2h 30m',
    price: 680,
  },
  {
    id: 135,
    code: 'BJM',
    departureAirport: 'Bodrum Milas Airport',
    arrivalAirport: 'Gaziantep Airport',
    departureDate: '2024-03-14T13:30:00',
    returnDate: '2024-04-12T17:30:00',
    duration: '2h 35m',
    price: 700,
  },
  {
    id: 136,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-10T08:30:00',
    returnDate: '2024-04-08T12:30:00',
    duration: '2h 15m',
    price: 620,
  },
  {
    id: 137,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-11T09:45:00',
    returnDate: '2024-04-09T13:45:00',
    duration: '2h 20m',
    price: 640,
  },
  {
    id: 138,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-12T11:00:00',
    returnDate: '2024-04-10T15:00:00',
    duration: '2h 25m',
    price: 660,
  },
  {
    id: 139,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-13T12:15:00',
    returnDate: '2024-04-11T16:15:00',
    duration: '2h 30m',
    price: 680,
  },
  {
    id: 140,
    code: 'GZT',
    departureAirport: 'Gaziantep Airport',
    arrivalAirport: 'Bodrum Milas Airport',
    departureDate: '2024-03-14T13:30:00',
    returnDate: '2024-04-12T17:30:00',
    duration: '2h 35m',
    price: 700,
  },
  {
    id: 141,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport:'Bodrum Milas Airport',
    departureDate: '2024-03-23T11:30:00',
    returnDate: '2024-04-23T16:45:00',
    duration: '1h 10m',
    price: 800,
  },
  {
    id: 142,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport:'Bodrum Milas Airport',
    departureDate: '2024-03-24T13:00:00',
    returnDate: '2024-04-24T18:15:00',
    duration: '1h 5m',
    price: 820,
  },
  {
    id: 143,
    code: 'IZM',
    departureAirport: 'Izmir Adnan Menderes Airport',
    arrivalAirport:'Bodrum Milas Airport',
    departureDate: '2024-03-25T14:30:00',
    returnDate: '2024-04-25T19:45:00',
    duration: '1h 15m',
    price: 780,
  },
];

export default flights;