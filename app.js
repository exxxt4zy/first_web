const textHours = document.getElementById('hours'),
    textMinutes = document.getElementById('minutes')

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        mm = date.getMinutes()

    if (hh == 0) {hh = 12}
    if (hh < 10) {hh = `0${hh}`}
    if (mm < 10) {mm = `0${mm}`}
    textMinutes.innerHTML = mm
    textHours.innerHTML = `${hh}`
}
setInterval (clockText, 1000)

const btn = document.getElementById("btn-toggle");

btn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
});
