// Sample movie database for recommendations
const movieDatabase = {
    action: [
        { title: "Mad Max: Fury Road" },
        { title: "John Wick" },
        { title: "Die Hard" }
    ],
    comedy: [
        { title: "Superbad" },
        { title: "Step Brothers" },
        { title: "The Hangover" }
    ],
    drama: [
        { title: "The Shawshank Redemption" },
        { title: "Forrest Gump" },
        { title: "Fight Club" }
    ],
    romance: [
        { title: "Pride and Prejudice" },
        { title: "The Notebook" },
        { title: "La La Land" }
    ],
    thriller: [
        { title: "Gone Girl" },
        { title: "Inception" },
        { title: "Shutter Island" }
    ]
};

// Event listener for the "Get Recommendations" button
document.getElementById("recommendBtn").addEventListener("click", getRecommendations);

// Function to get selected genres and display recommendations
function getRecommendations() {
    const selectedGenres = Array.from(
        document.querySelectorAll(".checkbox-group input[type='checkbox']:checked")
    ).map(checkbox => checkbox.value);

    const recommendations = [];
    selectedGenres.forEach(genre => {
        if (movieDatabase[genre]) {
            recommendations.push(...movieDatabase[genre]);
        }
    });

    displayRecommendations(recommendations);
}

// Function to display movie recommendations
function displayRecommendations(recommendations) {
    const recommendationsContainer = document.getElementById("recommendations");
    recommendationsContainer.innerHTML = ""; // Clear previous recommendations

    if (recommendations.length === 0) {
        recommendationsContainer.innerHTML = "<p>No recommendations available. Try selecting genres.</p>";
        return;
    }

    recommendations.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `<h3>${movie.title}</h3>`;
        recommendationsContainer.appendChild(movieCard);
    });
}
