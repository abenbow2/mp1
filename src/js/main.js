/* Your JS here. */
// import main from 'src/css/main.scss';

window.onscroll = function() {resizeNavbar()};

function resizeNavbar() {
    console.log(`scrolling...`);
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        var new_height = Math.min(60, 100 - (document.body.scrollTop - 100));
        document.getElementById("navbar").style.height = `${new_height}px`;
        document.getElementById("rome-title").style.fontSize = "36px";

        var buttons = document.getElementsByClassName("nav-button");
        for(const button of buttons){
            button.style.padding = "5px";
        }
    } else {
        document.getElementById("navbar").style.height = `${100}px`;
        document.getElementById("rome-title").style.fontSize = "48px";

        var buttons = document.getElementsByClassName("nav-button");
        for(const button of buttons){
            button.style.padding = "15px";
        }
    }
}
