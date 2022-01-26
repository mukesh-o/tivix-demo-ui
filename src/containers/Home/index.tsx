import React from "react";
import Axios from "axios";

import { API_BASE_URL } from "../../config/environment";
import { IGamesListAPIResponse, IGame } from "../../interfaces";
import HomeComponet from "../../components/Home";

const Home: React.FC = () => {
  const [gamesList, setGamesList] = React.useState<IGame[]>([]);

  React.useEffect(() => {
    getGamesList(1);
  }, []);

  const getGamesList = async (pageNumber: number) => {
    await Axios.get<IGamesListAPIResponse>(`${API_BASE_URL}/get-games-list`, {
      params: {
        page: pageNumber,
      },
    })
      .then(({ data }) => {
        setGamesList(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <HomeComponet gamesList={gamesList} />;
};

export default Home;
