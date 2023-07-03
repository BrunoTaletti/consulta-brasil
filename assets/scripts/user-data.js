$(document).ready(function () {
  // Recupera os valores da URL
  var urlParams = new URLSearchParams(window.location.search);
  var user_cpf = urlParams.get("cpf");
  var user_birthdate = urlParams.get("birth");

  // Valor disponivel para saque
  var amount = "R$5.983,47";

  // Prazo maximo para pagar (DIAS)
  var maxDate = 2;

  // Pega a data atual e conta mais X dias para o prazo maximo de pagamento
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + maxDate);

  // Formata a data no formato "DD/MM/YYYY"
  var day = String(currentDate.getDate()).padStart(2, "0");
  var month = String(currentDate.getMonth() + 1).padStart(2, "0"); // +1 porque os meses são indexados em 0
  var year = currentDate.getFullYear();
  var lastDate = day + "/" + month + "/" + year;

  // Exibe os valores nos IDs específicos
  $("#cpf").text(user_cpf);
  $("#birth").text(user_birthdate);
  $("#lastDate").text(lastDate);
  $("#amount").text(amount);

  // Desativa o envio padrao do form
  $("#disable").submit(function (event) {
    event.preventDefault();
  });
});
