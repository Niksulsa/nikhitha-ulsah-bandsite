const SHOW_API_KEY="366ed076-4f44-4ac3-8a06-7c276220a3eb";
const SHOW_API_URL="https://project-1-api.herokuapp.com/showdates"
const showInfo=document.getElementById('show-info');
showInfo.classList.add('show__container');


const gettingShows=axios.get(`${SHOW_API_URL}?api_key=${SHOW_API_KEY}`)
    .then(response=>{
        console.log(response.data);
        const shows=response.data;
        shows.forEach(response=>{
        generateHtml(response.date,response.place,response.location);
        })

    }).catch(err=>{
        console.log(err);

})

const postingShows=axios.post(`${SHOW_API_URL}?api_key=${SHOW_API_KEY}`)
    .then(response=>{
        console.log(response);
    
})


function generateHtml(postDate,place,location){    

    const showBox = document.createElement('div');
    showBox.classList.add('show__box');
    showInfo.appendChild(showBox);

    const titleDate = document.createElement('h4');
    titleDate.classList.add('show__title');
    titleDate.innerText="DATES"
    showBox.appendChild(titleDate);

    //let postDate= new Date(date);
    //postDate= new Date(postDate.toDateString())
    //postDate= (postDate .getMonth()+1)+'/'+postDate .getDate()+'/'+postDate .getFullYear();
    //console.log(postDate);
    //let postDate=new Date.parseInt(date);
    let myDate = new Date(postDate*1000);
    console.log(myDate.toLocaleString());
    const showDate= document.createElement('p');
    showDate.classList.add('show__date');
    showDate.innerText=postDate;

    showBox.appendChild(showDate);

    const titleVenue = document.createElement('h4');
    titleVenue.classList.add('show__title');
    titleVenue.innerText="VENUE"
    showBox.appendChild(titleVenue);

    const showVenue=document.createElement('p');
    showVenue.classList.add('show__venue');
    showVenue.innerText=place;
    showBox.appendChild(showVenue);

    const titleLocation = document.createElement('h4');
    titleLocation.classList.add('show__title');
    titleLocation.innerText="LOCATION"
    showBox.appendChild(titleLocation);

    const showLocation=document.createElement('p');
    showLocation.classList.add('show__location');
    showLocation.innerText=location;
    showBox.appendChild(showLocation);

    let buyTickets=document.createElement('button');
    buyTickets.classList.add('show__button');
    buyTickets.innerText="BUY TICKETS";
    showBox.appendChild(buyTickets);

    buyTickets.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(showVenue.innerText,showLocation.innerText,)
    })

}


    