document.addEventListener("DOMContentLoaded", function() {
    var scrollDownText = document.getElementById("scroll-down-text");

    scrollDownText.addEventListener("click", function() {
        var targetSection = document.querySelector(".subheader-section");
        var targetSectionPosition = targetSection.offsetTop;
        var currentPosition = window.pageYOffset;
        var distance = targetSectionPosition - currentPosition;

        var duration = 1000;
        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, currentPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    });
});

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

document.addEventListener("DOMContentLoaded", function() {
    var scrollDownText = document.getElementById("scroll-down-text2");

    scrollDownText.addEventListener("click", function() {
        var targetSection = document.querySelector(".more-section");
        var targetSectionPosition = targetSection.offsetTop;
        var currentPosition = window.pageYOffset;
        var distance = targetSectionPosition - currentPosition;

        var duration = 1000;
        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, currentPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    });
});

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

document.addEventListener("DOMContentLoaded", function() {
    var scrollDownText = document.getElementById("scroll-down-text3");

    scrollDownText.addEventListener("click", function() {
        var targetSection = document.querySelector(".form-container");
        var targetSectionPosition = targetSection.offsetTop;
        var currentPosition = window.pageYOffset;
        var distance = targetSectionPosition - currentPosition;

        var duration = 1000;
        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, currentPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    });
});

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.getElementById("back-to-top");

    scrollButton.addEventListener("click", function (e) {
        e.preventDefault();

        var scrollDuration = 300; 
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });
});

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}