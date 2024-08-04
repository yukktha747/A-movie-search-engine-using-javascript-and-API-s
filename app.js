let title = document.getElementById("title");  
let actors = document.getElementById("actors");  
let direc = document.getElementById("director");  
let box = document.getElementById("box_office");  
let descp = document.getElementById("description");  
let awards = document.getElementById("awards");  
let writer = document.getElementById("writer");  
let pos = document.getElementById("poster");  
let api = "http://www.omdbapi.com/?apikey=63490cb5";  

function moviename() {  
    let movie = document.getElementById("name").value;  
    let query = api + "&t=" + encodeURIComponent(movie); 

    fetch(query)  
        .then((response) => {  
            return response.json();  
        })  
        .then((data) => {  
            if (data.Response === "True") {  
                title.innerText = data.Title;  
                actors.innerText = data.Actors;   
                direc.innerText = data.Director;   
                box.innerText = data.BoxOffice;
                descp.innerText = data.Plot;   
                awards.innerText = data.Awards;   
                writer.innerText = data.Writer;   
                pos.src = data.Poster;
            } 
        })  
       
}
