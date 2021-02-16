import { Link, useHistory } from "react-router-dom";
import Range from "./Range";
import CheckSwitch from "./CheckSwitch";

const Header = ({
  userToken,
  setUser,
  search,
  setSearch,
  priceRange,
  setPriceRange,
  priceSwitch,
  setPriceSwitch,
}) => {
  const history = useHistory();
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img alt="logo vinted" src="/img/vinted-logo.png" />
        </Link>
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
            <div className="filters">
              <Range priceRange={priceRange} setPriceRange={setPriceRange} />
              <CheckSwitch
                priceSwitch={priceSwitch}
                setPriceSwitch={setPriceSwitch}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header-button">
        {/* If userToken exists disconnected button appears */}
        {/* At click it disappears and return to home page*/}
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
        <Link to="/publish">
          <button className="publish-button">Vends tes articles</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
