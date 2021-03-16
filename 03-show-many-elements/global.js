window.addEventListener('load', function(){
    const show = document.getElementsByClassName('show_me');
    const button = document.getElementById("button");

    button.addEventListener('click', function(){
        Array.from(show).forEach((e) => {
            e.style.display = "block";
        });
    });
});