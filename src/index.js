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
updateTime();
setInterval(updateTime, 1000);
