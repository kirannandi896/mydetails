var home = document.getElementById("uparr");

window.onscroll = function() {
  if (window.scrollY > 0) {
    home.style.display = "block";
  } else {
    home.style.display = "none";
  }
};

home.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
