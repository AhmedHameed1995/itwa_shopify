import Vue from "vue"
window.Vue = Vue

let axios = require('axios');
window.axios = axios;

let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

import "popper.js";
import "bootstrap";

window.Noty = require('noty');

// Vue custom filter
require('./filters/money.js');
require('./components/ProductForm.js');
require('./components/CartForm.js');
require('./components/MiniCart.js');
require('./product.js'); 
require('./header.js'); 