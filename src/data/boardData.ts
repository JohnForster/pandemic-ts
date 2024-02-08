// type BoardData = {
//   cities: {
//     [id: string]: {
//       name: string;
//       id: string;
//       location: {
//         x: number;
//         y: number;
//       };
//       connections: string[];
//       colour: 1 | 2 | 3 | 4;
//     };
//   };
//   connections: {
//     [id: string]: {
//       fromId: string;
//       toId: string;
//       idId: string;
//     };
//   };
// };

import { BoardData } from '../types/gameData';

export const boardData: BoardData = {
  cities: {
    '0': {
      name: 'London',
      id: '0',
      location: {
        x: 42.9,
        y: 32.2,
      },
      connections: [],
      colour: 1,
    },
    '1': {
      name: 'Paris',
      id: '1',
      location: {
        x: 44.8,
        y: 37,
      },
      connections: [],
      colour: 1,
    },
    '2': {
      name: 'Madrid',
      id: '2',
      location: {
        x: 42.8,
        y: 39.6,
      },
      connections: [],
      colour: 1,
    },
    '3': {
      name: 'Milan',
      id: '3',
      location: {
        x: 47.6,
        y: 38.9,
      },
      connections: [],
      colour: 1,
    },
    '4': {
      name: 'Essen',
      id: '4',
      location: {
        x: 47.6,
        y: 25.8,
      },
      connections: [],
      colour: 1,
    },
    '5': {
      name: 'St Petersburg',
      id: '5',
      location: {
        x: 59.9,
        y: 24,
      },
      connections: [],
      colour: 1,
    },
    '6': {
      name: 'New York',
      id: '6',
      location: {
        x: 27.6,
        y: 35.1,
      },
      connections: [],
      colour: 1,
    },
    '7': {
      name: 'Washington',
      id: '7',
      location: {
        x: 23.6,
        y: 41.5,
      },
      connections: [],
      colour: 1,
    },
    '8': {
      name: 'Chicago',
      id: '8',
      location: {
        x: 13.9,
        y: 36.4,
      },
      connections: [],
      colour: 1,
    },
    '9': {
      name: 'Montreal',
      id: '9',
      location: {
        x: 22.5,
        y: 32.5,
      },
      connections: [],
      colour: 1,
    },
    '10': {
      name: 'Atlanta',
      id: '10',
      location: {
        x: 18.7,
        y: 41.1,
      },
      connections: [],
      colour: 1,
    },
    '11': {
      name: 'San Francisco',
      id: '11',
      location: {
        x: 6,
        y: 38.9,
      },
      connections: [],
      colour: 1,
    },
    '12': {
      name: 'Lagos',
      id: '12',
      location: {
        x: 45.1,
        y: 61.5,
      },
      connections: [],
      colour: 3,
    },
    '13': {
      name: 'Kinshasa',
      id: '13',
      location: {
        x: 51.6,
        y: 60,
      },
      connections: [],
      colour: 3,
    },
    '14': {
      name: 'Johannesburg',
      id: '14',
      location: {
        x: 53.2,
        y: 79.2,
      },
      connections: [],
      colour: 3,
    },
    '15': {
      name: 'Sao Paolo',
      id: '15',
      location: {
        x: 27.3,
        y: 81.6,
      },
      connections: [],
      colour: 3,
    },
    '16': {
      name: 'Buenos Aires',
      id: '16',
      location: {
        x: 23.5,
        y: 90.3,
      },
      connections: [],
      colour: 3,
    },
    '17': {
      name: 'Lima',
      id: '17',
      location: {
        x: 22.1,
        y: 75.7,
      },
      connections: [],
      colour: 3,
    },
    '18': {
      name: 'Santiago',
      id: '18',
      location: {
        x: 20.6,
        y: 93.5,
      },
      connections: [],
      colour: 3,
    },
    '19': {
      name: 'Bogota',
      id: '19',
      location: {
        x: 24,
        y: 68,
      },
      connections: [],
      colour: 3,
    },
    '20': {
      name: 'Mexico City',
      id: '20',
      location: {
        x: 14.6,
        y: 55,
      },
      connections: [],
      colour: 3,
    },
    '21': {
      name: 'Los Angeles',
      id: '21',
      location: {
        x: 6.2,
        y: 45.5,
      },
      connections: [],
      colour: 3,
    },
    '22': {
      name: 'Istanbul',
      id: '22',
      location: {
        x: 51.6,
        y: 39.5,
      },
      connections: [],
      colour: 2,
    },
    '23': {
      name: 'Riyadh',
      id: '23',
      location: {
        x: 59.9,
        y: 47.8,
      },
      connections: [],
      colour: 2,
    },
    '24': {
      name: 'Cairo',
      id: '24',
      location: {
        x: 53.4,
        y: 47.1,
      },
      connections: [],
      colour: 2,
    },
    '25': {
      name: 'Baghdad',
      id: '25',
      location: {
        x: 60.1,
        y: 42.5,
      },
      connections: [],
      colour: 2,
    },
    '26': {
      name: 'Tehran',
      id: '26',
      location: {
        x: 62.6,
        y: 37.6,
      },
      connections: [],
      colour: 2,
    },
    '27': {
      name: 'Moscow',
      id: '27',
      location: {
        x: 55.5,
        y: 31.4,
      },
      connections: [],
      colour: 2,
    },
    '28': {
      name: 'Mumbai',
      id: '28',
      location: {
        x: 66.6,
        y: 53.7,
      },
      connections: [],
      colour: 2,
    },
    '29': {
      name: 'Delhi',
      id: '29',
      location: {
        x: 70.5,
        y: 50,
      },
      connections: [],
      colour: 2,
    },
    '30': {
      name: 'Kolkata',
      id: '30',
      location: {
        x: 70.6,
        y: 54.3,
      },
      connections: [],
      colour: 0,
    },
    '31': {
      name: 'Jakarta',
      id: '31',
      location: {
        x: 85,
        y: 66.9,
      },
      connections: [],
      colour: 0,
    },
    '32': {
      name: 'Chennai',
      id: '32',
      location: {
        x: 68.3,
        y: 59,
      },
      connections: [],
      colour: 2,
    },
    '33': {
      name: 'Karachi',
      id: '33',
      location: {
        x: 64.8,
        y: 49.4,
      },
      connections: [],
      colour: 2,
    },
    '34': {
      name: 'Hong Kong',
      id: '34',
      location: {
        x: 81,
        y: 46.4,
      },
      connections: [],
      colour: 0,
    },
    '35': {
      name: 'Seoul',
      id: '35',
      location: {
        x: 83.7,
        y: 38.6,
      },
      connections: [],
      colour: 0,
    },
    '36': {
      name: 'Tokyo',
      id: '36',
      location: {
        x: 89,
        y: 39.1,
      },
      connections: [],
      colour: 0,
    },
    '37': {
      name: 'Osaka',
      id: '37',
      location: {
        x: 87.2,
        y: 45.6,
      },
      connections: [],
      colour: 0,
    },
    '38': {
      name: 'Beijing',
      id: '38',
      location: {
        x: 79.7,
        y: 34.1,
      },
      connections: [],
      colour: 0,
    },
    '39': {
      name: 'Shanghai',
      id: '39',
      location: {
        x: 79.4,
        y: 41,
      },
      connections: [],
      colour: 0,
    },
    '40': {
      name: 'Bangkok',
      id: '40',
      location: {
        x: 74.4,
        y: 56,
      },
      connections: [],
      colour: 0,
    },
    '41': {
      name: 'Sydney',
      id: '41',
      location: {
        x: 91.6,
        y: 79.5,
      },
      connections: [],
      colour: 0,
    },
    '42': {
      name: 'Taipei',
      id: '42',
      location: {
        x: 87.8,
        y: 53,
      },
      connections: [],
      colour: 0,
    },
    '43': {
      name: 'Ho Chi Minh',
      id: '43',
      location: {
        x: 80.9,
        y: 52.1,
      },
      connections: [],
      colour: 0,
    },
    '44': {
      name: 'Manila',
      id: '44',
      location: {
        x: 89.1,
        y: 65.7,
      },
      connections: [],
      colour: 0,
    },
    '45': {
      name: 'Dar es Salaam',
      id: '45',
      location: {
        x: 55.8,
        y: 69,
      },
      connections: [],
      colour: 3,
    },
    '46': {
      name: 'Caracas',
      id: '46',
      location: {
        x: 28,
        y: 62.6,
      },
      connections: [],
      colour: 3,
    },
    '47': {
      name: 'Guayaquil',
      id: '47',
      location: {
        x: 18.7,
        y: 61.5,
      },
      connections: [],
      colour: 3,
    },
    '48': {
      name: 'Brasilia',
      id: '48',
      location: {
        x: 27.6,
        y: 73.8,
      },
      connections: [],
      colour: 3,
    },
    '49': {
      name: 'Rio de Janeiro',
      id: '49',
      location: {
        x: 31.7,
        y: 75.9,
      },
      connections: [],
      colour: 3,
    },
    '50': {
      name: 'Accra',
      id: '50',
      location: {
        x: 42.2,
        y: 62.1,
      },
      connections: [],
      colour: 3,
    },
    '51': {
      name: 'Cape Town',
      id: '51',
      location: {
        x: 49.9,
        y: 81.5,
      },
      connections: [],
      colour: 3,
    },
    '52': {
      name: 'Medellin',
      id: '52',
      location: {
        x: 23.1,
        y: 57.5,
      },
      connections: [],
      colour: 3,
    },
    '53': {
      name: 'Luanda',
      id: '53',
      location: {
        x: 48.2,
        y: 73.2,
      },
      connections: [],
      colour: 3,
    },
    '54': {
      name: 'Houston',
      id: '54',
      location: {
        x: 14.9,
        y: 43.9,
      },
      connections: [],
      colour: 1,
    },
    '55': {
      name: 'Phoenix',
      id: '55',
      location: {
        x: 10.1,
        y: 43.1,
      },
      connections: [],
      colour: 1,
    },
    '56': {
      name: 'Toronto',
      id: '56',
      location: {
        x: 16.5,
        y: 34.4,
      },
      connections: [],
      colour: 1,
    },
    '57': {
      name: 'Berlin',
      id: '57',
      location: {
        x: 47.8,
        y: 31.5,
      },
      connections: [],
      colour: 1,
    },
    '58': {
      name: 'Kiev',
      id: '58',
      location: {
        x: 54.7,
        y: 24.1,
      },
      connections: [],
      colour: 1,
    },
    '59': {
      name: 'Philadelphia',
      id: '59',
      location: {
        x: 22.5,
        y: 36.9,
      },
      connections: [],
      colour: 1,
    },
    '60': {
      name: 'Warsaw',
      id: '60',
      location: {
        x: 50.2,
        y: 29.2,
      },
      connections: [],
      colour: 1,
    },
    '61': {
      name: 'Boston',
      id: '61',
      location: {
        x: 21.5,
        y: 45,
      },
      connections: [],
      colour: 1,
    },
    '62': {
      name: 'Kuala Lumpur',
      id: '62',
      location: {
        x: 74.9,
        y: 65.5,
      },
      connections: [],
      colour: 0,
    },
    '63': {
      name: 'Singapore',
      id: '63',
      location: {
        x: 79,
        y: 60.2,
      },
      connections: [],
      colour: 0,
    },
    '64': {
      name: 'Hanoi',
      id: '64',
      location: {
        x: 78.1,
        y: 55.2,
      },
      connections: [],
      colour: 0,
    },
    '65': {
      name: 'Busan',
      id: '65',
      location: {
        x: 84.4,
        y: 43.4,
      },
      connections: [],
      colour: 0,
    },
    '66': {
      name: 'Dhaka',
      id: '66',
      location: {
        x: 73.6,
        y: 49.8,
      },
      connections: [],
      colour: 0,
    },
    '67': {
      name: 'Shenzhen',
      id: '67',
      location: {
        x: 74.9,
        y: 45.6,
      },
      connections: [],
      colour: 0,
    },
    '68': {
      name: 'Chongqing',
      id: '68',
      location: {
        x: 72,
        y: 37.2,
      },
      connections: [],
      colour: 0,
    },
    '69': {
      name: 'Salvador',
      id: '69',
      location: {
        x: 31.6,
        y: 68.7,
      },
      connections: [],
      colour: 3,
    },
    '70': {
      name: 'Tianjin',
      id: '70',
      location: {
        x: 76.5,
        y: 39.1,
      },
      connections: [],
      colour: 0,
    },
    '71': {
      name: 'Perth',
      id: '71',
      location: {
        x: 79.4,
        y: 77.3,
      },
      connections: [],
      colour: 0,
    },
    '72': {
      name: 'Bandung',
      id: '72',
      location: {
        x: 82.2,
        y: 62.2,
      },
      connections: [],
      colour: 0,
    },
    '73': {
      name: 'Kabul',
      id: '73',
      location: {
        x: 64.9,
        y: 42.3,
      },
      connections: [],
      colour: 2,
    },
    '74': {
      name: 'Lahore',
      id: '74',
      location: {
        x: 67.2,
        y: 47.2,
      },
      connections: [],
      colour: 2,
    },
    '75': {
      name: 'Jeddah',
      id: '75',
      location: {
        x: 55.8,
        y: 50.6,
      },
      connections: [],
      colour: 2,
    },
    '76': {
      name: 'Ankara',
      id: '76',
      location: {
        x: 56.2,
        y: 38.5,
      },
      connections: [],
      colour: 2,
    },
    '77': {
      name: 'Alexandria',
      id: '77',
      location: {
        x: 50.3,
        y: 44.7,
      },
      connections: [],
      colour: 2,
    },
    '78': {
      name: 'Beirut',
      id: '78',
      location: {
        x: 55.3,
        y: 43.7,
      },
      connections: [],
      colour: 2,
    },
    '79': {
      name: 'Tashkent',
      id: '79',
      location: {
        x: 60.9,
        y: 32.6,
      },
      connections: [],
      colour: 2,
    },
    '80': {
      name: 'Antananarivo',
      id: '80',
      location: {
        x: 57.8,
        y: 73.9,
      },
      connections: [],
      colour: 3,
    },
    '81': {
      name: 'Miami',
      id: '81',
      location: {
        x: 19.2,
        y: 47.7,
      },
      connections: [],
      colour: 1,
    },
    '82': {
      name: 'Addis Ababa',
      id: '82',
      location: {
        x: 59.8,
        y: 53.3,
      },
      connections: [],
      colour: 2,
    },
    '83': {
      name: 'Mogadishu',
      id: '83',
      location: {
        x: 59.4,
        y: 60.2,
      },
      connections: [],
      colour: 2,
    },
    '84': {
      name: 'Novosibirsk',
      id: '84',
      location: {
        x: 62.7,
        y: 27.8,
      },
      connections: [],
      colour: 1,
    },
    '85': {
      name: 'Kathmandu',
      id: '85',
      location: {
        x: 69.5,
        y: 43,
      },
      connections: [],
      colour: 0,
    },
    '86': {
      name: 'Ouagadougou',
      id: '86',
      location: {
        x: 43.1,
        y: 54,
      },
      connections: [],
      colour: 3,
    },
    '87': {
      name: 'Tripoli',
      id: '87',
      location: {
        x: 46.3,
        y: 49.2,
      },
      connections: [],
      colour: 2,
    },
    '88': {
      name: 'Abidjan',
      id: '88',
      location: {
        x: 39.5,
        y: 59.5,
      },
      connections: [],
      colour: 3,
    },
    '89': {
      name: 'Douala',
      id: '89',
      location: {
        x: 47.5,
        y: 67.3,
      },
      connections: [],
      colour: 3,
    },
    '90': {
      name: 'Khartoum',
      id: '90',
      location: {
        x: 51.5,
        y: 54.1,
      },
      connections: [],
      colour: 2,
    },
    '91': {
      name: 'Casablanca',
      id: '91',
      location: {
        x: 40.3,
        y: 45.9,
      },
      connections: [],
      colour: 2,
    },
    '92': {
      name: 'Havana',
      id: '92',
      location: {
        x: 18.4,
        y: 52.4,
      },
      connections: [],
      colour: 1,
    },
    '93': {
      name: 'Algiers',
      id: '93',
      location: {
        x: 45.7,
        y: 43.3,
      },
      connections: [],
      colour: 2,
    },
    '94': {
      name: 'Bucharest',
      id: '94',
      location: {
        x: 50.5,
        y: 34.1,
      },
      connections: [],
      colour: 1,
    },
    '95': {
      name: 'Nairobi',
      id: '95',
      location: {
        x: 55.5,
        y: 63.6,
      },
      connections: [],
      colour: 2,
    },
    '200': {
      name: 'top_pacific_left',
      id: '200',
      location: {
        x: 0,
        y: 39,
      },
      connections: [],
      hidden: true,
    },
    '201': {
      name: 'top_pacific_right',
      id: '201',
      location: {
        x: 100,
        y: 39,
      },
      connections: [],
      hidden: true,
    },
    '202': {
      name: 'mid_pacific_left',
      id: '202',
      location: {
        x: 0,
        y: 49,
      },
      connections: [],
      hidden: true,
    },
    '203': {
      name: 'mid_pacific_right',
      id: '203',
      location: {
        x: 100,
        y: 49,
      },
      connections: [],
      hidden: true,
    },
    '204': {
      name: 'bottom_pacific_left',
      id: '204',
      location: {
        x: 0,
        y: 68,
      },
      connections: [],
      hidden: true,
    },
    '205': {
      name: 'bottom_pacific_right',
      id: '205',
      location: {
        x: 100,
        y: 68,
      },
      connections: [],
      hidden: true,
    },
  },
  connections: {
    '1': {
      fromId: '91',
      toId: '93',
      id: '1',
    },
    '2': {
      fromId: '24',
      toId: '77',
      id: '2',
    },
    '3': {
      fromId: '24',
      toId: '75',
      id: '3',
    },
    '4': {
      fromId: '75',
      toId: '82',
      id: '4',
    },
    '5': {
      fromId: '82',
      toId: '83',
      id: '5',
    },
    '6': {
      fromId: '83',
      toId: '95',
      id: '6',
    },
    '7': {
      fromId: '45',
      toId: '95',
      id: '7',
    },
    '8': {
      fromId: '45',
      toId: '80',
      id: '8',
    },
    '9': {
      fromId: '14',
      toId: '80',
      id: '9',
    },
    '10': {
      fromId: '14',
      toId: '45',
      id: '10',
    },
    '11': {
      fromId: '14',
      toId: '51',
      id: '11',
    },
    '12': {
      fromId: '51',
      toId: '53',
      id: '12',
    },
    '13': {
      fromId: '53',
      toId: '89',
      id: '13',
    },
    '14': {
      fromId: '50',
      toId: '88',
      id: '14',
    },
    '15': {
      fromId: '12',
      toId: '88',
      id: '15',
    },
    '16': {
      fromId: '87',
      toId: '90',
      id: '16',
    },
    '17': {
      fromId: '77',
      toId: '90',
      id: '17',
    },
    '18': {
      fromId: '24',
      toId: '90',
      id: '18',
    },
    '19': {
      fromId: '13',
      toId: '90',
      id: '19',
    },
    '20': {
      fromId: '13',
      toId: '82',
      id: '20',
    },
    '21': {
      fromId: '2',
      toId: '91',
      id: '21',
    },
    '22': {
      fromId: '1',
      toId: '2',
      id: '22',
    },
    '23': {
      fromId: '0',
      toId: '1',
      id: '23',
    },
    '24': {
      fromId: '0',
      toId: '57',
      id: '24',
    },
    '25': {
      fromId: '1',
      toId: '57',
      id: '25',
    },
    '26': {
      fromId: '1',
      toId: '3',
      id: '26',
    },
    '27': {
      fromId: '3',
      toId: '93',
      id: '27',
    },
    '28': {
      fromId: '2',
      toId: '93',
      id: '28',
    },
    '29': {
      fromId: '22',
      toId: '77',
      id: '29',
    },
    '30': {
      fromId: '22',
      toId: '3',
      id: '30',
    },
    '31': {
      fromId: '22',
      toId: '94',
      id: '31',
    },
    '32': {
      fromId: '3',
      toId: '94',
      id: '32',
    },
    '33': {
      fromId: '60',
      toId: '94',
      id: '33',
    },
    '34': {
      fromId: '57',
      toId: '60',
      id: '34',
    },
    '35': {
      fromId: '4',
      toId: '57',
      id: '35',
    },
    '36': {
      fromId: '0',
      toId: '4',
      id: '36',
    },
    '37': {
      fromId: '4',
      toId: '60',
      id: '37',
    },
    '38': {
      fromId: '4',
      toId: '58',
      id: '38',
    },
    '39': {
      fromId: '3',
      toId: '57',
      id: '39',
    },
    '40': {
      fromId: '5',
      toId: '58',
      id: '40',
    },
    '41': {
      fromId: '5',
      toId: '84',
      id: '41',
    },
    '42': {
      fromId: '79',
      toId: '84',
      id: '42',
    },
    '43': {
      fromId: '27',
      toId: '79',
      id: '43',
    },
    '44': {
      fromId: '27',
      toId: '5',
      id: '44',
    },
    '45': {
      fromId: '27',
      toId: '58',
      id: '45',
    },
    '46': {
      fromId: '58',
      toId: '60',
      id: '46',
    },
    '47': {
      fromId: '58',
      toId: '94',
      id: '47',
    },
    '48': {
      fromId: '22',
      toId: '76',
      id: '48',
    },
    '49': {
      fromId: '22',
      toId: '27',
      id: '49',
    },
    '50': {
      fromId: '27',
      toId: '94',
      id: '50',
    },
    '51': {
      fromId: '26',
      toId: '76',
      id: '51',
    },
    '52': {
      fromId: '76',
      toId: '78',
      id: '52',
    },
    '53': {
      fromId: '25',
      toId: '26',
      id: '53',
    },
    '54': {
      fromId: '25',
      toId: '78',
      id: '54',
    },
    '55': {
      fromId: '22',
      toId: '78',
      id: '55',
    },
    '56': {
      fromId: '77',
      toId: '78',
      id: '56',
    },
    '57': {
      fromId: '75',
      toId: '78',
      id: '57',
    },
    '58': {
      fromId: '23',
      toId: '75',
      id: '58',
    },
    '59': {
      fromId: '23',
      toId: '25',
      id: '59',
    },
    '60': {
      fromId: '26',
      toId: '79',
      id: '60',
    },
    '61': {
      fromId: '19',
      toId: '48',
      id: '61',
    },
    '62': {
      fromId: '17',
      toId: '19',
      id: '62',
    },
    '63': {
      fromId: '17',
      toId: '48',
      id: '63',
    },
    '64': {
      fromId: '15',
      toId: '48',
      id: '64',
    },
    '65': {
      fromId: '48',
      toId: '49',
      id: '65',
    },
    '66': {
      fromId: '15',
      toId: '49',
      id: '66',
    },
    '67': {
      fromId: '16',
      toId: '48',
      id: '67',
    },
    '68': {
      fromId: '15',
      toId: '16',
      id: '68',
    },
    '69': {
      fromId: '17',
      toId: '18',
      id: '69',
    },
    '70': {
      fromId: '17',
      toId: '47',
      id: '70',
    },
    '71': {
      fromId: '47',
      toId: '52',
      id: '71',
    },
    '72': {
      fromId: '19',
      toId: '52',
      id: '72',
    },
    '73': {
      fromId: '19',
      toId: '46',
      id: '73',
    },
    '74': {
      fromId: '46',
      toId: '52',
      id: '74',
    },
    '75': {
      fromId: '52',
      toId: '92',
      id: '75',
    },
    '76': {
      fromId: '20',
      toId: '52',
      id: '76',
    },
    '77': {
      fromId: '20',
      toId: '92',
      id: '77',
    },
    '78': {
      fromId: '81',
      toId: '92',
      id: '78',
    },
    '79': {
      fromId: '54',
      toId: '81',
      id: '79',
    },
    '80': {
      fromId: '20',
      toId: '54',
      id: '80',
    },
    '81': {
      fromId: '54',
      toId: '55',
      id: '81',
    },
    '82': {
      fromId: '21',
      toId: '55',
      id: '82',
    },
    '83': {
      fromId: '20',
      toId: '21',
      id: '83',
    },
    '84': {
      fromId: '11',
      toId: '21',
      id: '84',
    },
    '85': {
      fromId: '11',
      toId: '55',
      id: '85',
    },
    '86': {
      fromId: '10',
      toId: '55',
      id: '86',
    },
    '87': {
      fromId: '10',
      toId: '54',
      id: '87',
    },
    '88': {
      fromId: '61',
      toId: '81',
      id: '88',
    },
    '89': {
      fromId: '10',
      toId: '61',
      id: '89',
    },
    '90': {
      fromId: '10',
      toId: '8',
      id: '90',
    },
    '91': {
      fromId: '11',
      toId: '8',
      id: '91',
    },
    '92': {
      fromId: '49',
      toId: '89',
      id: '92',
      dotted: true,
    },
    '93': {
      fromId: '88',
      toId: '46',
      id: '93',
      dotted: true,
    },
    '94': {
      fromId: '50',
      toId: '69',
      id: '94',
      dotted: true,
    },
    '95': {
      fromId: '49',
      toId: '69',
      id: '95',
    },
    '96': {
      fromId: '12',
      toId: '50',
      id: '96',
    },
    '97': {
      fromId: '46',
      toId: '69',
      id: '97',
    },
    '98': {
      fromId: '48',
      toId: '69',
      id: '98',
    },
    '99': {
      fromId: '6',
      toId: '91',
      id: '99',
      dotted: true,
    },
    '100': {
      fromId: '0',
      toId: '6',
      id: '100',
      dotted: true,
    },
    '101': {
      fromId: '59',
      toId: '6',
      id: '101',
    },
    '102': {
      fromId: '59',
      toId: '7',
      id: '102',
    },
    '103': {
      fromId: '61',
      toId: '7',
      id: '103',
    },
    '104': {
      fromId: '10',
      toId: '7',
      id: '104',
    },
    '105': {
      fromId: '56',
      toId: '7',
      id: '105',
    },
    '106': {
      fromId: '56',
      toId: '8',
      id: '106',
    },
    '107': {
      fromId: '56',
      toId: '9',
      id: '107',
    },
    '108': {
      fromId: '6',
      toId: '9',
      id: '108',
    },
    '109': {
      fromId: '6',
      toId: '7',
      id: '109',
    },
    '110': {
      fromId: '28',
      toId: '74',
      id: '110',
    },
    '111': {
      fromId: '28',
      toId: '30',
      id: '111',
    },
    '112': {
      fromId: '29',
      toId: '30',
      id: '112',
    },
    '113': {
      fromId: '29',
      toId: '74',
      id: '113',
    },
    '114': {
      fromId: '28',
      toId: '29',
      id: '114',
    },
    '115': {
      fromId: '29',
      toId: '85',
      id: '115',
    },
    '116': {
      fromId: '74',
      toId: '85',
      id: '116',
    },
    '117': {
      fromId: '28',
      toId: '33',
      id: '117',
    },
    '118': {
      fromId: '33',
      toId: '73',
      id: '118',
    },
    '119': {
      fromId: '73',
      toId: '74',
      id: '119',
    },
    '120': {
      fromId: '23',
      toId: '33',
      id: '120',
    },
    '121': {
      fromId: '26',
      toId: '73',
      id: '121',
    },
    '122': {
      fromId: '28',
      toId: '32',
      id: '122',
    },
    '123': {
      fromId: '30',
      toId: '32',
      id: '123',
    },
    '124': {
      fromId: '71',
      toId: '80',
      id: '124',
      dotted: true,
    },
    '125': {
      fromId: '31',
      toId: '71',
      id: '125',
    },
    '126': {
      fromId: '31',
      toId: '72',
      id: '126',
    },
    '127': {
      fromId: '63',
      toId: '72',
      id: '127',
    },
    '128': {
      fromId: '62',
      toId: '63',
      id: '128',
    },
    '129': {
      fromId: '31',
      toId: '62',
      id: '129',
    },
    '130': {
      fromId: '41',
      toId: '44',
      id: '130',
    },
    '131': {
      fromId: '41',
      toId: '42',
      id: '131',
    },
    '132': {
      fromId: '34',
      toId: '44',
      id: '132',
    },
    '133': {
      fromId: '44',
      toId: '72',
      id: '133',
    },
    '134': {
      fromId: '43',
      toId: '72',
      id: '134',
    },
    '135': {
      fromId: '34',
      toId: '43',
      id: '135',
    },
    '136': {
      fromId: '43',
      toId: '64',
      id: '136',
    },
    '137': {
      fromId: '34',
      toId: '64',
      id: '137',
    },
    '138': {
      fromId: '43',
      toId: '63',
      id: '138',
    },
    '139': {
      fromId: '63',
      toId: '64',
      id: '139',
    },
    '140': {
      fromId: '40',
      toId: '63',
      id: '140',
    },
    '141': {
      fromId: '40',
      toId: '66',
      id: '141',
    },
    '142': {
      fromId: '30',
      toId: '40',
      id: '142',
    },
    '143': {
      fromId: '29',
      toId: '66',
      id: '143',
    },
    '144': {
      fromId: '68',
      toId: '85',
      id: '144',
    },
    '145': {
      fromId: '67',
      toId: '68',
      id: '145',
    },
    '146': {
      fromId: '66',
      toId: '67',
      id: '146',
    },
    '147': {
      fromId: '34',
      toId: '67',
      id: '147',
    },
    '148': {
      fromId: '34',
      toId: '42',
      id: '148',
    },
    '149': {
      fromId: '34',
      toId: '39',
      id: '149',
    },
    '150': {
      fromId: '39',
      toId: '67',
      id: '150',
    },
    '151': {
      fromId: '39',
      toId: '70',
      id: '151',
    },
    '152': {
      fromId: '38',
      toId: '70',
      id: '152',
    },
    '153': {
      fromId: '38',
      toId: '68',
      id: '153',
    },
    '154': {
      fromId: '35',
      toId: '39',
      id: '154',
    },
    '155': {
      fromId: '35',
      toId: '38',
      id: '155',
    },
    '156': {
      fromId: '35',
      toId: '65',
      id: '156',
    },
    '157': {
      fromId: '36',
      toId: '65',
      id: '157',
    },
    '158': {
      fromId: '36',
      toId: '37',
      id: '158',
    },
    '159': {
      fromId: '37',
      toId: '65',
      id: '159',
    },
    '160': {
      fromId: '34',
      toId: '37',
      id: '160',
    },
    '161': {
      fromId: '37',
      toId: '42',
      id: '161',
    },
    '162': {
      fromId: '39',
      toId: '65',
      id: '162',
    },
    '163': {
      fromId: '14',
      toId: '53',
      id: '163',
    },
    '164': {
      fromId: '82',
      toId: '95',
      id: '164',
    },
    '165': {
      fromId: '24',
      toId: '78',
      id: '165',
    },
    '166': {
      fromId: '11',
      toId: '200',
      id: '166',
      dotted: true,
    },
    '167': {
      fromId: '36',
      toId: '201',
      id: '167',
      dotted: true,
    },
    '168': {
      fromId: '21',
      toId: '202',
      id: '168',
      dotted: true,
    },
    '169': {
      fromId: '42',
      toId: '203',
      id: '169',
      dotted: true,
    },
    '170': {
      fromId: '20',
      toId: '204',
      id: '170',
      dotted: true,
    },
    '171': {
      fromId: '41',
      toId: '205',
      id: '171',
      dotted: true,
    },
    '172': {
      fromId: '88',
      toId: '91',
      id: '172',
    },
    '173': {
      fromId: '87',
      toId: '93',
      id: '173',
    },
    '174': {
      fromId: '77',
      toId: '87',
      id: '174',
    },
    '175': {
      fromId: '87',
      toId: '91',
      id: '175',
    },
    '176': {
      fromId: '86',
      toId: '88',
      id: '176',
    },
    '177': {
      fromId: '12',
      toId: '86',
      id: '177',
    },
    '178': {
      fromId: '86',
      toId: '91',
      id: '178',
    },
    '179': {
      fromId: '12',
      toId: '13',
      id: '179',
    },
    '180': {
      fromId: '86',
      toId: '90',
      id: '180',
    },
    '181': {
      fromId: '12',
      toId: '89',
      id: '181',
    },
    '182': {
      fromId: '40',
      toId: '62',
      id: '182',
    },
    '183': {
      fromId: '40',
      toId: '64',
      id: '183',
    },
    '184': {
      fromId: '34',
      toId: '40',
      id: '184',
    },
    '185': {
      fromId: '31',
      toId: '44',
      id: '185',
    },
    '186': {
      fromId: '13',
      toId: '89',
      id: '186',
    },
    '187': {
      fromId: '45',
      toId: '53',
      id: '187',
    },
    '188': {
      fromId: '13',
      toId: '45',
      id: '188',
    },
    '189': {
      fromId: '13',
      toId: '95',
      id: '189',
    },
  },
};
