export const fetchTrendingMovies = async({ queryKey }) => {
    const [, page] = queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=1a0525b93e71ae4a85e33829e5132266&page=${page}}`
    );
    const data = await response.json();
    return data;
};