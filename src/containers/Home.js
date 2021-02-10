// Mise en page de la page Home de Vinted
// Mapper l'API contenant les offres afin de les retourner sur la Home Page

import Articles from "../components/Articles";

const Home = ({ data, isLoading }) => {
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="home">
        <img src="/assets/img/home-page.jpg" />
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
