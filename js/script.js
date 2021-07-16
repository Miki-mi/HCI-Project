function validateForm(event){
    
    // get data
    var username = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var password = document.querySelector("#password").value
    
    var genderOption = document.getElementsByName("gender")
    var gender = false

    for(let i = 0; i < genderOption.length; i++)
    {
        if(genderOption[i].checked)
        {
            gender = true
            break
        }
    }

    var dob = document.querySelector(".dob").value
    var check = document.querySelector(".check").checked


    // Validate Data

    // username
    if(username.length <= 4)
    {
        event.preventDefault()
        alert("Invalid Username! Username must contain more than 3 words")
    }

    // email
    var validEmail = true
    if(email.indexOf('@') == -1)
    {
        validEmail = false;
    }
    else
    {
        var part = email.split('@')
        var domain = part[1]

        if(domain.indexOf('.') == -1)
        {
            validEmail = false;
        }
        else
        {
            domainPart = domain.split('.')
            extension = domainPart[1]
            
            if(extension != ".com" || extension != ".net")
            {
                validEmail = false
            }
        }
    }

    if(validEmail == false)
    {
        event.preventDefault()
        alert("Invalid Email!")
    }

    // password
    var validPassword = false

    for(let i = 0; i<password.length; i++){
        if(isNaN(password.charAt(i)) == false){
            validPassword = true
        }
    }

    if(validPassword == false){
        event.preventDefault()
        alert("Invalid Password! Password must contain number")
    }


    // gender
    if(gender == false)
    {
        event.preventDefault()
        alert("Fill the Gender!")
    }

    // Date of Birth
    var datePart = dob.split('-')
    var yearInput = parseInt(datePart[0])

    var dateNow = new Date()
    var yearNow = parseInt(dateNow.getFullYear())

    var validDate = yearNow - yearInput

    if(validDate < 18)
    {
        event.preventDefault()
        alert("Invalid Date! you must be 18 years or older")
    }

    // TaC
    if(check == false)
    {
        event.preventDefault()
        alert("You must agree to the Terms and Conditions and Privacy Policy")
    }
}