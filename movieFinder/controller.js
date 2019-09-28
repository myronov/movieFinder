import Model from './model.js';
import popularPage from './pages/popular.js';
import filmPage from './pages/film.js';
import topPage from './pages/top.js';

const topNavNode = document.querySelector('[data-role=nav-top]');
const popularNavNode = document.querySelector('[data-role=nav-popular]');

let activeNavNode;

function setActiveNavNode(node) {
    if (activeNavNode) {
        activeNavNode.classList.remove('active');
    }

    activeNavNode = node;
    activeNavNode.classList.add('active');
}

export default {
    async filmRoute(id) {
        const data = await Model.getFilm(id);

        console.log(data);
        filmPage.setData(data);
        filmPage.render();
    },

    async popularRoute(params) {
        if (params.id) {
            this.filmRoute(params.id);
        } else {
            const data = await Model.getPopular();
            popularPage.setData(data.results);
            popularPage.render();
        }

        setActiveNavNode(popularNavNode);
    },
    async topRoute(params) {

        if(params.id) {
            this.filmRoute(params.id);
        } else {
            const data = await Model.getTop();
            topPage.setData(data.results);
            topPage.render();
        }

        setActiveNavNode(topNavNode);
        
    }
};
