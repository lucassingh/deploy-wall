import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { SwiperSliderCard } from '.';

interface BoxPaletteComponentProps {
    palettes: BoxPalette[];
}

const SwipSlider: React.FC<BoxPaletteComponentProps> = ({ palettes }) => {
    return (
        <div className="container-swiper">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {
                    palettes.map((palette:BoxPalette) => (
                        <SwiperSlide key={palette.id}>
                            <SwiperSliderCard nombre={palette.nombre} codigo={palette.codigo} id={palette.id} />
                        </SwiperSlide>
                    ))
                }

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <AiOutlineArrowLeft />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default SwipSlider