    document.getElementById("about").addEventListener("click", function onClick() {

        var col = document.getElementById("about");
        col.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8);

    }, false);