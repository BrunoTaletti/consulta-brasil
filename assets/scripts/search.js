$(document).ready(function () {
  // Define o tempo em segundos (altere o valor conforme necessário)
  var tempoEmSegundos = 15;

  // Converte o tempo para milissegundos
  var tempoEmMilissegundos = tempoEmSegundos * 1000;

  // Remove a classe "d-none" da div2 após o tempo especificado
  $("#rescue")
    .delay(tempoEmMilissegundos)
    .queue(function () {
      $(this).removeClass("d-none");
      $("#query").addClass("d-none");
      $(this).dequeue();
    });
});
