// Your JavaScript goes here.
window.addEventListener('load', function(){
    const toggle = document.getElementsByClassName('toggle_me');
    const button = document.getElementById("button");

    button.addEventListener('click', function(){
        Array.from(toggle).forEach((e) => {
            if(e.style.display == 'none') {
                e.style.display = 'block'
            }else{
                e.style.display = 'none'
            }
        });
    });
});