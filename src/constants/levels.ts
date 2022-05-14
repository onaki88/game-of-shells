import { Config } from "../types/Config";
import { Level } from "../types/Level";

export const levels: Array<Config> = [
  {
    id: 0,
    level: Level.EASY,
    delay: 2500,
    duration: 750,
    shuffles: 5,
  },
  {
    id: 1,
    level: Level.MEDIUM,
    delay: 1500,
    duration: 500,
    shuffles: 10,
  },
  {
    id: 2,
    level: Level.HARD,
    delay: 750,
    duration: 350,
    shuffles: 15,
  },
];
