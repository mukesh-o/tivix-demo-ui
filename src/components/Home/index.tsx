import React from "react";

import { IGame } from "../../interfaces";
import GameCard from "../GameCard";

interface IProps {
  gamesList: IGame[];
}

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
