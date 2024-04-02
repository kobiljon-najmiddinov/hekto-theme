import "./styles/featured-products.scss";
import Swiper from "swiper/bundle";
import "./styles/swiper.bundle.scss";
import { onDocumentReady } from "../utils/dom";

const state = {
    elements: {},
};

const cacheState = () => {
    state.elements = {
        slider: document.querySelectorAll(".swiper-wrapper"),
    };
};

// TODO: Fix pagination for 2 banner slideshows
const initSwiper = slideElm => {
    state.elements.slider.forEach(slides => {
        slides = new Swiper(".featuredSwiper", {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 2,
            slidesPerGroupSkip: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                // when window width is >= 990px
                990: {
                    spaceBetween: 20,
                    slidesPerView: 4.2,
                    slidesPerGroup: 4,
                    slidesPerGroupSkip: 4,

                }
            },
        });
    });

};

const init = () => {
    cacheState();
    initSwiper();
};

onDocumentReady(() => init());
