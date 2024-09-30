document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".sec-text");

    const textArray = ["Freelancer", "Blogger", "YouTuber", "Designer", "Developer"];
    let currentIndex = 0;

    const textLoad = () => {
        text.textContent = textArray[currentIndex];
        currentIndex = (currentIndex + 1) % textArray.length;
    }

    textLoad(); 
    setInterval(textLoad, 4000); 
});
