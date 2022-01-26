import React from "react";
import { useParams } from "react-router-dom";

import GameDetailsContainer from "../../containers/GameDetails";

const GameDetails: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();

  return <GameDetailsContainer gameId={Number(gameId)} />;
};

export default GameDetails;
