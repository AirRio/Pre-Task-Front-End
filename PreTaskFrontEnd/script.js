async function submitform()
{
    checkPassword()
}


function submit()
{
    let json = JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    })
    alert(json)
}

async function checkPassword()
{
    let password = document.forms["registerForm"]["password"].value
    let confirmPassword = document.forms["registerForm"]["confirm_password"].value

    if(password != null && confirmPassword != null)
    {
        if(password == confirmPassword)
        {
            submit()
        }
        else
        {
            alert("Пароль не верный")
        }
    }
    

}





