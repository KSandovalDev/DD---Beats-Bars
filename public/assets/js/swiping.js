window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("skip").addEventListener("click",swipeLeft)
    document.getElementById("play").addEventListener("click",swipeRight)
    console.log('DOM fully loaded and parsed');
});
console.log("LOADING!")

function swipeLeft() {
    console.log("WORKING!")
    document.querySelector(".stageProfileSwiping:last-child").classList.add("swipedLeft")
    let lastProfile = document.querySelector(".stageProfileSwiping:last-child");
    lastProfile.ontransitionend = function(event) {
        lastProfile.parentNode.removeChild(lastProfile);
        // document.querySelector(".stageProfile:last-child").classList.remove("hidden")
      }

}

function swipeRight() {
    console.log("WORKING222!")
    // document.querySelector(".stageProfileSwiping:last-child form").submit()
    let username = document.querySelector(".stageProfileSwiping:last-child form input").value
    console.log("swiped right on", username)
    fetch('/likeUser', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'userEmail':username,
        })
      })
    document.querySelector(".stageProfileSwiping:last-child").classList.add("swipedRight");
    let lastProfile = document.querySelector(".stageProfileSwiping:last-child");
    lastProfile.ontransitionend = function(event) {
        lastProfile.parentNode.removeChild(lastProfile);
      }  
}


// document.getElementById("play").addEventListener("click",likeUser)

// function likeUser(){
//     userEmail = document.getElementById("userEmail").value
//     console.log(userEmail)
// }



// window.addEventListener('DOMContentLoaded', (event) => {

//     var LikeBtn = [...document.querySelectorAll(".play")]
//     LikeBtn.forEach(element =>{
//     element.addEventListener("click", ()=>{
//            const userEmail = this.parentNode.childNodes[0]
//     })})
    


// });