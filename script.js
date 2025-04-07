const dailyLink = document.querySelector('.daily-link');
const weeklyLink = document.querySelector('.weekly-link');
const monthlyLink = document.querySelector('.monthly-link');
const allCurrentHrs = document.querySelectorAll('.current-hrs');
const allPreviousHrs = document.querySelectorAll('.previous-hrs');
const links = [dailyLink, weeklyLink, monthlyLink];

//Grab the data from Json
let jsonData = [];
fetch('data.json')
    .then((response) => {
        if (!response.ok) throw new Error('Data was not fetched')
        //return console.log('Data was not fetched');
        return response.json();
    })
    .then((data) => {
        jsonData = data
        //console.log(jsonData);
        updateUI('daily'); //Display daily data by default
        setActiveLink(dailyLink); //highlight default active link
    })
    .catch(error => console.log(error));

//Update UI
function updateUI(hours) {
    if (!jsonData.length) return;

    jsonData.forEach((item, index) => {
        allCurrentHrs[index].textContent =
            `${item.timeframes[hours].current} Hrs`;
        allPreviousHrs[index].textContent =
            `Last week - ${item.timeframes[hours].previous} Hrs`
    })
}

function setActiveLink(activeLink) {
    links.forEach(link => link.classList.remove('selected-link'));

    activeLink.classList.add('selected-link');
}

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        let hours;
        if (link === dailyLink) {
            hours = 'daily';
        } else if (link === weeklyLink) {
            hours = 'weekly';
        } else if (link === monthlyLink) {
            hours = 'monthly';
        }
        updateUI(hours);
        setActiveLink(link)
    })
})

//Adding event listener to btns
// dailyBtn.addEventListener('click', () => updateUI('daily'));
// weeklyBtn.addEventListener('click', () => updateUI('weekly'));
// monthlyBtn.addEventListener('click', () => updateUI('monthly'));

//adding eventlistener to a element links
// [dailyLink, weeklyLink, monthlyLink].forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//         updateUI(link.classList.contains('daily-link') ? 'daily' :
//                  link.classList.contains('weekly-link') ? 'weekly' : 'monthly');
//     });
// });

