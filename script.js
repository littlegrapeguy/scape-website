const countDownDate = new Date("Jul 24, 2021 10:00:00 PDT").getTime();

function update() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("countdown").innerHTML =
    "<b>" + hours + " hours</b> until launch";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
    document.getElementById("chrome").setAttribute("href", "https://chrome.google.com/webstore/detail/scape/dkldckkbeofieloldnockglgblnfhinj")
    document.getElementById("firefox").setAttribute("href", "https://addons.mozilla.org/en-US/firefox/addon/scapenewtab/")    
  }
}

update();

const x = setInterval(function() {
  update();
}, 10000);
