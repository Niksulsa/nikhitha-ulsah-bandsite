const COMMENT_API_KEY='19bae5af-4d3c-4333-9094-bbc989d30d89'
const COMMENT_API_URL='https://project-1-api.herokuapp.com/comments'
const formContainer= document.getElementById("add-comment");


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



function getInfo(){
    return axios.get(`${COMMENT_API_URL}?api_key=${COMMENT_API_KEY}`)
    .then(response=>{
        console.log(response.data);
        const newComments=response.data.sort(function(a,b){
            return b.timestamp-a.timestamp;
        });
        newComments.forEach(response=>{
            generateHtml(response.name,response.comment,response.timestamp)
        })
   }).catch(err=>{
        console.log(err)
    })
    
} 
getInfo();
 
function posting(comment){
    return axios.post(`${COMMENT_API_URL}?api_key=${COMMENT_API_KEY}`,comment)
    .then(response=>{
        console.log(response);   
    })
    .catch(err=>{
        console.log(err)
    })
}


formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    const comment={
        name:event.target.name.value,
        comment:event.target.comment.value
    }
    const commentBox=document.getElementById("commentSection")
    commentBox.innerHTML=""
    posting(comment).then(()=>getInfo())  
   formContainer.reset();
})


let postDate = Date.now();
postDate = new Date(postDate);
postDate = (postDate .getMonth()+1)+'/'+postDate .getDate()+'/'+postDate .getFullYear();
console.log(postDate);
