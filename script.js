document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');


    /*This allows you to type in the differnt boxes*/
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const mail = document.getElementById('mail').value;
        const comment = document.getElementById('comment').value;


        /*If the user dosent fill all the boxes this comment will appear*/
        if (name.trim() === '' || mail.trim() === '' || comment.trim() === '') {
            alert('Must fill all boxes');
            return;
        }


        /*This is for when you submit the contact form it will give you the comment. */
        alert('Submittion Complete!');
        contactForm.reset();
    });
});
