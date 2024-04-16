
import Swiper from "swiper/bundle";
import  "./styles/swiper.bundle.scss";
import { onDocumentReady } from "../utils/dom";

const state = {
    elements: {},
};

const cacheState = () => {
        state.elements = {
            slider: document.querySelectorAll(".swiper-wrapper"),
        };
};

const initSwiper = slideElm => {
    state.elements.slider.forEach(slides => {
            slides = new Swiper(".banner-slideshow", {
                loop: true,
                pagination: {
                el: ".banner-pagination",
                clickable: true,
                }
                
            });
    });
    
};

const init = () => {
    cacheState();
    initSwiper();
};

onDocumentReady(() => init());

