const dailyBtn = document.querySelector('.daily-btn');
const weeklyBtn = document.querySelector('.weekly-btn');
const monthlyBtn = document.querySelector('.monthly-btn');
const allCurrentHrs = document.querySelectorAll('.current-hrs');
const allPreviousHrs = document.querySelectorAll('.previous-hrs');

let jsonData = [];
fetch('data.json')
    .then((response) => {
        if (!response.ok) throw new Error('Data was not fetched')
        //return console.log('Data was not fetched');
        return response.json();
    })
    .then((data) => {
        jsonData = data
        //console.log(jsonData[0]);
        updateUI('daily'); //Display daily data by default
    })
    .catch(error => console.log(error));

function updateUI(timeframe) {
    jsonData.forEach((item, index) => {
        allCurrentHrs[index].textContent = `${item.timeframes[timeframe].current} Hrs`;
        allPreviousHrs[index].textContent = `Last week - ${item.timeframes[timeframe].previous} Hrs`
    })
}

dailyBtn.addEventListener('click', () => updateUI('daily'));
weeklyBtn.addEventListener('click', () => updateUI('weekly'));
monthlyBtn.addEventListener('click', () => updateUI('monthly'));