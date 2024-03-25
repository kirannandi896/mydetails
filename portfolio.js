
function active() {
    const navLinks = document.querySelectorAll('.overlay-content a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
}




