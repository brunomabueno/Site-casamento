const pixKey = "bruno.camis120127@gmail.com";
document.getElementById("copyPix").addEventListener("click", async () => {
  const status = document.getElementById("copyStatus");
  try {
    await navigator.clipboard.writeText(pixKey);
    status.textContent = "Chave Pix copiada ♡";
  } catch (e) {
    status.textContent = "Toque e segure a chave Pix para copiar.";
  }
});
