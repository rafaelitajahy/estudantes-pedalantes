var btnPesquisa = document.getElementById("bt-pesquisa");
var chkPesquisa = document.getElementById("chk-pesquisa");

chkPesquisa.onchange = function() {
  if (chkPesquisa.checked) {
    btnPesquisa.disabled = false;
  } else {
    btnPesquisa.disabled = true;
  }
};

btnPesquisa.onclick = function() {
  window.location =
    "https://docs.google.com/forms/d/e/1FAIpQLSeVeoL2Xd6RvVyr5iJRyixG5rLhV4-iPsTBOJ1hfMnkEEdHOA/viewform";
};
