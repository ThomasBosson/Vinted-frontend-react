import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  // Déclaration des states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // Initialisation du handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://thomas-vinted-api.herokuapp.com/user/login",
      {
        email: email,
        password: password,
      }
    );
    setUser(response.data.token);
    history.push("/");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Se connecter</button>
          <div className="no-count">
            <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
