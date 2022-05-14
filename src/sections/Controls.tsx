import AppButton from "./../components/Button";

import { useAppSelector, useAppDispatch } from "./../store/hooks";
import { setState, setCheese, shuffleShells } from "./../store/reducer";

import { State } from "./../types/State";

const Controls = () => {
  const state = useAppSelector((state) => state.state);
  const config = useAppSelector((state) => state.config);

  const dispatch = useAppDispatch();

  const canClick = state === State.START || state === State.END;

  const handleClick = () => {
    // add cheese to random shell
    dispatch(setCheese());

    // start & show the cheese
    dispatch(setState(State.PENDING));

    // start shuffle & hide the cheese
    setTimeout(() => {
      dispatch(setState(State.SHUFFLING));

      let timerId = setInterval(
        () => dispatch(shuffleShells()),
        config.duration
      );

      setTimeout(() => {
        clearInterval(timerId);
      }, config.duration * config.shuffles);
    }, config.delay);

    // stop shuffle & start guessing
    setTimeout(() => {
      dispatch(setState(State.PLAYING));
    }, config.delay + config.duration * config.shuffles);
  };

  return (
    <AppButton
      text={state}
      onClick={handleClick}
      disabled={!canClick}
    ></AppButton>
  );
};

export default Controls;
