// Mise en page de la page Home de Vinted
// Mapper l'API contenant les offres afin de les retourner sur la Home Page

import axios from "axios";
import { useState, useEffect } from "react";
import Articles from "../components/Articles";
import { Link } from "react-router-dom";

const Home = ({ search, priceRange, priceSwitch }) => {
  // Déclaration des states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Ascending / descending sort price

  // Indique à React que nos composants doivent s'exécuter après chaque affichage
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://thomas-vinted-api.herokuapp.com/offers/?title=${search}&sort=${priceSwitch}&priceMin=${priceRange[0]}&priceMax=${priceRange[1]}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search, priceRange, priceSwitch]);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="home">
        <img src="/assets/img/home-page.jpg" alt="home" />
        <div>
          <div className="home-title">
            Prêt à faire du tri dans vos placards ?
            <Link to="/publish">
              <button>Commencer à vendre</button>
            </Link>
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
