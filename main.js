
const movies = [
    { name: "The Shawshank Redemption", rating: 9.3 },
    { name: "The Dark Knight", rating: 9.0 },
    { name: "Inception", rating: 8.8 },
    { name: "Interstellar", rating: 8.6 },
    { name: "The Matrix", rating: 8.7 },
    { name: "Avengers: Endgame", rating: 8.4 },
    { name: "Titanic", rating: 7.8 }
];


function displayMovies(moviesList) {
    const movieListElement = document.getElementById("movieList");
    movieListElement.innerHTML = '';

    moviesList.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add('movie');
        li.textContent = `${movie.name} (Rating: ${movie.rating})`;
        movieListElement.appendChild(li);
    });
}


displayMovies(movies);


function filterMovies() {
    const input = document.getElementById("movieInput").value.toLowerCase();

    const filteredMovies = movies.filter(movie => 
        movie.name.toLowerCase().includes(input)
    );

   
    displayMovies(filteredMovies);
}







let selektFunction =()=>{
    let select =document.querySelector('#item').value
    let sortedmovis = [...movies]
    switch(select){
        case "name":
            sortedmovis.sort((a,b)=> a.name.localeCompare(b.name))
            break;
        
            case "name2":
                sortedmovis.sort((a,b)=> b.name.localeCompare(a.name))
            break;
            case "rating":
                sortedmovis.sort((a,b)=>a.rating - b.rating)
                break;
                case 'new':
                    sortedmovis.sort((a,b)=>a.year - b.year)
                    break;
                    case 'old':
                    sortedmovis.sort((a,b)=>b.year - b.year)
    }
   
    displayMovies(sortedmovis)
}
displayMovies(movies)