function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const username = event.target.querySelector('input[type="text"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    const rememberMe = event.target.querySelector('input[type="checkbox"]').checked;
    
    // ke backend
    console.log('Login attempt:', {
        username: username,
        password: password,
        rememberMe: rememberMe
    });
    
    alert('Login functionality would be implemented here!');
}