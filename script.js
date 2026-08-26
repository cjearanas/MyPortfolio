document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
function openImage(imageSrc) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");

    fullImage.src = imageSrc;
    modal.style.display = "flex";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
