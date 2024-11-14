// Permitir solo letras en el nombre
document.getElementById('name').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
  });
  
  // Definir caracteres no permitidos en el correo
  document.getElementById('email').addEventListener('input', function (e) {
    this.value = this.value.replace(/[!#$%^&*()+=\[\]{};':"\\|,<>\/?]+/g, '');
  });
  
  // Contar caracteres en el mensaje
  document.getElementById('message').addEventListener('input', function (e) {
    const maxLength = 500;
    const currentLength = this.value.length;
    document.getElementById('charCount').textContent = `${currentLength}/${maxLength}`;
    if (currentLength > maxLength) {
      this.value = this.value.substring(0, maxLength);
    }
  });