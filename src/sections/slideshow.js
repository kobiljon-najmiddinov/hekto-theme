
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
            slides = new Swiper(".swiper", {
                loop: true,
                pagination: {
                el: ".swiper-pagination",
                },
            });
    });
    
};

const init = () => {
    cacheState();
    initSwiper();
};

onDocumentReady(() => init());

