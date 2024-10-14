document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for your message, ${name}! We will get back to you soon :)`);
    
    // Clear the form
    document.getElementById('contactForm').reset();
});