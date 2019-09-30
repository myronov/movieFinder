export default {
    callApi(method, page = 1) {
        const key = '42992790ad34e7de98c9b4b6117a61ad';
        const url = `https://api.themoviedb.org/3${method}?api_key=${key}&language=en-US&page=${page}`;
        console.log(url);
        return new Promise((resolve, reject) => {

            let response = fetch(url);
            response.then(
              result => resolve(result.json()),
              error => reject(new Error(error))
            );
        });
    },
    getPopular(page) {
        return this.callApi('/tv/popular', page);
    },
    getTop(page) {
        return this.callApi('/tv/top_rated', page);
    },
    getFilm(params = {}) {
        return this.callApi(`/tv/${params}`);
    },
    getSeason(params = {}) {
        return this.callApi(`/tv/${params.id}/season/${params.seasonNumber}`);
    }
};
