
export interface Theater {
  id: number;
  name: string;
  location: string;
  screens: Screen[];
}

export interface Screen {
  id: number;
  name: string;
  seats: {
    rows: number;
    columns: number;
    reserved: string[]; // Array of reserved seats e.g. ["A1", "B5"]
  };
  showtimes: Showtime[];
}

export interface Showtime {
  id: number;
  movieId: number;
  time: string;
  date: string;
  price: number;
}

export const theaters: Theater[] = [
  {
    id: 1,
    name: "CineMax Multiplex",
    location: "Downtown",
    screens: [
      {
        id: 101,
        name: "Screen 1",
        seats: {
          rows: 8,
          columns: 10,
          reserved: ["A1", "A2", "B5", "C6", "D4", "E10", "G7", "G8"]
        },
        showtimes: [
          {
            id: 1001,
            movieId: 1,
            time: "10:00 AM",
            date: "2025-04-07",
            price: 12.99
          },
          {
            id: 1002,
            movieId: 1,
            time: "1:30 PM",
            date: "2025-04-07",
            price: 12.99
          },
          {
            id: 1003,
            movieId: 1,
            time: "5:00 PM",
            date: "2025-04-07",
            price: 14.99
          },
          {
            id: 1004,
            movieId: 1,
            time: "8:30 PM",
            date: "2025-04-07",
            price: 14.99
          },
          {
            id: 1005,
            movieId: 2,
            time: "11:00 AM",
            date: "2025-04-07",
            price: 12.99
          },
          {
            id: 1006,
            movieId: 2,
            time: "2:30 PM",
            date: "2025-04-07",
            price: 12.99
          },
          {
            id: 1007,
            movieId: 2,
            time: "6:00 PM",
            date: "2025-04-07",
            price: 14.99
          },
          {
            id: 1008,
            movieId: 2,
            time: "9:30 PM",
            date: "2025-04-07",
            price: 14.99
          }
        ]
      },
      {
        id: 102,
        name: "Screen 2",
        seats: {
          rows: 6,
          columns: 8,
          reserved: ["B3", "C4", "D5", "E2", "E3"]
        },
        showtimes: [
          {
            id: 2001,
            movieId: 3,
            time: "10:30 AM",
            date: "2025-04-07",
            price: 10.99
          },
          {
            id: 2002,
            movieId: 3,
            time: "2:00 PM",
            date: "2025-04-07",
            price: 10.99
          },
          {
            id: 2003,
            movieId: 3,
            time: "5:30 PM",
            date: "2025-04-07",
            price: 12.99
          },
          {
            id: 2004,
            movieId: 4,
            time: "9:00 PM",
            date: "2025-04-07",
            price: 12.99
          },
          {
            id: 2005,
            movieId: 4,
            time: "11:30 AM",
            date: "2025-04-07",
            price: 10.99
          },
          {
            id: 2006,
            movieId: 4,
            time: "3:00 PM",
            date: "2025-04-07",
            price: 10.99
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "CityView Cinema",
    location: "Uptown",
    screens: [
      {
        id: 201,
        name: "Main Hall",
        seats: {
          rows: 10,
          columns: 12,
          reserved: ["A1", "A2", "A3", "B1", "B2", "C5", "D8", "E9", "F10", "G11", "H12"]
        },
        showtimes: [
          {
            id: 3001,
            movieId: 1,
            time: "11:00 AM",
            date: "2025-04-07",
            price: 13.99
          },
          {
            id: 3002,
            movieId: 1,
            time: "2:30 PM",
            date: "2025-04-07",
            price: 13.99
          },
          {
            id: 3003,
            movieId: 1,
            time: "6:00 PM",
            date: "2025-04-07",
            price: 15.99
          },
          {
            id: 3004,
            movieId: 1,
            time: "9:30 PM",
            date: "2025-04-07",
            price: 15.99
          },
          {
            id: 3005,
            movieId: 4,
            time: "10:30 AM",
            date: "2025-04-07",
            price: 13.99
          },
          {
            id: 3006,
            movieId: 4,
            time: "2:00 PM",
            date: "2025-04-07",
            price: 13.99
          },
          {
            id: 3007,
            movieId: 4,
            time: "5:30 PM",
            date: "2025-04-07",
            price: 15.99
          },
          {
            id: 3008,
            movieId: 4,
            time: "9:00 PM",
            date: "2025-04-07",
            price: 15.99
          }
        ]
      }
    ]
  }
];
