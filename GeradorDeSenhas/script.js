let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

// Conjunto de caracteres que podem ser utilizados na senha
let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:',<>.?/|";
let novaSenha = "";

// Inicializa o valor exibido do tamanho da senha com o valor padrão do slider
sizePassword.innerHTML = sliderElement.value;

// Atualiza o valor exibido do tamanho da senha conforme o slider é movido
sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

// Gera uma nova senha com base no tamanho especificado pelo usuário
function generatePassword() {
  let newPassword = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    newPassword += charset.charAt(Math.floor(Math.random() * n));
  }
  // Exibe a div que contém a senha gerada
  containerPassword.classList.remove("hide");
  // Exibe a senha gerada no elemento HTML
  passwordElement.innerHTML = newPassword;
  // Armazena a nova senha para uso posterior (por exemplo, ao copiar para a área de transferência)
  novaSenha = newPassword;
}

// Copia a senha atual para a área de transferência
function copyPassword() {
  navigator.clipboard.writeText(novaSenha);
  // Adicionando mensagem de feedback seria uma boa ideia, mas não usando alertas
}
