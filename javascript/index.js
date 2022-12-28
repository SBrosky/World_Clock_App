setInterval(function () {
  // Jakarta

  let jakartaElement = document.querySelector("#jakarta");
  let jakartaTime = jakartaElement.querySelector(".time");
  let jakartaDate = jakartaElement.querySelector(".date");
  let jakartaCurrentTime = moment().tz("Asia/Jakarta");
  jakartaDate.innerHTML = jakartaCurrentTime.format("MMMM Do, YYYY");
  jakartaTime.innerHTML = jakartaCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Auckland

  let aucklandElement = document.querySelector("#auckland");
  let aucklandTime = aucklandElement.querySelector(".time");
  let aucklandDate = aucklandElement.querySelector(".date");
  let aucklandCurrentTime = moment().tz("Pacific/Auckland");
  aucklandDate.innerHTML = aucklandCurrentTime.format("MMMM Do, YYYY");
  aucklandTime.innerHTML = aucklandCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // bangkok

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokTime = bangkokElement.querySelector(".time");
  let bangkokDate = bangkokElement.querySelector(".date");
  let bangkokCurrentTime = moment().tz("Asia/Bangkok");
  bangkokDate.innerHTML = bangkokCurrentTime.format("MMMM Do, YYYY");
  bangkokTime.innerHTML = bangkokCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // vancouver

  let vancouverElement = document.querySelector("#vancouver");
  let vancouverTime = vancouverElement.querySelector(".time");
  let vancouverDate = vancouverElement.querySelector(".date");
  let vancouverCurrentTime = moment().tz("America/pacific");
  vancouverDate.innerHTML = vancouverCurrentTime.format("MMMM Do, YYYY");
  vancouverTime.innerHTML = vancouverCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);
