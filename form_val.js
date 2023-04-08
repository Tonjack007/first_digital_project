

const form = document.getElementById('form');
const username = document.getElementById('username');
const name = document.getElementById('famname');
const prename = document.getElementById('prename');
const address = document.getElementById('address');
const postcode = document.getElementById('postcode');
const town = document.getElementById('town');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.getElementsByClassName('error')[0];

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.getElementsByClassName('error')[0];

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const mailRegX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailRegX.test(String(email).toLowerCase());
};

const isValidPostcode = postcode => {
    const postRegX = /^[0-9]{4}$/;
    return postRegX.test(String(postcode).toLowerCase());
};

const isValidPassword = password => {
    const passRegX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-\/\\=,\.<>{}[\]]).+$/;
    return passRegX.test(String(password).toLowerCase());
};
const isValidPassword2 = password2 => {
    const pass2RegX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-\/\\=,\.<>{}[\]]).+$/;
    return pass2RegX.test(String(password2).toLowerCase());
};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const famnameValue = famname.value.trim();
    const prenameValue = prename.value.trim();
    const addressValue = address.value.trim();
    const postcodeValue = postcode.value.trim();
    const townValue = town.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(famnameValue === '') {
        setError(famname, 'Name is required');
    } else {
        setSuccess(famname);
    }

    if(prenameValue === '') {
        setError(prename, 'Prename is required');
    } else {
        setSuccess(prename);
    }

    if(addressValue === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

    /*if(postcodeValue === '') {
        setError(postcode, 'Postcode is required');
    } else if (!isValidEmail(postcodeValue)) {
        setError(postcode, 'Postcode contain only Numbers and exact 4 Numbers');
    } else {
        setSuccess(postcode);
    }*/
    if (postcodeValue === ''){
        setError(postcode, 'Postcode is required');
        } else if (!isValidPostcode(postcodeValue)){
            setError(postcode,'Postcode contain only exactly 4 Numbers');
        }else{
            setSuccess(postcode);
        }

    if(townValue === '') {
        setError(town, 'Town is required');
    } else {
        setSuccess(town);
    }

    
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 12 ) {
        setError(password, 'Password must contain min. a Uppercase lettre, a Number, a special charater and at least 12 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
       } else if 
       (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
       } else
    {
        setSuccess(password2);
    }

};


