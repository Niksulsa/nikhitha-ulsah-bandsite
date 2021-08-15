const COMMENT_API_KEY='f5a82e91-3035-493b-b3d5-824fa1812f2c'
const COMMENT_API_URL='https://project-1-api.herokuapp.com/comments'
const formContainer= document.getElementById("add-comment");


 const myComments = 
 axios.get(`${COMMENT_API_URL}?api_key=${COMMENT_API_KEY}`)
    .then(response => {
    console.log(response.data);
    const oldComments=response.data;
    oldComments.forEach(article=>{
        generateHtml(article.name,article.comment,article.timestamp);
        })

    })
    .catch(err=>{
        console.log(err);

    })

const posting= (event=>{
    axios.post(`${COMMENT_API_URL}?api_key=${COMMENT_API_KEY}`,{
    name:event.name,
    comment:event.comment,

    })
    .then(addComments=>{
        const commentData=addComment.data;

        commentData.forEach(commentItem=>{
            generateHtml(commentItem.name,commentItem.comment,commentItem.postDate)
        })

    })
})

formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    generateHtml(event.target.name.value,event.target.comment.value);
    const clear= document.getElementById("add-comment").reset();

})



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