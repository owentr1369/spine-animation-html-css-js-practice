const mainBtn = document.getElementById("mainBtn");

mainBtn.addEventListener("click", () => {
  alert("You clicked me!");
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "demo animation",
  path: "./assets/Lopte/skeleton.json",
});
