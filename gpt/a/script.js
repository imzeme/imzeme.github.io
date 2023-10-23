document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function() {
      // Hide the header and display a welcome message
      const header = document.querySelector("header");
      header.style.display = "none";
  
      const welcomeMessage = document.createElement("div");
      welcomeMessage.classList.add("welcome-message");
      welcomeMessage.innerHTML = "<h2>Welcome to Our Website!</h2><p>Let's explore together.</p>";
      document.body.appendChild(welcomeMessage);
  
      // Add fixed navigation menu
      const nav = document.querySelector("nav");
      const initialNavOffset = nav.offsetTop;
  
      window.addEventListener("scroll", function() {
        if (window.pageYOffset > initialNavOffset) {
          nav.classList.add("fixed-nav");
        } else {
          nav.classList.remove("fixed-nav");
        }
      });
  
      // Handle contact form submission
      const contactForm = document.getElementById("contactForm");
      contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        alert(`Thank you, ${name}! We have received your message:\nEmail: ${email}\nMessage: ${message}`);
      });
  
      // Improve blog section by adding links
      const blogPosts = document.querySelectorAll(".blog-post");
  
      blogPosts.forEach((post, index) => {
        post.innerHTML += `<p><a href="#blog${index + 1}">Read More</a></p>`;
        post.id = `blog${index + 1}`;
      });
    });
  });
  