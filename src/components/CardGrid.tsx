import { Link } from "react-router-dom";
import { Image } from '../interfaces/Image';
import { IoStar } from "react-icons/io5";

const CardGrid: React.FC<Image> = ( image ) => {
    return (
        <Link to={`/images/${image.id}`} state={{ image }}>
            <div className="card-grid-container">
                <img className="img-grid" src={image.url} alt="img" />

                <div className="rating-container">
                    <span>4</span>
                    <IoStar className="star-icon" />
                </div>
            </div>
        </Link>
    )
}

export default CardGrid;