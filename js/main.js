
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
 // Add skip to content link for accessibility
 const skipLink = document.createElement('a');
 skipLink.href = '#main-content';
 skipLink.className = 'skip-to-content';
 skipLink.textContent = 'Skip to content';
 document.body.insertBefore(skipLink, document.body.firstChild);
 
 // Add ID to main content for skip link
 const mainContent = document.querySelector('main');
 if (mainContent) {
   mainContent.id = 'main-content';
 }
 
 // Add icons to footer links
 const footerLinks = document.querySelectorAll('.footer-links a');
 footerLinks.forEach(link => {
   if (!link.querySelector('i')) {
     const icon = document.createElement('i');
     icon.className = 'fas fa-chevron-right';
     link.prepend(icon);
   }
 });
 
 // Mobile Menu Toggle
 const menuToggle = document.querySelector('.menu-toggle');
 const navMenu = document.querySelector('.nav-menu');
 
 if (menuToggle && navMenu) {
   menuToggle.onclick = function() {
     navMenu.classList.toggle('active');
     menuToggle.classList.toggle('active');
     
     if (navMenu.classList.contains('active')) {
       document.body.style.overflow = 'hidden';
     } else {
       document.body.style.overflow = '';
     }
   };
 }
 
 // Handle dropdowns on mobile
 const hasDropdowns = document.querySelectorAll('.has-dropdown');
 hasDropdowns.forEach(dropdown => {
   const link = dropdown.querySelector('a');
   
   if (link) {
     link.onclick = function(e) {
       if (window.innerWidth <= 768) {
         e.preventDefault();
         dropdown.classList.toggle('active');
       }
     };
   }
 });
 
 // Close menu when clicking outside
 document.addEventListener('click', function(e) {
   if (navMenu && navMenu.classList.contains('active') && 
       !e.target.closest('.nav-menu') && 
       !e.target.closest('.menu-toggle')) {
     navMenu.classList.remove('active');
     menuToggle.classList.remove('active');
     document.body.style.overflow = '';
   }
 });
 
 // Enhanced Scroll to Top Button
 const scrollToTopBtn = document.createElement('div');
 scrollToTopBtn.className = 'scroll-to-top';
 scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
 scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
 scrollToTopBtn.setAttribute('role', 'button');
 scrollToTopBtn.setAttribute('tabindex', '0');
 document.body.appendChild(scrollToTopBtn);
 
 // Show/hide scroll to top button
 window.addEventListener('scroll', function() {
   if (window.pageYOffset > 300) {
     scrollToTopBtn.classList.add('visible');
   } else {
     scrollToTopBtn.classList.remove('visible');
   }
 });
 
 // Scroll to top when button is clicked
 scrollToTopBtn.addEventListener('click', function() {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 });
 
