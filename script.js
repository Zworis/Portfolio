window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".Header");
    const menu = document.getElementById("menu");
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / docHeight; // Normalized scroll value (0 to 1)

    // Define start and end colors
    const startColor = [0, 115, 230]; // RGB for #0073e6
    const endColor = [0, 51, 102]; // RGB for #001f3f

    // Interpolate between colors
    const newColor = startColor.map((start, i) =>
        Math.round(start + (endColor[i] - start) * scrollFraction)
    );

    navbar.style.backgroundColor = `rgb(${newColor.join(",")})`;
    menu.style.backgroundColor = `rgb(${newColor.join(",")})`;
});
