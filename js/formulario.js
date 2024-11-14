document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
 
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <p>¡Gracias por contactarnos, ${name}!</p>
        <p>Hemos recibido tu mensaje y te responderemos a ${email} lo antes posible.</p>
    `;
 
    document.getElementById('contactForm').reset();
});