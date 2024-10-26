
document.addEventListener("DOMContentLoaded", function() {
    let btn=document.querySelector(".vote-btn");

    btn.addEventListener("click", () => {
    if(canVote){
        window.location.href="/html/voting.html";
    }else{
        alert("You have already voted!");
    }
}   
);});
