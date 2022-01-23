/*jshint esversion: 6 */ 
import filter from "./modules/filter";
import calc from "./modules/calc";
import checkTextInputs from "./modules/checkTextInputs";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modals";
import showMoreStyles from "./modules/showMoreStyles";
import sliders from "./modules/sliders";
import pictureSize from "./modules/pictureSize";
import accordeon from "./modules/accordeon";
import burger from "./modules/burger";
import scroling from "./modules/scroling";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size','#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordeon('.accordion-heading');
    burger('.burger-menu','.burger');
    scroling('.pageup');
});