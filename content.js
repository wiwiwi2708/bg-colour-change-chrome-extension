(() => {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "pink",
        "orange",
        "purple"
    ];

    const random =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = random;
})();

// alert("Content script is running!");