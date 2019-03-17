// getting references
let fm = document.querySelector("form");
let fn = document.getElementById("fullname");
let em = document.getElementById("email");
let msg = document.getElementById("message");
// do the same for email


// event target object
let btn = document.getElementById("collect");

// event handler
function validateForm() {

    console.clear();
    // console.log("Click event handled!");

    let collectedData = {};
    let errors = [];

    // validater the fullname
    if (fn.value !== "") {
        collectedData.fname = fn.value;
    } else {
        errors.push("Full name is missing");
    }


    // validate your email

    if (em.value !== "") {
        collectedData.email = em.value;
    } else {
        errors.push("Email is missing");
    }

    if (msg.value !== "") {
        collectedData.message = msg.value;
    } else {
        errors.push("Message is missing");
    }

    // create the feedback if there is no errors
    if (errors.length === 0) {
        console.log(collectedData);
        fm.reset();
    } else {
        // print the error messages
        console.log(errors);
    }



}

btn.addEventListener("click", validateForm);