const firstname = document.querySelector("#firstName");
const lastname = document.querySelector("#lastName");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const password = document.querySelector("#password");
const Confirmpassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#formEntrada");


form.addEventListener("submit", (event) => {
   event.preventDefault();
   let valid = true;

   //verifica se o primeiro nome está vazio
   if(firstname.value.trim() === "") {
      alert("Por favor, preencha o seu primeiro nome");
      valid = false;
   }

   //verifica se o segundo nome está vazio
   if(lastname.value.trim() === "") {
      alert("Por favor, preencha o seu segundo nome");
      valid = false;
   }

   //valida email
   const emailAutorizado = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,6}$/
   if(!emailAutorizado.test(email.value)) {
      alert("Por favor, preencha um email válido.");
      valid = false;
   }

   //valida número
   const numeroVálido = /^\(\d{2}\) \d{4,5}-\d{4}$/;
   if(numeroVálido.test(number.value)) {
      alert("Por favor, preencha um número válido.");
      valid = false;
   }

   //valida senha
   if(password.value.length < 8){
      alert("A senha deve ter pelo menos 8 caracteres.");
      valid = false;
   }

   //valida confirmação de senha
   if(password.value !== Confirmpassword.value){
      alert("As senhas não coincidem.");
      valid = false;
   }

   //valida gênero
   const gender = document.querySelector('input[name="gender"]:checked');
   if(!gender) {
      alert("Por favor, selecione um gênero.");
      valid = false;
   }

   if(valid) {
      window.location.href = "login.html";
   }
});
