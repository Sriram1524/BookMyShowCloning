
export interface Movie {
  id: number;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  releaseDate: string;
  duration: string;
  genre: string[];
  synopsis: string;
  cast: string[];
  director: string;
  trailer: string;
  isFeatured: boolean;
  isUpcoming: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    poster: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0ZS00MTRiLWI1Y2QtZGM3MDdmYjYzZjZlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    backdrop: "https://images.hdqwalls.com/wallpapers/dune-2-movie-5k-2l.jpg",
    rating: 4.7,
    releaseDate: "2023-11-03",
    duration: "2h 35min",
    genre: ["Sci-Fi", "Action", "Adventure"],
    synopsis: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Oscar Isaac"],
    director: "Denis Villeneuve",
    trailer: "https://www.youtube.com/watch?v=n9xhJrPXop4",
    isFeatured: true,
    isUpcoming: false
  },
  {
    id: 2,
    title: "Oppenheimer",
    poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    backdrop: "https://images.hdqwalls.com/wallpapers/oppenheimer-movie-2023-5k-mx.jpg",
    rating: 4.9,
    releaseDate: "2023-07-21",
    duration: "3h 0min",
    genre: ["Biography", "Drama", "History"],
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    director: "Christopher Nolan",
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    isFeatured: true,
    isUpcoming: false
  },
  {
    id: 3,
    title: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg",
    backdrop: "https://images.hdqwalls.com/wallpapers/interstellar-movie-3c.jpg",
    rating: 4.8,
    releaseDate: "2014-11-07",
    duration: "2h 49min",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    isFeatured: false,
    isUpcoming: false
  },
  {
    id: 4,
    title: "The Batman",
    poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    backdrop: "https://images.hdqwalls.com/wallpapers/the-batman-2022-movie-5k-c9.jpg",
    rating: 4.6,
    releaseDate: "2022-03-04",
    duration: "2h 56min",
    genre: ["Action", "Crime", "Drama"],
    synopsis: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright"],
    director: "Matt Reeves",
    trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    isFeatured: true,
    isUpcoming: false
  },
  {
    id: 5,
    title: "Black Panther: Wakanda Forever",
    poster: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    backdrop: "https://images.hdqwalls.com/wallpapers/black-panther-wakanda-forever-movie-poster-5k-0e.jpg",
    rating: 4.5,
    releaseDate: "2022-11-11",
    duration: "2h 41min",
    genre: ["Action", "Adventure", "Drama"],
    synopsis: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    cast: ["Letitia Wright", "Lupita Nyong'o", "Danai Gurira"],
    director: "Ryan Coogler",
    trailer: "https://www.youtube.com/watch?v=_Z3QKkl1WyM",
    isFeatured: false,
    isUpcoming: false
  },
  {
    id: 6,
    title: "Deadpool & Wolverine",
    poster: "https://m.media-amazon.com/images/M/MV5BNTMxYjI3OTktN2MwYy00YTUxLWJhNTktNmVjZDkyYzg3MWY4XkEyXkFqcGdeQXVyMTU5OTc2NTk@._V1_.jpg",
    backdrop: "https://images.hdqwalls.com/wallpapers/deadpool-and-wolverine-poster-5k-at.jpg",
    rating: 0,
    releaseDate: "2025-07-26",
    duration: "2h 10min",
    genre: ["Action", "Adventure", "Comedy"],
    synopsis: "Worlds collide when Wade Wilson meets Wolverine and the two embark on an action-packed adventure together.",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin"],
    director: "Shawn Levy",
    trailer: "https://www.youtube.com/watch?v=bSIuKA9uAFE",
    isFeatured: false,
    isUpcoming: true
  },
  {
    id: 7,
    title: "Joker: Folie à Deux",
    poster: "https://m.media-amazon.com/images/M/MV5BYmU3ZGExOGItYWQ0ZS00OWU2LTlhNmItODJiMjYyNzVjOWZmXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_FMjpg_UX1000_.jpg",
    backdrop: "https://images.hdqwalls.com/wallpapers/joker-folie-a-deux-5k-01.jpg",
    rating: 0,
    releaseDate: "2025-10-04",
    duration: "2h 20min",
    genre: ["Crime", "Drama", "Thriller"],
    synopsis: "The sequel to 2019's 'Joker' follows Arthur Fleck as he develops a complex relationship with a fellow Arkham Asylum inmate.",
    cast: ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz"],
    director: "Todd Phillips",
    trailer: "https://www.youtube.com/watch?v=03ymBj144ng",
    isFeatured: false,
    isUpcoming: true
  },
  {
    id: 8,
    title: "Furiosa: A Mad Max Saga",
    poster: "https://m.media-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMzc2MTdhXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
    backdrop: "https://images.hdqwalls.com/wallpapers/furiosa-a-mad-max-saga-4k-poster-7t.jpg",
    rating: 0,
    releaseDate: "2025-05-24",
    duration: "2h 30min",
    genre: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "The origin story of renegade warrior Furiosa before she teamed up with Mad Max in 'Fury Road'.",
    cast: ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke"],
    director: "George Miller",
    trailer: "https://www.youtube.com/watch?v=XdKzUbAiswE",
    isFeatured: true,
    isUpcoming: true
  }
];
