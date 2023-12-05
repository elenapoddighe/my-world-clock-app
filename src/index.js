function updateTime() {
  let losAngelesElement = document.querySelector("#city-1");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = `🗓️ ${losAngelesTime.format(
    "MMMM Do YYYY"
  )}`;
  losAngelesTimeElement.innerHTML = `🕰️ ${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let sydneyElement = document.querySelector("#city-2");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = `🗓️ ${sydneyTime.format("MMMM Do YYYY")}`;
  sydneyTimeElement.innerHTML = `🕰️ ${sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
            <div class="city">
            <div class="time">🕰️ ${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small>
                </div>
                <h2>${cityName}</h2>
                <div class="date">🗓️ ${cityTime.format("MMMM Do YYYY")}</div>
                
            </div>
            <a href="index.html" class="link-back"> 🔙 to all cities </a>
            `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
