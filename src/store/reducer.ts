import { createSlice } from "@reduxjs/toolkit";

import { levels } from "../constants/levels";
import { shells } from "../constants/shells";

import { Config } from "../types/Config";
import { State } from "../types/State";
import { Shell } from "../types/Shell";
import { Score } from "../types/Score";

import shuffle from "../utils/shuffle";

// Define a type for the slice state
interface GameState {
  config: Config;
  shells: Array<Shell>;
  state: State;
  victory: boolean;
  score: Score;
}

// Define the initial state using that type
const initialState: GameState = {
  shells: shells,
  config: levels[0],
  state: State.START,
  victory: false,
  score: {
    won: 0,
    lost: 0,
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setShell: (state, action) => {
      // update game state
      state.state = State.END;

      // show selected shell
      state.shells.map((shell) => (shell.active = action.payload === shell.id));

      // set victory
      const currentShell = state.shells.find((shell) => shell.cheese);
      if (currentShell) {
        state.victory = action.payload === currentShell.id;
      }

      // update score
      if (state.victory) {
        state.score.won += 1;
      } else {
        state.score.lost += 1;
      }

      // upgrade level
      if (state.victory) {
        for (let l = 0; l < levels.length; l++) {
          if (state.config.id === levels[l].id && l < levels.length - 1) {
            state.config = levels[l + 1];
            break;
          }
        }
      }
    },
    setCheese: (state) => {
      const excludeIndex = state.shells.findIndex(
        (shell) => shell.active === true
      );

      const randShellIndex = () => {
        const randCheeseIndex = Math.floor(Math.random() * state.shells.length);
        if (randCheeseIndex === excludeIndex) {
          randShellIndex();
        } else {
          state.shells.map(
            (shell, i) => (shell.cheese = randCheeseIndex === i)
          );
        }
      };

      randShellIndex();
    },
    setState: (state, action) => {
      // update state
      state.state = action.payload;

      // show cheese if state = pending
      state.shells.map(
        (shell) =>
          (shell.active = shell.cheese && action.payload === State.PENDING)
      );
    },
    shuffleShells: (state) => {
      const indexArray = Array.from(
        { length: state.shells.length },
        (item, index) => state.shells[index].i
      );
      const shuffled = shuffle(indexArray);

      for (let i = 0; i < shuffled.length; i++) {
        state.shells[i].i = shuffled[i];
        state.shells[i].x = shuffled[i] * 200;
      }
    },
    setLevel: (state, action) => {
      state.config = levels[action.payload];
    },
  },
});

export const { setShell, setCheese, setState, setLevel, shuffleShells } =
  gameSlice.actions;

export default gameSlice.reducer;
