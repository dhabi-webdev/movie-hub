

const allMovies = [
  { image: "Avatar.jpeg", name: "Avatar", year: "year:2000" },
  { image: "Inception.jpeg", name: "Inception", year: "year:2000" },
  { image: "Interstallar.jpeg", name: "Interstellar", year: "year:2000" },
  { image: "The Batman.jpeg", name: "The Batman", year: "year:2000" },
  { image: "Titanic.jpeg", name: "Titanic", year: "year:2000" },
];

const section = document.getElementById("section");

function nameColor(b) {
  const mn = document.createElement("div");
  section.appendChild(mn);
  const h2 =document.createElement("h2");
  mn.appendChild(h2);
  mn.classList.add("moviehead")
  h2.classList.add("movieh2")
  const a = ["A","l","l"," ","M","o","v","i","e","s"];
  for (let i = 0; i < a.length; i++) {
    h2.innerHTML += a[i]; 
    console.log(a[i]);
    
  }
};

nameColor(section);

function display(movie, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  movie.forEach((m) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `<img src="image/${m.image}" alt="${m.name}">
         <p>${m.name}</p>
         <p>${m.year}</p>
        `;
    container.appendChild(card);
  });
}
display(allMovies, "movies");

const search = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
  const searchContent = search.value.toLowerCase().trim();
  const filteredMovies = allMovies.filter((fm) =>
    fm.name.toLowerCase().includes(searchContent),
  );
  if (filteredMovies.length > 0) {
    display(filteredMovies, "movies");
  } else {
    const container = document.getElementById("movies");
    container.innerHTML = "No movies found";
  }
});

const addBtn = document.getElementById("add");
const addBox = document.getElementById("addbox");

addBtn.addEventListener("click", function () {
  const addImage = document.createElement("input");
  const addName = document.createElement("input");
  const addYear = document.createElement("input");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "save";
  addImage.placeholder = "add image";
  addName.placeholder = "add movie name";
  addYear.placeholder = "add movie year";
  addBox.appendChild(addImage);
  addBox.appendChild(addName);
  addBox.appendChild(addYear);
  addBox.appendChild(saveBtn);
  saveBtn.addEventListener("click", function () {
    const inputImage = addImage.value.trim();
    const movieName = addName.value.trim();
    const movieYear = addYear.value.trim();
    allMovies.push({ image: inputImage, name: movieName, year: movieYear });
 display(allMovies,"movies");
 addBox.innerHTML = "";
  });
});
