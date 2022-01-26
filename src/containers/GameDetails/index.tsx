import React from "react";
import Axios from "axios";

import { API_BASE_URL } from "../../config/environment";
import { IGameDetailsAPIResponse } from "../../interfaces";
import GameDetailsComponent from "../../components/GameDetails";

interface IProps {
  gameId?: number;
}

const GameDetails: React.FC<IProps> = ({ gameId }) => {
  const [gameDetails, setGameDetails] =
    React.useState<IGameDetailsAPIResponse | null>(null);

  React.useEffect(() => {
    if (gameId) {
      Axios.get<IGameDetailsAPIResponse>(`${API_BASE_URL}/get-game-details`, {
        params: {
          gameId,
        },
      })
        .then(({ data }) => {
          setGameDetails(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  if (!gameId) {
    return <p>Unknown game id</p>;
  }

  return <GameDetailsComponent gameDetails={gameDetails} />;
};

export default GameDetails;
