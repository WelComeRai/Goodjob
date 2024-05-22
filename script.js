let [s, m, h] = [0, 0, 0];
let showData = document.querySelector("#showData");
let timeZone = 0;
function watchStarting() {
  timeZone = setInterval(stayWatch, 1000);
}

function stayWatch() {
  s++;
  if (s == 60) {
    s = 0;
    m++;
    if (m == 60) {
      m = 0;
      h++;
    }
  }
  let h1 = h < 10 ? "0" + h : h;
  let m1 = m < 10 ? "0" + m : m;
  let s1 = s < 10 ? "0" + s : s;
  showData.innerHTML = h1 + ":" + m1 + ":" + s1;
}

function retartData() {
  clearInterval(timeZone);
}
function clearData() {
  [s, m, h] = [0, 0, 0];
  showData.innerHTML = "00:00:00";
}
