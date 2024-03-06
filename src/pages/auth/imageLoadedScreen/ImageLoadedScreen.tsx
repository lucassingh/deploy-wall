import { Container } from "react-bootstrap"
import { MainSlider } from "../../../components";

const images = [
    {
        id: 1,
        url: 'https://www.aedashomes.com/blog/wp-content/uploads/2021/07/ambientes-casa-destacada-1280x720.jpg',
    },
    {
        id: 2,
        url: 'https://www.aedashomes.com/blog/wp-content/uploads/2021/07/ambientes-casa-destacada-1280x720.jpg',
    },
    {
        id: 3,
        url: 'https://www.aedashomes.com/blog/wp-content/uploads/2021/07/ambientes-casa-destacada-1280x720.jpg',
    }
];

const ImageLoadedScreen = () => {
    return (
        <>
            <Container className="mt-3 mb-3">
                <h4>Imágenes cargadas</h4>
                <hr />
                <MainSlider images={images} />
            </Container>
        </>
    )
}

export default ImageLoadedScreen