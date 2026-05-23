const universities = [

  {
    name: "Harvard University",
    country: "United States",
    ranking: "#4"
  },

  {
    name: "Oxford University",
    country: "United Kingdom",
    ranking: "#3"
  },

  {
    name: "University of Toronto",
    country: "Canada",
    ranking: "#21"
  },

  {
    name: "MIT",
    country: "United States",
    ranking: "#1"
  },

  {
    name: "Cambridge University",
    country: "United Kingdom",
    ranking: "#5"
  }

];

const universitiesContainer =
document.getElementById("universitiesContainer");

const searchInput =
document.getElementById("searchInput");

const countryFilter =
document.getElementById("countryFilter");

function displayUniversities(data){

  universitiesContainer.innerHTML = "";

  data.forEach((university)=>{

    universitiesContainer.innerHTML += `

      <div class="card">

        <h3>${university.name}</h3>

        <p>${university.country}</p>

        <p>QS Ranking: ${university.ranking}</p>

        <button
          onclick="window.location.href='university-details.html'">

          View Details

        </button>

      </div>

    `;

  });

}

displayUniversities(universities);

function filterUniversities(){

  const searchValue =
  searchInput.value.toLowerCase();

  const countryValue =
  countryFilter.value;

  const filtered =
  universities.filter((university)=>{

    const matchesSearch =
    university.name
    .toLowerCase()
    .includes(searchValue);

    const matchesCountry =
    countryValue === "" ||
    university.country === countryValue;

    return matchesSearch && matchesCountry;

  });

  displayUniversities(filtered);

}

searchInput.addEventListener(
  "input",
  filterUniversities
);

countryFilter.addEventListener(
  "change",
  filterUniversities
);