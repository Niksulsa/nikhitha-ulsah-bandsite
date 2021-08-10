const showInfo=document.getElementById('show-info');
showInfo.classList.add('show__container');

let shows=[
    {
        date:"Mon Sept 06 2021",
        venue:"Ronald Lane ",
        location:"San Francisco, CA"
    },
    {
        date:"Tue Sept 21 2021 ",
        venue:"Pier 3 East ",
        location:"San Francisco, CA"

    },

    {
        date:"Fri Oct 15 2021  ",
        venue:"View Lounge  ",
        location:"San Francisco, CA"
    },
    {
        date:"Sat Nov 06 2021",
        venue:"Hyatt Agency ",
        location:"San Francisco, CA"
    },
    {
        date:"Fri Nov 26 2021",
        venue:"Moscow Center ",
        location:"San Francisco, CA" 
    },
    {
        date:"Wed Dec 15 2021 ",
        venue:"Press Club ",
        location:"San Francisco, CA"    
    }
]
for(let i=0;i<shows.length;i++){
    const showData= shows[i];
    

    const showBox = document.createElement('div');
    showBox.classList.add('show__box');
    showInfo.appendChild(showBox);

    const titleDate = document.createElement('h4');
    titleDate.classList.add('show__title');
    titleDate.innerText="DATES"
    showBox.appendChild(titleDate);

    const showDate= document.createElement('p');
    showDate.classList.add('show__date');
    showDate.innerText=showData.date;
    showBox.appendChild(showDate);

    const titleVenue = document.createElement('h4');
    titleVenue.classList.add('show__title');
    titleVenue.innerText="VENUE"
    showBox.appendChild(titleVenue);

    const showVenue=document.createElement('p');
    showVenue.classList.add('show__venue');
    showVenue.innerText=showData.venue;
    showBox.appendChild(showVenue);

    const titleLocation = document.createElement('h4');
    titleLocation.classList.add('show__title');
    titleLocation.innerText="LOCATION"
    showBox.appendChild(titleLocation);

    const showLocation=document.createElement('p');
    showLocation.classList.add('show__location');
    showLocation.innerText=showData.location;
    showBox.appendChild(showLocation);

    let buyTickets=document.createElement('button');
    buyTickets.classList.add('show__button');
    buyTickets.innerText="BUY TICKETS";
    showBox.appendChild(buyTickets);

    buyTickets.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(shows[i].venue,shows[i].location)
    })

}

    