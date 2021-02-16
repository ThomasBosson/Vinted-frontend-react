import axios from "axios";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const Publish = ({ userToken }) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("picture", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("location", location);
      formData.append("price", price);
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      const response = await axios.post(
        "https://thomas-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      history.push(`/offer/${response.data._id}`);
    } catch (error) {
      setErrorMessage("Veuillez remplir tous les champs");
    }
  };

  return !userToken ? (
    <Redirect to="/login" />
  ) : (
    <div className="publish-body">
      <div className="publish-container">
        <div className="publish-word">
          <h2>Il est temps de vider ton armoire !</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <span>Ajouter une photo</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <div className="file-upload">
            <input
              id="file"
              type="file"
              onChange={(event) => setFile(event.target.files[0])}
            />
          </div>
          <span>Titre</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <input
            className="input-1"
            id="title"
            name="title"
            type="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <span>Décrire son article</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <textarea
            type="description"
            name="description"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <span>Marque</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <input
            className="input-1"
            id="brand"
            type="text"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
          <span>Taille</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <input
            className="input-1"
            id="size"
            type="text"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
          <span>Couleur</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <input
            className="input-1"
            id="color"
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <span>État</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <input
            className="input-1"
            id="condition"
            type="text"
            value={condition}
            onChange={(event) => setCondition(event.target.value)}
          />
          <span>Ville</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <input
            className="input-1"
            id="location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <span>Prix</span>
          <span style={{ color: "#f04846" }}>{errorMessage}</span>
          <input
            className="input-1"
            id="price"
            type="number"
            min={1}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default Publish;
