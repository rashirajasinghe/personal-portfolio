let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
};


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
document.addEventListener("DOMContentLoaded", () => {
    // Fetch Contact Details
    fetch("http://localhost:5000/api/contact")
      .then(response => response.json())
      .then(data => {
        document.getElementById("contact-name").textContent = data.name;
        document.getElementById("contact-email").textContent = data.email;
        document.getElementById("contact-phone").textContent = data.phone;
        document.getElementById("contact-address").textContent = data.address;
      })
      .catch(error => console.error("Error fetching contact data:", error));
  
    // Fetch Social Media Links
    fetch("http://localhost:5000/api/socials")
      .then(response => response.json())
      .then(data => {
        document.getElementById("linkedin").href = data.linkedin;
        document.getElementById("github").href = data.github;
        document.getElementById("twitter").href = data.twitter;
        document.getElementById("facebook").href = data.facebook;
      })
      .catch(error => console.error("Error fetching social media links:", error));
  });
  
