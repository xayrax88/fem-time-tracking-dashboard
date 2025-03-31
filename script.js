const dailyBtn = document.querySelector('.daily-btn');
const weeklyBtn = document.querySelector('.weekly-btn');
const monthlyBtn = document.querySelector('.monthly-btn');
const currentHrs = document.querySelector('.current-hrs');
const previousHrs = document.querySelector('.previous-hrs');

fetch('/data.json').then((response) => {
    if (!response.ok) return console.log('Data was not fetched');

    return response.json();
}).then((data) => {
    console.log(data);
})


// dailyBtn.addEventListener('click', () => {

// })