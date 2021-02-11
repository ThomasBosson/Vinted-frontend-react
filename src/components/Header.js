const Header = () => {
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
        {/* Ajouter condition se déconnecter (cf Deliveroo) */}
        <button className="sign-button">S'inscrire</button>
        <button className="connect-button">Se connecter</button>
      </div>
      <div>
        <button className="publish-button">Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
