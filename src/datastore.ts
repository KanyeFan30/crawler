/*
This file is meant to show the structure of how the data is stored in the datastore:
- Each sport has an array of "Event" objects (games)
- Each game has a title, a date (in epoch), and an array of Markets offered by different websites
- Interfaces should be referred to when adding new data
*/

const data: {
  americanFootball: Event[];
  australianRules: Event[];
  badminton: Event[];
  baseball: Event[];
  basketball: Event[];
  boxing: Event[];
  cricket: Event[];
  darts: Event[];
  esports: Event[];
  gaelicSports: Event[];
  golf: Event[];
  handball: Event[];
  iceHockey: Event[];
  motorSport: Event[];
  netball: Event[];
  pool: Event[];
  rugbyLeague: Event[];
  rugbyUnion: Event[];
  snooker: Event[];
  soccer: Event[];
  tableTennis: Event[];
  tennis: Event[];
  ufc: Event[];
  volleyball: Event[];
  other: Event[];
} = {
  americanFootball: [],
  australianRules: [],
  badminton: [],
  baseball: [],
  basketball: [],
  boxing: [],
  cricket: [],
  darts: [],
  esports: [],
  gaelicSports: [],
  golf: [],
  handball: [],
  iceHockey: [],
  motorSport: [],
  netball: [],
  pool: [],
  rugbyLeague: [],
  rugbyUnion: [],
  snooker: [],
  soccer: [],
  tableTennis: [],
  tennis: [],
  ufc: [],
  volleyball: [],
  other: [],
}

interface Event {
  eventTitle: String,
  date: Number,
  markets: Market[],
}

interface Market {
  website: String,
  team1Name: String,
  team1Odds: Number,
  draw?: Number,
  team2Name: String,
  team2Odds: Number,
}