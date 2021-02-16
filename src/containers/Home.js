import axios from "axios";
import { useState, useEffect } from "react";
import Articles from "../components/Articles";
import { Link } from "react-router-dom";

const Home = ({ search, priceRange, priceSwitch }) => {
  // State declaration for API's data and useEffect
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Run after each display
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://thomas-vinted-api.herokuapp.com/offers/?title=${search}&sort=${priceSwitch}&priceMin=${priceRange[0]}&priceMax=${priceRange[1]}`
      );
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
        {/* Loop on offers from API */}
        {data.offers.map((e) => {
          return <Articles data={e} key={e._id} isLoading={isLoading} />;
        })}
      </div>
    </>
  );
};

export default Home;
