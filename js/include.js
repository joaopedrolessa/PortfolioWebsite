// Script para incluir header e footer em todas as páginas
function includeHTML(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

window.onload = function() {
  includeHTML('header', 'components/header.html');
  includeHTML('footer', 'components/footer.html');
};
