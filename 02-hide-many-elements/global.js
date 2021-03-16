window.addEventListener('load', function(){
    const hide = document.getElementsByClassName('hide_me');
    const button = document.getElementById("button");

    button.addEventListener('click', function(){
        Array.from(hide).forEach((e) => {
            e.style.display = "none";
        });
    });
});