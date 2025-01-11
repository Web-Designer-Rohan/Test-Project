document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".search-bar input");
  const movieCards = document.querySelectorAll(".video-card");

  searchBar.addEventListener("input", () => {
    const searchQuery = searchBar.value.toLowerCase();

    movieCards.forEach(card => {
      const title = card.querySelector(".title").textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
