// base url: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// api url: http:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// reverse geocoding: http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}

const apiKey = "ba631b0fcafe6d370e7504259237a4dd";
let cityEl = $('input[name="form-control"]');
let goButtonEl = $(".go-btn");
/* let lat = ;
let lon = ; */
let apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=80.5&lon=82&appid=${apiKey}`;

console.log(cityEl);
console.log(goButtonEl);

function getApi() {
  fetch(apiUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi();

// function that handles the form submit function after clicking the "go" button
goButtonEl.each(function () {
  $(this).on("click", handleFormSubmit);
});

// function that handles the user input in the search form
function handleFormSubmit(event) {
  // prevents default behavior
  event.preventDefault();
  console.log($(this));
  let searchForm = $(this).siblings(".form-control");
  console.log(searchForm);
  let searchedCity = searchForm.val();
  console.log(searchedCity);
  let recentlySearchedCityDiv = $("#recently-searched-city");
  console.log(recentlySearchedCityDiv);
  localStorage.setItem("recent-city", searchedCity);
  $("#recently-searched-city").val(localStorage.getItem("recent-city"));
  document.querySelector("#recently-searched-city").innerHTML =
    '<button class="city-button">' + searchedCity + "</button>";
  // calls function to display the right hand column
  displayColumnRight();
}

// function to show right column with weather data
function displayColumnRight() {
  document.getElementById("hidden").style.display = "block";
}

function displayWeather(event) {
  event.preventDefault();
}
// TODO: connect search bar input to API so when i type in a city, the latitude and longitude of that city correlates somehow and retrieves data?

// TODO: 1 fetch on city location information (coordinates). console log a lot!!! .value

// TODO:
