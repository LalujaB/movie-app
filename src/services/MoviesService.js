import HTTP from './BaseService';

class MoviesService {
    async getMovies(){
        const response = await HTTP.get('/movies');
        return response.data;
    }
}

const moviesService = new MoviesService();

export default moviesService;