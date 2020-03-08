export let movies = [
    {
        id: 1,
        name: 'teemo',
        score: 10
    },
    {
        id: 2,
        name: 'john',
        score: 20
    },
    {
        id: 3,
        name: 'smith',
        score: 30
    },
    {
        id: 4,
        name: 'rinda',
        score: 10
    },
    {
        id: 5,
        name: 'prada',
        score: 15
    }
];

export const getById = id => movies.filter(movie => id === movie.id)[0];

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};

export const deleteMovie = id => {
    const cleandMovies = movies.filter(movie => id !== movie.id);
    if (cleandMovies.length < movies.length) {
        movies = cleandMovies;
        return true;
    }
    return false;
};
