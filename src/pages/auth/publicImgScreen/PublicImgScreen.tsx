import { ButtonWall, GridLayout } from "../../../components"

import img1 from '../../../assets/imgs/grid/bed-1.jpg';
import img2 from '../../../assets/imgs/grid/bat-1.jpg';
import img3 from '../../../assets/imgs/grid/liv-1.jpg';
import img4 from '../../../assets/imgs/grid/kit-1.jpg';
import img5 from '../../../assets/imgs/grid/bed-2.jpg';
import img6 from '../../../assets/imgs/grid/bat-2.jpg';
import img7 from '../../../assets/imgs/grid/liv-2.jpg';
import img8 from '../../../assets/imgs/grid/kit-2.jpg';
import img9 from '../../../assets/imgs/grid/bed-3.jpg';
import img10 from '../../../assets/imgs/grid/bat-3.jpg';
import img11 from '../../../assets/imgs/grid/liv-3.jpg';
import img12 from '../../../assets/imgs/grid/kit-3.jpg';
import img13 from '../../../assets/imgs/grid/bed-4.jpg';
import img14 from '../../../assets/imgs/grid/bat-4.jpg';
import img15 from '../../../assets/imgs/grid/liv-4.jpg';
import img16 from '../../../assets/imgs/grid/kit-4.jpg';
import img17 from '../../../assets/imgs/grid/bed-5.jpg';
import img18 from '../../../assets/imgs/grid/bat-5.jpg';
import img19 from '../../../assets/imgs/grid/liv-5.jpg';
import img20 from '../../../assets/imgs/grid/kit-5.jpg';
import { Container } from "react-bootstrap";
import { useState } from "react";

const cards = [
    { id: 1, url: img1, category: 'bed' },
    { id: 2, url: img2, category: 'bat' },
    { id: 3, url: img3, category: 'liv' },
    { id: 4, url: img4, category: 'kit' },
    { id: 5, url: img5, category: 'bed' },
    { id: 6, url: img6, category: 'bat' },
    { id: 7, url: img7, category: 'liv' },
    { id: 8, url: img8, category: 'kit' },
    { id: 9, url: img9, category: 'bed' },
    { id: 10, url: img10, category: 'bat' },
    { id: 11, url: img11, category: 'liv' },
    { id: 12, url: img12, category: 'kit' },
    { id: 13, url: img13, category: 'bed' },
    { id: 14, url: img14, category: 'bat' },
    { id: 15, url: img15, category: 'liv' },
    { id: 16, url: img16, category: 'kit' },
    { id: 17, url: img17, category: 'bed' },
    { id: 18, url: img18, category: 'bat' },
    { id: 19, url: img19, category: 'liv' },
    { id: 20, url: img20, category: 'kit' }
];

const PublicImgScreen = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredCards = selectedCategory ? cards.filter(card => card.category === selectedCategory) : cards;

    const categoryButtons = [
        { category: '', text: "Todos" },
        { category: "bed", text: "Dormitorios" },
        { category: "bat", text: "Baños" },
        { category: "liv", text: "Livings" },
        { category: "kit", text: "Cocinas" }
    ];

    return (
        <Container>
            <h4 className="mt-5">Imágenes públicas</h4>
            <hr />
            <div className="category-buttons">
                {categoryButtons.map((button, index) => (
                    <ButtonWall
                        key={index}
                        color="primary"
                        type={selectedCategory === button.category ? "normal" : "outline"}
                        size="small"
                        text={button.text}
                        typeButtonForm='submit'
                        clickHandler={() => handleCategoryClick(button.category)}
                    />
                ))}
            </div>
            <GridLayout cards={filteredCards} />
        </Container>
    )
}

export default PublicImgScreen