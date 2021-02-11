import { Link } from "react-router-dom";

const Articles = ({ data, isLoading }) => {
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="card-profil">
        <div className="username">
          <span>{data.owner.account.username}</span>
        </div>
        {/* Link sur la profil pic qui fera le pont pour rejoindre le container offer */}
        <Link to={`/Offer/${data._id}`}>
          <img src={data.product_image.secure_url} alt="" />
        </Link>
        <div className="details">
          <p>{data.product_price} €</p>
          <p>{data.product_details[1].TAILLE}</p>
          <p>{data.product_details[0].MARQUE}</p>
        </div>
      </div>
    </>
  );
};

export default Articles;
