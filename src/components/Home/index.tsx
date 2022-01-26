import React from "react";

import { IGame } from "../../interfaces";
import GameCard from "../GameCard";

interface IProps {
  gamesList: IGame[];
}

const dummyObj = {
  id: 3498,
  background_image:
    "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
  name: "Grand Theft Auto V",
  parent_platforms: [
    { platform: { id: 1, name: "pc" } },
    { platform: { id: 2, name: "xbox" } },
    { platform: { id: 3, name: "ps5" } },
  ],
  rating: 3.2,
  rating_top: 5,
  ratings_count: 123,
};

const Home: React.FC<IProps> = ({ gamesList }) => {
  return (
    <div className="bg-primary p-10">
      <div className="grid gap-4 grid-cols-4 grid-rows-3">
        {/* {new Array(12).fill(dummyObj).map((game, idx) => {
          return <GameCard key={idx} gameDetails={game} />;
        })} */}
        {gamesList.map((game, idx) => {
          return <GameCard key={idx} gameDetails={game} />;
        })}
      </div>
    </div>
  );
};

export default Home;
