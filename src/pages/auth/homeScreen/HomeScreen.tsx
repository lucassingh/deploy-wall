import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ButtonWall, MainHeader } from '../../../components';
import qr from '../../../assets/imgs/qr-code.svg'
import { useNavigate } from 'react-router-dom';
import './home-screen.scss';

const HomeScreen: React.FC = () => {

    const navigate = useNavigate();

    const goToLoadedImgs = () => {
        navigate('/loaded-images')
    }

    const goToPublicImgs = () => {
        navigate('/public-images')
    }

    return (
        <>
            <MainHeader title='Bienvenidos a Monopol Pinturas' />

            <div className='d-flex align-items-center mt-2'>
                <Container className='main-container'>
                    <Row>
                        <Col className='d-flex' md={12}>
                            <div className='flex-column wrap-container'>
                                este boton es provisorio para ir a la siguiente pantalla una vez cargadas las imágenes
                                <ButtonWall
                                    color="secondary"
                                    type="outline"
                                    size="small"
                                    text="editar"
                                    typeButtonForm='submit'
                                    clickHandler={goToLoadedImgs}
                                />
                                <h5 className='mb-3 mt-2'>Escaneá este QR para cargar tus imágenes</h5>
                                <img className='img' src={qr} alt="qr code" />
                                <div className=' mt-5'>
                                    <ProgressBar striped variant="success" now={40} />
                                </div>
                                <div className=' mt-5'>
                                    <h5 className='mb-5'>O podés usar imágenes públicas</h5>
                                    <ButtonWall
                                        color="secondary"
                                        type="outline"
                                        size="large"
                                        text="Ver imágenes públicas"
                                        typeButtonForm='submit'
                                        clickHandler={goToPublicImgs}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default HomeScreen;