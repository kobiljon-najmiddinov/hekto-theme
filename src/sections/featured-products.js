import Swiper from "swiper/bundle";
import "./styles/featured-products.scss";
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
            slidesPerGroupSkip: 0,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".featured-pagination",
                clickable: true,
            },
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                // when window width is >= 990px
                990: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    slidesPerGroupSkip: 0,

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
