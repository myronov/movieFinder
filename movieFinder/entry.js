
import Model from './model.js';
import View from './view.js';
import Router from './router.js';

(async () => {
    try {
     
        Router.init();
    } catch (e) {
        console.error(e);
        alert('Error: ' + e.message);
    }
})();