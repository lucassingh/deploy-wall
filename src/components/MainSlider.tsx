import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { ButtonWall } from '.';
import { Image } from '../interfaces/Image';

interface ImageSliderProps {
    images: Image[];
}

const MainSlider: React.FC<ImageSliderProps> = ({ images }) => {

    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className="image-slider">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                {images.map((image, idx) => (
                    <Carousel.Item key={idx}>
                        <img className="d-block w-100" src={image.url} alt={`Slide ${idx + 1}`} />
                        <Carousel.Caption>
                            <Link to={`/images/${image.id}`} state={{ image }}>
                                <ButtonWall
                                    color="primary"
                                    type="normal"
                                    size="medium"
                                    text="Editar imagen"
                                    typeButtonForm='submit'
                                    clickHandler={handleClick}
                                />
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="controls">
                <Button
                    variant="outline-secondary"
                    onClick={() => setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
                >
                </Button>
                <Button
                    variant="outline-secondary"
                    onClick={() => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}
                >
                </Button>
            </div>
        </div >
    )
}

export default MainSlider