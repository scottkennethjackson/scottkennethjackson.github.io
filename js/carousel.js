export function centerCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.scrollLeft = carousel.scrollWidth / 2 - carousel.clientWidth / 2;
}
