import Controller from './controller.js';

function getRouteInfo() {

    const hash = location.hash ? location.hash.slice(1) : '';

    if(hash.includes('?')) {
      let array = hash.split('?');
      const name = array[0];
      const page = array[1].split('=')[1];

      return {name, params: {page}};
    }

    let [name, id, season, seasonNumber] = hash.split('/');
    if(season) {
      name = season;
    };
    return { name, params: { id, seasonNumber } };
}

function handleHash() {
    const { name, params } = getRouteInfo();
    if (name) {

        const routeName = name + 'Route';
        Controller[routeName](params);
    }
}

export default {
    init() {
        addEventListener('hashchange', handleHash);
        handleHash();
    }
}
