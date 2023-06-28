import axios from "axios";

export const getPopularMovies = async () =>{
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8bab6fb009a45a203252c92e2d45640d')
		const data = response.data
		return data
}

export const getNowPlayingMovies = async() =>{
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8bab6fb009a45a203252c92e2d45640d')
        const data = response.data
        return data
}

export const getSearchData = async () =>{
        const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/game?year=2010&endYear=2023&startYear=2010&titleType=movie&limit=10&list=most_pop_movies';
        const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '936bd9fe5fmshd6b04f3a8e8560ap1fbed9jsne6c834ad6ecb',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const results = await response.text()
	console.log(results);
        // return data
} catch (error) {
	console.error(error);
}
}

export const getAdvertiseData = async () =>{
	const response = await axios.get('https://api.unsplash.com/photos/?client_id=DAii1-WBYPZhRIkHoHQicqGkhCMcpJqJoSCEPF5uzQQ')
	const data = response.data
	return data
}

export const getUpcomingMovies = async () =>{
	const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8bab6fb009a45a203252c92e2d45640d')
	const data = response.data
	return data
}

export const getTopRatedMovies = async () =>{
	const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8bab6fb009a45a203252c92e2d45640d')
	const data = response.data
	return data
}

export const getLatestMovies =  async () =>{
	const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8bab6fb009a45a203252c92e2d45640d')
	const data = response.data
	return data
}