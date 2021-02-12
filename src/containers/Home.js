// Mise en page de la page Home de Vinted
// Mapper l'API contenant les offres afin de les retourner sur la Home Page

import axios from "axios";
import { useState, useEffect } from "react";
import Articles from "../components/Articles";

const Home = ({ search }) => {
  // Déclaration des states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Indique à React que nos composants doivent s'exécuter après chaque affichage
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://thomas-vinted-api.herokuapp.com/offers/${search}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="home">
        <img src="/assets/img/home-page.jpg" alt="home" />
        <div>
          <div className="home-title">
            Prêt à faire du tri dans vos placards ?
            <button>Commencer à vendre</button>
          </div>
        </div>
      </div>
      <div className="articles">
        {data.offers.map((e) => {
          return <Articles data={e} key={e._id} isLoading={isLoading} />;
        })}
      </div>
    </>
  );
};

export default Home;
