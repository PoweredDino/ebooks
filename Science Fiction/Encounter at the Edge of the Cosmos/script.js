window.onscroll = function() {stick()};

    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    function stick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}