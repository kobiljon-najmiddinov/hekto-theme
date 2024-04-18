import Swiper from "swiper/bundle";
import "./styles/featured-products.scss";
import "./styles/swiper.bundle.scss";
import { onDocumentReady } from "../utils/dom";
import { loadScript } from "../utils/loadScript";

const state = {
    elements: {},
};

const cacheState = () => {
    state.elements = {
        slider: document.querySelectorAll(".featured-swiper"),
    };
};

// TODO: Fix pagination for 2 banner slideshows
const initSwiper = slideElm => {
    state.elements.slider.forEach(slides => {
        const swiper = new Swiper(slides, {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: slides.querySelector(".swiper-pagination"),
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
                    slidesPerGroup: 1,
                    slidesPerGroupSkip: 0,

                }
            },
        });
    });

};

const init = () => {
    cacheState();
    initSwiper();
    // loadScript("featured-products");
    if (window.loadedScripts["featured-product"]) return;
    window.loadedScripts["featured-product"] = true;
};

onDocumentReady(() => init());
