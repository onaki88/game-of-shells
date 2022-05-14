import { Level } from "./Level";

export type Config = {
  id: number;
  level: Level;
  delay: number;
  duration: number;
  shuffles: number;
};
