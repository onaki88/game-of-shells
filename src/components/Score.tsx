import { Score } from "./../types/Score";
import { SCORE } from "./../constants/messages";

type Props = {
  score: Score;
};

const ScoreInfo = ({ score }: Props) => {
  return (
    <p>
      {SCORE.WON}: {score.won} / {SCORE.LOST}: {score.lost}
    </p>
  );
};

export default ScoreInfo;
