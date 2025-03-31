const dailyBtn = document.querySelector('.daily-btn');
const weeklyBtn = document.querySelector('.weekly-btn');
const monthlyBtn = document.querySelector('.monthly-btn');
const currentHrs = document.querySelector('.current-hrs');
const previousHrs = document.querySelector('.previous-hrs');

let jsonData = [];
fetch('data.json')
    .then((response) => {
        if (!response.ok) throw new Error('Data was not fetched')
        //return console.log('Data was not fetched');
        return response.json();
    })
    .then((data) => {
        json = data;
        //console.log(json[0]);
        updateUI('daily'); //update daily data UI
    })
    .catch(error => console.log(error));

function updateUI(timeframe) {
    jsonData.forEach((item, index) => {
        currentHrs[index].textContent = `Current - ${item.timeframes[timeframe].current} hours`;
        previousHrs[index].textContent = `Last week - ${item.timeframes[timeframe].previous} hours`
    })
}

dailyBtn.addEventListener('click', () => updateUI('daily'));
weeklyBtn.addEventListener('click', () => updateUI('weekly'));
monthlyBtn.addEventListener('click', () => updateUI('monthly'));