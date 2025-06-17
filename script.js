let button = document.getElementById("lightswitch");
button.style.display = "none";

function darkMode() {

  let element = document.body;
  element.className = "darkmode";

  /* hide darkmode button */
  let button = document.getElementById("darkswitch");
  button.style.display = "none";
  /* show lightmode button */
  let button2 = document.getElementById("lightswitch");
  button2.style.display = "block";

}

function lightMode() {
  let element = document.body;
  element.className = "lightmode";

  /* hide lightmode button */
  let button = document.getElementById("lightswitch");
  button.style.display = "none";
  /* show darkmode button */
  let button2 = document.getElementById("darkswitch");
  button2.style.display = "block";  
}


// Contact form handling -------------------------------------------------
document.addEventListener('DOMContentLoaded', function() { //wait for DOM (Document Object Model) to load before executing code
const form = document.querySelector('form');

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = {
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value || '', // ? prevents error when no radio button is selected (optional chaining) & the || '' sets the value to an empty string if nothing is selected
        notifications: {
            newProjects: document.getElementById('newprojects').checked,
            sales: document.getElementById('sales').checked
        },
        country: document.getElementById('country').value,
        subject: document.getElementById('subject').value
    };

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.subject) {
        alert('Please fill in all required fields (First Name, Last Name, and Subject).');
        return;
    }

    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');

    // Log form data (for development - you can remove this)
    console.log('Form submitted with data:', formData);

    // Reset form
    form.reset();
});

// Add some basic input validation feedback
const inputs = document.querySelectorAll('input[type="text"], textarea');

inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = '#4ecdc4';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = '#45b7d1';
    });
});

// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Only handle internal links (those starting with #)
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
});

// Optional: Add form field character counter for textarea
document.addEventListener('DOMContentLoaded', function() {
const textarea = document.getElementById('subject');
const maxLength = 500; // Set a reasonable limit

// Create character counter
const counter = document.createElement('div');
counter.style.fontSize = '12px';
counter.style.color = '#666';
counter.style.marginTop = '5px';
textarea.parentNode.insertBefore(counter, textarea.nextSibling);

function updateCounter() {
    const remaining = maxLength - textarea.value.length;
    counter.textContent = `${textarea.value.length}/${maxLength} characters`;

    if (remaining < 50) {
        counter.style.color = '#ff6b6b';
    } else {
        counter.style.color = '#666';
    }
}

textarea.addEventListener('input', updateCounter);
textarea.setAttribute('maxlength', maxLength);
updateCounter(); // Initialize counter
});
