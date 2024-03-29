import Model from './model.js';
import popularPage from './pages/popular.js';
import filmPage from './pages/film.js';
import topPage from './pages/top.js';
import seasonPage from './pages/season.js';

const topNavNode = document.querySelector('[data-role=nav-top]');
const popularNavNode = document.querySelector('[data-role=nav-popular]');

let activeNavNode, activePageNode;

function setActiveNavNode(node) {
    if (activeNavNode) {
        activeNavNode.classList.remove('active');
    }

    activeNavNode = node;
    activeNavNode.classList.add('active');
}

function setActivePageNode(page) {
    if(activePageNode) {
        activePageNode.classList.remove('active');
    }

    activePageNode = document.querySelector(`[data-role=nav-page-${page}]`).parentNode;
    activePageNode.classList.add('active');
}

export default {
    async seasonRoute(params) {
        const data = await Model.getSeason(params);
        seasonPage.setData(data);
        seasonPage.render();
    },

    async filmRoute(id) {
        const data = await Model.getFilm(id);
        filmPage.setData(data);
        filmPage.render();
    },

    async popularRoute(params) {
        if (params.id) {
            this.filmRoute(params.id);
        } else {
            const data = await Model.getPopular(params.page);
            popularPage.setData(data.results);
            popularPage.render();
        }

        setActiveNavNode(popularNavNode);
        if(params.page) setActivePageNode(params.page);
    },
    async topRoute(params) {
        if(params.id) {
            this.filmRoute(params.id);
        } else {
            const data = await Model.getTop(params.page);
            topPage.setData(data.results);
            topPage.render();
        }

        setActiveNavNode(topNavNode);
        if(params.page) setActivePageNode(params.page);
    }
};
