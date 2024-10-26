let voted=document.querySelectorAll("input");
let vote_btn=document.querySelector(".submit-btn");


let check= () => {
    if(!canVote){
        window.location.href="/html/home.html";
    }
};

check();

voted.forEach(item => {
    item.addEventListener('click',() =>{
    if(item.checked){
        console.log(item.getAttribute("id"));
        isVoted=true;
        votedID = parseInt(item.getAttribute("id"),10);  
    }});
});

vote_btn.addEventListener("click", () => {
    if(isVoted){
        if(canVote){
            console.log("voting successful");
            alert("You have successfully Voted");
            canVote=false;
            check();
            console.log(votedID);
        }
        else{
            alert("You have already casted your vote!")
        }
    } else {
        alert("Please vote before submitting.");
}
}
);