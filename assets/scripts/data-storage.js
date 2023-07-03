$(document).ready(function () {
  $("#user-data").submit(function (event) {
    event.preventDefault();

    // Pega os valores dos campos
    var user_cpf = $("#cpf").val();
    var user_birthdate = $("#birth").val();

    var urlParams = new URLSearchParams(window.location.search);
    var utm_source = "&utm_source=" + urlParams.get("utm_source");
    var utm_medium = "&utm_medium=" + urlParams.get("utm_medium");
    var utm_campaign = "&utm_campaign=" + urlParams.get("utm_campaign");
    var utm_term = "&utm_term=" + urlParams.get("utm_term");
    var utm_content = "&utm_content=" + urlParams.get("utm_content");

    // Path da pagina seguinte
    var path = "./../views/search.html";
    // Redireciona para a próxima página com os valores como parâmetros de consulta
    window.location.href =
      path +
      "?cpf=" +
      encodeURIComponent(user_cpf) +
      "&birth=" +
      encodeURIComponent(user_birthdate) +
      utm_source +
      utm_medium +
      utm_campaign +
      utm_term +
      utm_content;
  });
});
