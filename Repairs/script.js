document.getElementById('login-signup-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.login-wrap').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.login-wrap').style.display = 'none';
});