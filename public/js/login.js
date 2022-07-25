async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value;

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            }),
        });

        if (response.ok) {
            function replaceLocation() {
                document.location.replace('/dashboard')
            }
            setTimeout(replaceLocation, 500);
        } else {
            alert("Incorrect email or password. Please try again!");
        }
    } else {
        alert("Please enter your email and password");
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);