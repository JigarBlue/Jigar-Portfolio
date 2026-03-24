/** JavaScript : Show Thank You message for contact form */

//add event listener to form which listens for submit event
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); //Prevents the default form submission to show thank you messsage.

    /*Display Thank you message
        Change the display style of Thank You message header to 'block'
        to make it visisble and hide the form.
    */
    document.getElementById("hiddenMsg").style.display = "block";
    document.getElementById("formDiv").style.display = "none";

    /*Simulate a delay before actual submission
        Use setTimeout to wait for 2 seconds before the form is submitted.
        It allows user to read thank you message.
    */
    setTimeout(function() {
        e.target.submit(); //now submit the form after thank you message
    }, 2000);
});