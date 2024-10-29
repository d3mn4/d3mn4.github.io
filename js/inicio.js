<script>
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Agregar o quitar la clase 'active'
    });
</script>
