
import Swiper from "swiper/bundle";
import  "./styles/swiper.bundle.scss";
import { onDocumentReady } from "../utils/dom";
import { loadScript } from "../utils/loadScript";

const state = {
    elements: {},
};

const cacheState = () => {
        state.elements = {
            slider: document.querySelectorAll(".banner-slideshow"),
        };
};

const initSwiper = () => {
    state.elements.slider.forEach((slides) => {
           const swiper = new Swiper(slides, {
                loop: true,
                pagination: {
                    el: slides.querySelector(".swiper-pagination"),
                    clickable: true,
                }
                
                
            });
    });
    
};

const init = () => {
    cacheState();
    initSwiper();
    if (window.loadedScripts["slideshow"]) return;
    window.loadedScripts["slideshow"] = true;
};

onDocumentReady(() => init());

