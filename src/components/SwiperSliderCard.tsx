interface ColorBoxProps {
    id: number;
    nombre: string;
    codigo: string;
}

const SwiperSliderCard: React.FC<ColorBoxProps> = ({ nombre, codigo }) => {

    const getTextColor = (bgColor: string): string => {
        const r = parseInt(bgColor.substr(1, 2), 16);
        const g = parseInt(bgColor.substr(3, 2), 16);
        const b = parseInt(bgColor.substr(5, 2), 16);
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luma < 128 ? '#ffffff' : '#000000';
    };

    const boxStyle: React.CSSProperties = {
        backgroundColor:codigo,
        width: '65px',
        height: '85px',
        borderRadius: 7,
        padding: 10,
        color: getTextColor(codigo),
        fontWeight: 'bold',
        display:'flex',
        alignItems:'center',
        fontSize: 12,
        textAlign:'center'
    };

    return (
        <div style={boxStyle}>
            <span>{nombre}</span>
        </div>
    )
}

export default SwiperSliderCard

