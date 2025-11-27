// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const langLinks = document.querySelectorAll('.lang-link');
    
    // Update active state based on current path
    langLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath.startsWith(linkPath) || 
            (currentPath === '/' && linkPath === '/en/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
