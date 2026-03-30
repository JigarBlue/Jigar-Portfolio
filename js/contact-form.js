//Select main elements
const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you");
const errorMsg = document.querySelector(".error-message"); //new element for failure

//Select the submit input
const submitBtn = form.querySelector("input[type='submit']");

//All inout fields
const inputs = {
    name: document.querySelector('input[name="name"]'),
    email: document.querySelector('input[name="email"]'),
    phone: document.querySelector('input[name="phone"]'),
    message: document.querySelector('textarea[name="message"]'),
};

//Flag to enable validation after first submit attempt
let isValidationOn = false;

//Validation rules
const validators = {
    name: (value) => value.trim() !== "",
    email: (value) => /^[a-zA-Z0-9]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    // UK phone number (mobile + landline, flexible spacing)
    phone: (value) => /^(?:\+44|0)(?:\d\s?){9,10}$/.test(value),
    message: (value) => value.trim() !== "",
};

//Show validation error
const showError = (input) => {
    input.classList.add("invalid");
    const error = input.nextElementSibling;
    if (error) error.classList.remove("hiding");
};

//Clear validation error
const clearError = (input) => {
    input.classList.remove("invalid");
    const error = input.nextElementSibling;
    if (error) error.classList.add("hiding");
};

//Validate all inputs
const validateForm = () => {
    if (!isValidationOn) return false;

    let isFormValid = true;

    Object.keys(inputs).forEach((key) => {
        const input = inputs[key];
        const value = input.value.trim();

        clearError(input);

        if (!validators[key](value)) {
            showError(input);
            isFormValid = false;
        }
    });
    return isFormValid;
};

/** 
//Handle form submission without try/catch especially for web3forms issue.
form.addEventListener("submit", (e) => {
    e.preventDefault(); //stop immediate submission

    isValidationOn = true;

    const isFormValid = validateForm();

    if (isFormValid) {
        //Add loading state to submit input
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
        submitBtn.value = "Sending..."; //optional, hidden by CSS

        //Fade from slightly for smooth UX
        form.style.opacity = "0.5";
        form.style.pointerEvents = "none";

        //Show thank-you message
        thankYou.style.display = "block";

        //Delay submission to Web3Forms by 2 seconds
        setTimeout(() => {
            form.submit(); //actual submission
        }, 2000);
    }
});
*/

//Handle form submission with try/catch error 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;

    if (!validateForm()) return;

    //Hide previous messages
    thankYou.style.display = "none";
    errorMsg.style.display = "none";

    try {
        //Disable button & show loading
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
        submitBtn.value = "Sending...";
        form.style.opacity = "0.5";
        form.style.pointerEvents = "none";

        //show thank-you immediately
        thankYou.style.display = "block";

        //Delay actual form submission (simulate network)
        setTimeout(() => {
            //Try submiting the form
            form.submit();
        }, 2000);
    } catch (err) {
        //if something goes wrong (rare, like browser blocking submission)
        thankYou.style.display = "none";
        errorMsg.style.display = "block";
        errorMsg.textContent = "Oops! Something went wrong. Please try again.";
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
        submitBtn.value = "Send";
        form.style.opacity = "1";
        form.style.pointerEvents = "auto";
    }
});

//Real-time validation as user types
Object.values(inputs).forEach((input) => {
    input.addEventListener("input", () => {
        validateForm();
    });
});

//Hide thank-you initially
thankYou.style.display = "none";

