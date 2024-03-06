import { Container } from "react-bootstrap";
import { CardGrid } from ".";
import { Image } from "../interfaces/Image";

interface GridLayoutProps {
    cards: Image[];
}

const GridLayout: React.FC<GridLayoutProps> = ({ cards }) => {
    return (
        <Container className="mr-0 p-0">
            <div className="grid-container">
                {
                    cards.map((card) => (
                        <CardGrid key={card.id} url={card.url} id={card.id} />
                    ))
                }
            </div>

        </Container>
    )
}

export default GridLayout