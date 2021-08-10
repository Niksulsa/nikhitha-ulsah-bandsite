const addForm= document.getElementById('add-comment');
const addComment=document.getElementById('commentSection')
let commentBox=[
    {
        name:'Connor Walton',
        comment:'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
        date:"12/2/2012"

    },
    {
        name:'Emilie Beach',
        comment:'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
        date:"12/6/2010"

    },
    {
        name:'Miles Acosta',
        comment:'I cant stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Cant get enough.',
        date:"12/2/2009"

    }
]; 
console.log(commentBox);

let commentList = document.createElement('ul');
    commentList.classList.add('comment__list');
    commentSection.appendChild(commentList);

commentBox.forEach(element => {
    generateHtml(element.name,element.comment,element.date);
  });


addForm.addEventListener("submit", (event) => {
event.preventDefault();
generateHtml(event.target.name.value,event.target.comment.value,postDate);
   
function displayComment(){
    let newComment={
    name:event.target.name.value,
    comment:event.target.comment.value
    };
    commentBox.unshift(newComment);
    console.log(newComment);
    console.log(commentBox)}
    displayComment();
 
function clearandShow(){  
  const clear= document.getElementById("add-comment").reset();
}
clearandShow();
});

function generateHtml(name, comment,date){
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

    const timeStamp=document.createElement('span');
    timeStamp.classList.add('comment__date');
    timeStamp.innerText=date;
    nameTime.appendChild(timeStamp);

    const commentPara=document.createElement('div');
    commentPara.classList.add('comment__innerBox');
    commentDiv.appendChild(commentPara);

    
    const commentVal=document.createElement('p');
    commentVal.classList.add('comment__input');
    commentVal.innerText=comment;
    commentPara.appendChild(commentVal);


}

let postDate = Date.now();
postDate = new Date(postDate);
postDate = (postDate .getMonth()+1)+'/'+postDate .getDate()+'/'+postDate .getFullYear();

console.log(postDate);



    
    /*let newComment = document.getElementById("commentSection");
    newComment.innerText=commentBox.name.value + commentBox.comment.value;
    commentBox.push(newComment);
    return newComment;

    //const nameVal = event.target.name.value;  
    //const commentVal= event.target.comment.value;
    //const commentData=commentBox[i].value;
    //commentBox.push();


    //clearAndShow();
    //console.log(addComment);

}*/

