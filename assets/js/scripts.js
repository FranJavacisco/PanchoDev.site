/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
        });

        if (response.ok) {
            document.getElementById("submitSuccessMessage").classList.remove("d-none");
            form.reset();
        } else {
            document.getElementById("submitErrorMessage").classList.remove("d-none");
        }
    } catch (error) {
        document.getElementById("submitErrorMessage").classList.remove("d-none");
    }
});
