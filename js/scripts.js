function handleSubmit(event) {
    event.preventDefault();  

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   
    alert(`Gracias, ${name}! Hemos recibido tu mensaje: "${message}". Nos pondremos en contacto contigo en ${email}.`);
}
