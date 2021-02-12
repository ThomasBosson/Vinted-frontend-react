import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser }) => {
  // Déclaration des states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // Initialisation du handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://thomas-vinted-api.herokuapp.com/user/signup",
      {
        username: username,
        email: email,
        phone: phone,
        password: password,
      }
    );
    setUser(response.data.token);
    history.push("/");
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <div className="happy-word">
          <h2>Rejoins-nous !</h2>
          <p>Créer un compte</p>
        </div>
        <form onSubmit={handleSubmit}>
          <span>Nom d'utilisateur</span>
          <input
            className="input-1"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <span>Email</span>
          <input
            className="input-1"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span>Téléphone</span>
          <input
            className="input-1"
            type="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <span>Mot de passe</span>
          <input
            className="input-1"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="signup-newsletter">
            <input type="checkbox" name="newsletter" />
            <p>S'inscrire à notre newsletter</p>
          </div>
          <div className="signup-legal">
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
        <div className="yes-count">
          <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
