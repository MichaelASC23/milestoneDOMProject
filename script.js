function openNav() {
    document.getElementById("myNav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

// Reference 
let home = document.getElementById("homeID");
let rec = document.getElementById("rec");
let log = document.getElementById("logID");

// Click function
home.onclick = function() {
    location.href = "index.html";
}
rec.onclick = function() {
    location.href = "recommend.html";
}
log.onclick = function() {
    location.href = "log.html";
}


//Log.html
let maintitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjInput = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let container = document.querySelector("form");
let paragraph = document.getElementById("story_result");


submitButton.onclick = function(event) {
    //Prevent button from reloading 
    // event.preventDefault is not working
    event.preventDefault();
    let userInput = titleInput.value;
    let nounPut = nounInput.value;
    let verbPut = verbInput.value;
    let adjectivePut = adjInput.value;
   
    // If the user has any field left blank, send an `alert()` informing the user to “Please fill in all fields”
    // This is not working
    if( userInput == ""|| nounPut == "" || verbPut == "" || adjectivePut == ""){
        alert("Please fill in all fields")
    }

    else {
        location.href = "race.html";
    }


}

