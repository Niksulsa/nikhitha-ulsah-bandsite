const COMMENT_API_KEY='6e0f8759-ad63-41ec-84aa-6e622c155e2a'
const COMMENT_API_URL='https://project-1-api.herokuapp.com/comments'
const formContainer= document.getElementById("add-comment");

function getInfo(){
    axios.get(`${COMMENT_API_URL}?api_key=${COMMENT_API_KEY}`)
    .then(response=>{
        console.log(response.data);
        const oldComments=response.data;
        oldComments.forEach(response=>{
            generateHtml(response.name,response.comment,response.timestamp)

        })
    }).catch(err=>{
        console.log(err)
    })
    
} 
getInfo();
 
function posting(event){
    axios.post(`${COMMENT_API_URL}?api_key=${COMMENT_API_KEY}`,{
    'name':event.target.name.value,
    'comment':event.target.comment.value

    })
    .then(response=>{
        getInfo(response);
        })

}

formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    generateHtml(event.target.name.value,event.target.comment.value,postDate);

   posting(event);
   const clear= document.getElementById("add-comment").reset(); 
})
let postDate = Date.now();
postDate = new Date(postDate);
postDate = (postDate .getMonth()+1)+'/'+postDate .getDate()+'/'+postDate .getFullYear();
console.log(postDate);


function generateHtml(name,comment,date){
    let commentList = document.createElement('ul');
    commentList.classList.add('comment__list');
    commentSection.appendChild(commentList);

    let itemEl=document.createElement('li');
    itemEl.classList.add('comment__item');
    commentList.appendChild(itemEl);

    let avatarBox=document.createElement('div');
    avatarBox.classList.add('comment__avatarbox');
    itemEl.appendChild(avatarBox);

        let avatar=document.createElement('div');
         avatar.classList.add('comment__avatar');
         avatarBox.appendChild(avatar);

    const commentDiv=document.createElement('div');
    commentDiv.classList.add('comment__box');
    itemEl.appendChild(commentDiv);

    const nameTime=document.createElement('div');
    nameTime.classList.add('comment__nametime');
    commentDiv.appendChild(nameTime);
    
    const userName=document.createElement('h4');
    userName.classList.add('comment__name');
    userName.innerText=name;
    nameTime.appendChild(userName);

    let postDate= new Date(date);
    postDate= (postDate .getMonth()+1)+'/'+postDate .getDate()+'/'+postDate .getFullYear();
    console.log(postDate);
    const timeStamp=document.createElement('span');
    timeStamp.classList.add('comment__date');
    timeStamp.innerText=postDate;
    nameTime.appendChild(timeStamp);

    const commentPara=document.createElement('div');
    commentPara.classList.add('comment__innerBox');
    commentDiv.appendChild(commentPara);

    
    const commentVal=document.createElement('p');
    commentVal.classList.add('comment__input');
    commentVal.innerText=comment;
    commentPara.appendChild(commentVal);



}