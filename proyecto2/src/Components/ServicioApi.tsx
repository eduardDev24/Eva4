const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '0654f5f314454cf47a7ec04075d28dbd'; // API key de TMDB

export const getMovies = async () => {
  try {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}&language=es-ES`);
    if (!response.ok) {
      throw new Error('No hay respuesta de la Red');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al recuperar peliculas', error);
    throw error;
  }
};

