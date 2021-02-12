import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = ({ userToken, setUser, search, setSearch }) => {
  const history = useHistory();
  return (
    <div className="header">
      <div>
        <img alt="logo vinted" src="/img/vinted-logo.png" />
      </div>
      <div className="search">
        <input
          className="search-bar"
          type="text"
          name="search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div className="filters">
          <div
            style={{
              marginTop: 25,
              fontSize: 12,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: 10 }}>Prix entre :</span>
            <div className="range-price"></div>
          </div>
        </div>
      </div>
      <div className="header-button">
        {userToken ? (
          <button
            className="disconnect-button"
            onClick={() => {
              setUser(null);
              history.push("/");
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
