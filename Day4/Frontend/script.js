const form = document.getElementById("blogForm");

const title = document.getElementById("title");

const email = document.getElementById("email");

const content = document.getElementById("content");

const message = document.getElementById("message");



form.addEventListener("submit", function (event) {

    event.preventDefault();



    if (title.value.trim() == "") {

        message.innerHTML = "Please enter blog title";
        message.style.color = "red";
        return;

    }



    if (email.value.trim() == "") {

        message.innerHTML = "Please enter email";
        message.style.color = "red";
        return;

    }



    if (content.value.trim() == "") {

        message.innerHTML = "Please enter blog content";
        message.style.color = "red";
        return;

    }



    message.innerHTML = "Blog added successfully!";
    message.style.color = "green";


    form.reset();


});



title.addEventListener("focus", function () {

    title.style.border = "2px solid blue";

});


content.addEventListener("focus", function () {

    content.style.border = "2px solid blue";

});