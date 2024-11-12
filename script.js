document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio real do formulário

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Obrigado, " + name + "! Sua mensagem foi enviada.");
        document.getElementById('contact-form').reset();  // Limpa o formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});