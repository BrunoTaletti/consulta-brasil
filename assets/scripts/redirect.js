// Verificar se o acesso é feito a partir de um dispositivo móvel
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Redirecionar com base no tipo de dispositivo
function redirectBasedOnDevice() {

var urlParams = new URLSearchParams(window.location.search);

if (isMobileDevice()) {
    window.location.href = "./views/consulta.html" + "?" + urlParams;
    //window.location.href = "./views/consulta.html" + utm_source + utm_medium + utm_campaign + utm_term + utm_content;
  } else {
    window.location.href = "./views/bemvindo.html";
  }
}

// Chamar a função de redirecionamento quando o documento é carregado
window.addEventListener("load", redirectBasedOnDevice);
