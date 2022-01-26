import React from "react";

import { IGameDetailsAPIResponse } from "../../interfaces";

interface IProps {
  gameDetails: IGameDetailsAPIResponse | null;
}

const GameDetails: React.FC<IProps> = ({ gameDetails }) => {
  if (!gameDetails) {
    return null;
  }

  return (
    <div className="text-white bg-primary h-screen p-10">
      <div className="bg-primary-light rounded-md">
        <div className="flex">
          <img
            src={gameDetails.background_image}
            alt="game shot"
            className="h-80 rounded-tl-md"
          />
          <div className="p-6">
            <p className="text-2xl mb-4">{gameDetails.name}</p>
            <p className="mb-2">Release: {gameDetails.released}</p>
            <p className="text-sm mb-2">
              Platforms:{" "}
              {gameDetails.parent_platforms
                .map((platform) => platform.platform.name)
                .join(" / ")}
            </p>
            <p className="text-sm mb-3">
              Rating: {gameDetails.rating} / {gameDetails.rating_top} (
              {gameDetails.ratings_count})
            </p>
            <p>
              Tags:{" "}
              <span className="underline">
                {gameDetails.tags.map((tag) => `#${tag.name}`).join(", ")}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="mb-4">{gameDetails.description_raw}</p>
          <div className="mb-2">
            Developers:{" "}
            {gameDetails.developers.map((developer, idx) => {
              return <span key={idx}>{developer.name}, </span>;
            })}
          </div>
          <div className="mb-2">
            Stores:{" "}
            {gameDetails.stores.map((store, idx) => {
              return (
                <a
                  key={idx}
                  href={`https://${store.store.domain}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {store.store.name},{" "}
                </a>
              );
            })}
          </div>
          <div>
            Publishers:{" "}
            {gameDetails.publishers.map((publisher, idx) => {
              return <span key={idx}>{publisher.name}, </span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
