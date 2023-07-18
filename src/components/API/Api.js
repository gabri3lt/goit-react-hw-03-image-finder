import { API_KEY, BASE_API_URL } from './Apiservice';

export const fetchMovies = (searchQuery, cerrentPage, language) => {
  return fetch(
    `${BASE_API_URL}?q=${searchQuery}&lang=${language}&page=${cerrentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=9`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Word ${this.state.searchImage} is not exist`)
    );
  });
};
