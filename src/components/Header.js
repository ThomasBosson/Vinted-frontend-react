import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  return (
    <div className="header">
      <div>
        <img alt="logo vinted" src="/img/vinted-logo.png" />
      </div>
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Rechercher des articles"
        />
      </div>
      <div className="header-button">
        {userToken ? (
          <button
            onClick={() => {
              setUser(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <>
            <Link to="/signup">
              <button className="sign-button">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="connect-button">Se connecter</button>
            </Link>
          </>
        )}
      </div>
      <div>
        <button className="publish-button">Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
