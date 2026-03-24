/** JavaScript : Show Thank You message for contact form 
 * We have a contact form with a submit button
 * normally, we click submit and the form sends instantly
 * but this code chnages the behaviour to:
 * when the user clicks submit, 
 * show a messsage first, wait 2 seconds, then send the form.
*/

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

/**
 * Explanation
 * 1. Find the form and listen for submit
 *    document.getElementById("contactForm").addEventListener("submit", function(e)
 *    Means: Find the form with ID 'contactForm' and watch for when someone clicks submit.
 *    Like: Hey, form, tell me when someone pressses the button.
 * 
 * 2. Stop the normal behaviour 
 *    e.preventDefault();
 *    Means: STOP! Don't submit the form yet.
 *    Normally the form would send immediately, but we pause it.
 * 
 * 3. Show a hidden message
 *    document.getElementById("hiddenMsg").style.display = "block";
 *    Means: show a message that was hidden before
 *    Example: Thanks! Your form is being submitted. 
 *    For this form we have only said Thank You.
 * 
 * 4. Hide the form
 *    document.getElementById("formDiv").style.display = "none";
 *    Means: Hide the form so the user doesn't see it anymore.
 *    So Form disappears and Message appears
 * 
 * 5. Wait 2 seconds
 *    setTimeout(function() 
 *    Means: Wait a little bit before doing the next step.
 * 
 * 6. Submit the form now
 *     e.target.submit();
 *     Means: Now, send the form
 *     e.target = the form itself
 *     .submit() = send it
 * 
 * 7. The Delay time
 *    2000);
 *    2000 = 2000 milliseconds = 2 seconds
 * 
 * The User experience:
 * 1. Click Submit
 * 2. Form disappears
 * 3. Message appears ("Thank You") or you can even say ("Sending")
 * 4. After 2 seconds, form is submitted.
 *  
 * Our code: when someone clicks submit, 
 *           pause it, show a message, wait 2 seconds, 
 *           then send it.
 * 
 */

// document.getElementById("contactForm").addEventListener("submit", function(e) {
//     e.preventDefault(); 

//     document.getElementById("hiddenMsg").style.display = "block";
//     document.getElementById("formDiv").style.display = "none";

//     setTimeout(function() {
//         e.target.submit(); 
//     }, 2000);
// });