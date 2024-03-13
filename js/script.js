// Make opening image change 


// Make the brand saying change
const brandSayings = ["Trimmed to Perfection", "Styled with Precision"];
const brandSayingElement = document.getElementById("brand-saying");

let index = 0;

// Function to update brand saying
function updateBrandSaying() {
    brandSayingElement.textContent = brandSayings[index];
    index = (index + 1) % brandSayings.length; 
}

setInterval(updateBrandSaying, 3000);


// Fade sections in
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); 
hiddenElements.forEach((el) => observer.observe(el));
