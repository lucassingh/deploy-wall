import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './image-loaded-detail-screen.scss';
import SwipSlider from '../../../components/SwipSlider';
import { IoStar } from 'react-icons/io5';
import { paletteSWT200, paletteSWT300, paletteSWT400, paletteSWT500 } from '../../../api/palettes.json';
import { ButtonWall } from '../../../components';

const ImageLoadedDetailScreen = () => {

    const location = useLocation();

    const image = location.state.image;

    const [showFirstContent, setShowFirstContent] = useState(true);

    const toggleContent = () => {
        setShowFirstContent(!showFirstContent);
    };

    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className='mt-5'>
                        <ButtonWall
                            color="primary"
                            type="normal"
                            size="large"
                            text={showFirstContent ? "Ver antes y después" : "Volver a editar"}
                            typeButtonForm='submit'
                            clickHandler={toggleContent}
                        />
                    </Col>
                </Row>
            </Container>

            {showFirstContent ? (
                <Container>
                    <Row className="mt-4">
                        <h4>Elegir colores</h4>
                        <hr />
                    </Row>
                    <Row className="mt-3 mb-5">
                        <Col md={9} className="col-12">
                            <div className="image-container">
                                <img src={image.url} alt={image.id} />
                            </div>
                            <div className="mt-3">
                                <h4>Calificación</h4>
                                <hr />
                                <IoStar className="rating-star mr-3" />
                                <IoStar className="rating-star" />
                                <IoStar className="rating-star" />
                                <IoStar className="rating-star" />
                            </div>
                        </Col>
                        <Col md={3} className="col-12 mt-3 mt-md-0">
                            <>
                                <h6 className="mb-0">Línea SWT200</h6>
                                <SwipSlider palettes={paletteSWT200} />
                                <h6 className="mb-0">Línea SWT300</h6>
                                <SwipSlider palettes={paletteSWT300} />
                                <h6 className="mb-0">Línea SWT400</h6>
                                <SwipSlider palettes={paletteSWT400} />
                                <h6 className="mb-0">Línea SWT500</h6>
                                <SwipSlider palettes={paletteSWT500} />
                            </>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Container>
                    <Row className='mt-5'>
                        <Col md={6}>
                            <img className='img-ad' src={image.url} alt={image.id} />
                        </Col>
                        <Col md={6}>
                            <img className='img-ad' src={image.url} alt={image.id} />
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};
export default ImageLoadedDetailScreen;