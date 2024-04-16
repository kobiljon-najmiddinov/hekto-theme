import "./styles/product-listing.scss";

import { onDocumentReady } from "../utils/dom";

const state = {
    elements: {},
};

const cacheState = () => {
        state.elements = {
            addToCart: document.querySelectorAll(".add-to-cart-link"),
        };
};

// TODO: Fix pagination for 2 banner slideshows
const addToCart = slideElm => {
    state.elements.addToCart.forEach(cart => {
            // console.log(cart);
            cart.addEventListener("click", async (event) => {
                console.log(event);
            });
    });
    
};

const init = () => {
    cacheState();
    addToCart();
};

onDocumentReady(() => init());