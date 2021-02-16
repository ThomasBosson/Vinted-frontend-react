import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  // State declaration email, password, errorMessage
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // useHistory hook gives an access to the history instance that may use to navigate
  const history = useHistory();

  // login handleSubmit initialization
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://thomas-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      setUser(response.data.token);
      // navigate to publish once logged
      history.push("/publish");
    } catch (error) {
      setErrorMessage("Identifiant ou mot de passe invalide");
      if (error.response) {
        console.log(error.response.message);
      }
    }
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
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span>Mot de passe</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
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
