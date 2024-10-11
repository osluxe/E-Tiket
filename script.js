// script.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Select all the movie cards
    const movieCards = document.querySelectorAll(".card");

    // Add hover and click effects to each card
    movieCards.forEach(card => {
        // Add hover effect
        card.addEventListener("mouseover", () => {
            card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            card.style.transform = "scale(1.05)"; // Slightly enlarge the card
            card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Add shadow effect
        });

        // Remove hover effect
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });

        // Add click effect
        card.addEventListener("click", () => {
            card.style.transition = "transform 0.1s ease";
            card.style.transform = "scale(0.95)"; // Shrink slightly when clicked
            setTimeout(() => {
                card.style.transform = "scale(1)"; // Reset back to normal size
            }, 100);
        });
    });
});
