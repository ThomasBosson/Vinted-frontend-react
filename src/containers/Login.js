import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  // Déclaration des states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // Initialisation du handleSubmit login
  const handleSubmit = async (event) => {
    event.preventDefault();
    // requête axios vers la route login du back avec l'url et la data à envoyer
    const response = await axios.post(
      "https://thomas-vinted-api.herokuapp.com/user/login",
      {
        email: email,
        password: password,
      }
    );
    // console.log(response.data)
    setUser(response.data.token);
    history.push("/");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="happy-word">
          <h2>Ha, te revoilà!</h2>
          <p>Nous sommes si heureux de te revoir!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span>Mot de passe</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Se connecter</button>
        </form>
        <div className="no-count">
          <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
