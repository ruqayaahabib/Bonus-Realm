const buttonElement = document.querySelector("#bell-button") //caching button element 
console.log(buttonElement)


const messageElement = document.querySelector("#royal-message") //caching message element 
console.log(messageElement)

function ring(){
    messageElement.textContent ="🔔 The Royal Bell is ringing! Codoria has been warned!" //change message

    /*
    BONUS:
    Change the button text to Bell Activated!
    Disable the button so it cannot be clicked again
    */
   buttonElement.textContent="Bell Activated!"
   buttonElement.disabled = true

}

buttonElement.addEventListener("click", ring) // passing the function to the event listener 


