function submitForm() {
    if (validateForm()) {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var dob = document.getElementById('dob').value;
        var country = document.getElementById('country').value;
        var genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
        var gender = Array.from(genderCheckboxes).map(cb => cb.value).join(', ');
        var profession = document.getElementById('profession').value;
        var email = document.getElementById('email').value;
        var mobileNumber = document.getElementById('mobileNumber').value;

        document.getElementById('resultFirstName').textContent = firstName;
        document.getElementById('resultLastName').textContent = lastName;
        document.getElementById('resultDob').textContent = dob;
        document.getElementById('resultCountry').textContent = country;
        document.getElementById('resultGender').textContent = gender;
        document.getElementById('resultProfession').textContent = profession;
        document.getElementById('resultEmail').textContent = email;
        document.getElementById('resultMobileNumber').textContent = mobileNumber;

    
        document.getElementById('popup').style.display = 'block';
    }
}

function closePopup() {
    // Reset the form and hide the popup
    document.getElementById('surveyForm').reset();
    document.getElementById('popup').style.display = 'none';
}

function validateForm() {
    var isValid = true;
    var requiredFields = ['firstName', 'lastName', 'dob', 'country', 'profession', 'email', 'mobileNumber'];

    requiredFields.forEach(function (field) {
        var input = document.getElementById(field);
        if (!input.checkValidity()) {
            alert("Please fill in all required fields.");
            isValid = false;
        }
    });

    return isValid;
}
