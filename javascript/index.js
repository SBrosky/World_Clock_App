function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityBlockElement = document.querySelector("#city");
    cityBlockElement.innerHTML = `
  <div class="city"> 
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time"> ${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
    </div>
    <a href="/">Back to City List </a>
  `;
  }, 1000);
}

setInterval(function () {
  // Jakarta

  let jakartaElement = document.querySelector("#jakarta");
  if (jakartaElement) {
    let jakartaTime = jakartaElement.querySelector(".time");
    let jakartaDate = jakartaElement.querySelector(".date");
    let jakartaCurrentTime = moment().tz("Asia/Jakarta");
    jakartaDate.innerHTML = jakartaCurrentTime.format("MMMM Do, YYYY");
    jakartaTime.innerHTML = jakartaCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Auckland

  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandTime = aucklandElement.querySelector(".time");
    let aucklandDate = aucklandElement.querySelector(".date");
    let aucklandCurrentTime = moment().tz("Pacific/Auckland");
    aucklandDate.innerHTML = aucklandCurrentTime.format("MMMM Do, YYYY");
    aucklandTime.innerHTML = aucklandCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // vancouver

  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverTime = vancouverElement.querySelector(".time");
    let vancouverDate = vancouverElement.querySelector(".date");
    let vancouverCurrentTime = moment().tz("America/Vancouver");
    vancouverDate.innerHTML = vancouverCurrentTime.format("MMMM Do, YYYY");
    vancouverTime.innerHTML = vancouverCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}, 1000);

let selectCityElement = document.querySelector("#select-City");
selectCityElement.addEventListener("change", updateCity);
