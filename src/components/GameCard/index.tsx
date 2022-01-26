import React from "react";
import { Link } from "react-router-dom";

import { IGame } from "../../interfaces";

interface IProps {
  gameDetails: IGame;
}

const GameCard: React.FC<IProps> = ({ gameDetails }) => {
  return (
    <Link to={`/game-${gameDetails.id}`}>
      <div className="bg-primary-light rounded-lg text-white bg-primary-light ml-6 mb-6 shadow-2xl">
        <img
          src={gameDetails.background_image}
          alt="gameImage"
          className="rounded-t-lg h-40 w-96"
        />
        <div className="p-4">
          <p className="mb-4">{gameDetails.name}</p>
          <p className="text-sm">
            Platforms:{" "}
            {gameDetails.parent_platforms
              .map((platform) => platform.platform.name)
              .join(" / ")}
          </p>
          <p className="text-sm">
            Rating: {gameDetails.rating} / {gameDetails.rating_top} (
            {gameDetails.ratings_count})
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
