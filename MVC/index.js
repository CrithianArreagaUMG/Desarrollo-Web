const movies = [
    {
        title: "Matrix",
        director: "Lana Wachowski",
        year: 1999,
        image: "https://es.web.img3.acsta.net/medias/nmedia/18/72/16/76/20065616.jpg",
        trailer: "https://www.youtube.com/embed/OM0tSTEQCQA?si=VzAnQNzoidWLFgQZ",
    },
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        image: "https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF1000,1000_QL80_.jpg",
        trailer: "https://www.youtube.com/embed/cSWC2Xr42-w?si=TncOVWn8mN_CLZPe",
    },
    {
        title: "Jurassic Park",
        director: "Steven Spielberg",
        year: 1993,
        image: "https://insighteditions.com/cdn/shop/products/78628-99522-cover_2048x2048.jpg?v=1636052417",
        trailer: "https://www.youtube.com/embed/dLDkNge_AhE?si=vyX55pg9A8E15Zyx",
    },
    {
        title: "The Redemption of Shawshank",
        director: "Frank Darabont",
        year: 1994,
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/NmzuHjWmXOc?si=QDESDQ2eA-Zo69gO",
    },
    {
        title: "E.T. the Extraterrestrial",
        director: "Steven Spielberg",
        year: 1982,
        image: "https://m.media-amazon.com/images/I/71GfmB1jatL._AC_UF1000,1000_QL80_.jpg",
        trailer: "https://www.youtube.com/embed/qYAETtIIClk?si=1r_EPndDPVQYj8LB",
    },
];

function renderMovies(movieList) {
    const movieListContainer = document.getElementById("movie-list");
    movieListContainer.innerHTML = `
        <div class="action-buttons">
            <h1>Películas</h1>
            <button onclick="addNewMovie()"><i class='bx bx-plus'></i> Agregar</button>
            <button onclick="refrescarPagina()"><i class='bx bx-sync'></i> Refrescar</button>
        </div>
        <hr>
        <div class="movie-list">
            ${movieList.map((movie, index) => `
                <div class="movie-card">
                    <img src="${movie.image}" alt="${movie.title}" width="200">
                    <h3>${movie.title}</h3>
                    <div class="button-row">
                        <button onclick="playVideo(${index})"><i class='bx bx-play'></i> Ver</button>
                        <button onclick="editDetails(${index})"><i class='bx bx-edit-alt' ></i> Editar</button>
                        <button onclick="deleteMovie(${index})"><i class='bx bx-x-circle'></i> Borrar</button>
                    </div>
                </div>
            `).join('')}
        </div>
        `;
}

function playVideo(index) {
    const movie = movies[index];
    const movieListContainer = document.getElementById("movie-list");
    movieListContainer.innerHTML = `
        <h3>${movie.title}</h3>
        <div class="video-container">
            <iframe width="560px" height="315px" src="${movie.trailer}" class="video-player" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
        <div class="back-button">
            <button onclick="indexView()"><i class='bx bx-left-arrow-alt'></i> Atrás</button>
        </div>`;
}

function editDetails(index) {
    const movie = movies[index];
    const movieListContainer = document.getElementById("movie-list");
    movieListContainer.innerHTML = `
        <div class="edit-form">
            <h3>Actualizar detalles</h3>
                Título <input type="text" id="editTitle" value="${movie.title}">
                Director <input type="text" id="editDirector" value="${movie.director}">
                Año <input type="text" id="editYear" value="${movie.year}">
                Portada <input type="url" id="editImage" value="${movie.image}">
                TrailerVideo <input type="url" id="editTrailer" value="${movie.trailer}">
                <button onclick="saveEdit(${index})"><i class='bx bx-archive-in'></i> Guardar</button>
                <button onclick="indexView()"><i class='bx bx-x'></i> Cancelar</button>
        </div>`;
}


function addNewMovie() {
    const movieListContainer = document.getElementById("movie-list");
    movieListContainer.innerHTML = `
        <div class="new-movie-form">
            <h3>Añadir una película</h3>
                Título <input type="text" id="newTitle">
                Director <input type="text" id="newDirector">
                Año <input type="text" id="newYear">
                Portada <input type="text" id="newImage">
                TrailerVideo <input type="text" id="newTrailer">
                <button onclick="saveNewMovie()"><i class='bx bx-plus' ></i> Añadir</button>
                <button onclick="indexView()"><i class='bx bx-x' ></i> Cancelar</button>
        </div>`;
}

function refrescarPagina() {
    location.reload();
}

function saveEdit(index) {
    movies[index].title = document.getElementById("editTitle").value;
    movies[index].director = document.getElementById("editDirector").value;
    movies[index].year = document.getElementById("editYear").value;
    movies[index].image = document.getElementById("editImage").value;
    movies[index].trailer = document.getElementById("editTrailer").value;
    indexView();
}

function saveNewMovie() {
    const newTitle = document.getElementById("newTitle").value;
    const newDirector = document.getElementById("newDirector").value;
    const newYear = document.getElementById("newYear").value;
    const newImage = document.getElementById("newImage").value;
    const newTrailer = document.getElementById("newTrailer").value;
    
    movies.push({
        title: newTitle,
        director: newDirector,
        year: newYear,
        image: newImage,
        trailer: newTrailer,
    });
    indexView();
}

function deleteMovie(index) {
    movies.splice(index, 1);
    indexView();
}

function indexView() {
    renderMovies(movies);
}

document.addEventListener("DOMContentLoaded", () => indexView());
