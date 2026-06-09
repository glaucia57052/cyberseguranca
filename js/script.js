document.addEventListener("DOMContentLoaded", function () {
  aplicarPreferenciasIniciais();
  atualizarEstadoBotoesFonte();
  atualizarIconeTema();
});

/* =========================
   TEMA CLARO/ESCURO
========================= */
function toggleTheme() {
  document.body.classList.toggle("dark");

  const temaAtual = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", temaAtual);

  atualizarIconeTema();
}

function atualizarIconeTema() {
  const btnTema = document.getElementById("btn-tema");
  if (!btnTema) return;

  if (document.body.classList.contains("dark")) {
    btnTema.innerHTML = "☀️";
    btnTema.setAttribute("aria-label", "Ativar modo claro");
    btnTema.title = "Ativar modo claro";
  } else {
    btnTema.innerHTML = "🌙";
    btnTema.setAttribute("aria-label", "Ativar modo escuro");
    btnTema.title = "Ativar modo escuro";
  }
}

/* =========================
   ACESSIBILIDADE DE FONTE
========================= */
function setFontSize(size) {
  document.body.classList.remove("small-font", "normal-font", "large-font");

  if (size === "small") {
    document.body.classList.add("small-font");
  } else if (size === "large") {
    document.body.classList.add("large-font");
  } else {
    document.body.classList.add("normal-font");
    size = "normal";
  }

  localStorage.setItem("fontSize", size);
  atualizarEstadoBotoesFonte();
}

function atualizarEstadoBotoesFonte() {
  const btnSmall = document.getElementById("btn-small");
  const btnNormal = document.getElementById("btn-normal");
  const btnLarge = document.getElementById("btn-large");

  if (!btnSmall || !btnNormal || !btnLarge) return;

  btnSmall.classList.remove("active");
  btnNormal.classList.remove("active");
  btnLarge.classList.remove("active");

  const size = localStorage.getItem("fontSize") || "normal";

  if (size === "small") {
    btnSmall.classList.add("active");
  } else if (size === "large") {
    btnLarge.classList.add("active");
  } else {
    btnNormal.classList.add("active");
  }
}

/* =========================
   PREFERÊNCIAS INICIAIS
========================= */
function aplicarPreferenciasIniciais() {
  const temaSalvo = localStorage.getItem("theme");
  const fonteSalva = localStorage.getItem("fontSize") || "normal";

  // Tema
  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // Fonte
  document.body.classList.remove("small-font", "normal-font", "large-font");

  if (fonteSalva === "small") {
    document.body.classList.add("small-font");
  } else if (fonteSalva === "large") {
    document.body.classList.add("large-font");
  } else {
    document.body.classList.add("normal-font");
  }
}

/* =========================
   GERADOR DE SENHA
========================= */
function gerarSenha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()-_=+";
  let senha = "";

  for (let i = 0; i < 12; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const campoSenha = document.getElementById("senha");
  if (campoSenha) {
    campoSenha.textContent = senha;
  }
}

/* =========================
   FORMULÁRIO
========================= */
function enviarFormulario() {
  alert("Página em construção");
}