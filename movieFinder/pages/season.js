import View from "../view.js";

const resultsNode = document.querySelector('#results');
let season = {};

export default {
    setData(newSeason) {
        season = newSeason;
    },

    render() {
        resultsNode.innerHTML = View.render('season', season);
    }
}