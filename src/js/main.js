/* Your JS here. */
// import main from 'src/css/main.scss';

window.onscroll = function() {resizeNavbar()};
document.getElementById("carousel-left").onclick = function(){ carousel(-1)};
document.getElementById("carousel-right").onclick = function(){ carousel(1)};

document.getElementById("rep-button").onclick = function(){ republic()};
document.getElementById("prin-button").onclick = function(){ principate()};
document.getElementById("dom-button").onclick = function(){ dominate()};

document.getElementById("caligula-img").onclick = function() {modal("caligula")};
document.getElementById("aurelius-img").onclick = function() {modal("aurelius")};
document.getElementById("constant-img").onclick = function() {modal("constantine")};

document.getElementById("caligula").onclick = function() {hideModal("caligula")};
document.getElementById("aurelius").onclick = function() {hideModal("aurelius")};
document.getElementById("constantine").onclick = function() {hideModal("constantine")};

var current_slide = 0;

function resizeNavbar() {
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

    // handle buttons
    var republic_Y = document.getElementById("republic-section").getBoundingClientRect().top - document.body.getBoundingClientRect().top - 50;
    var princeps_Y = document.getElementById("principate-section").getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    var dominate_Y = (document.getElementById("dominate-section").getBoundingClientRect().top - 50) - document.body.getBoundingClientRect().top;
    if (window.scrollY >= republic_Y && window.scrollY < princeps_Y) {
        document.getElementById("rep-button").style.backgroundColor = "rgb(135, 33, 33)";
        document.getElementById("prin-button").style.backgroundColor = "rgb(96, 18, 18)";
        document.getElementById("dom-button").style.backgroundColor = "rgb(96, 18, 18)";
    } else if (window.scrollY >= princeps_Y && window.scrollY < dominate_Y ) {
        document.getElementById("rep-button").style.backgroundColor = "rgb(96, 18, 18)";
        document.getElementById("prin-button").style.backgroundColor = "rgb(135, 33, 33)";
        document.getElementById("dom-button").style.backgroundColor = "rgb(96, 18, 18)";
    } else if (window.scrollY >= dominate_Y) {
        document.getElementById("rep-button").style.backgroundColor = "rgb(96, 18, 18)";
        document.getElementById("prin-button").style.backgroundColor = "rgb(96, 18, 18)";
        document.getElementById("dom-button").style.backgroundColor = "rgb(135, 33, 33)";
    } 
    else {
        document.getElementById("rep-button").style.backgroundColor = "rgb(96, 18, 18)";
        document.getElementById("prin-button").style.backgroundColor = "rgb(96, 18, 18)";
        document.getElementById("dom-button").style.backgroundColor = "rgb(96, 18, 18)";
    }
}

function carousel(change) {
    current_slide += change;
    if (current_slide == 0 || current_slide > 2) {
        current_slide = 0;
        document.getElementById("carousel-main").innerHTML = "<p>According to legend, Romulus founded Rome around 770 BC after killing his twin brother Remus. Rome actually began as a monarchy. There were 7 kings: Romulus, Numa Pompilius, Tullus Hostilius, Ancus Marcius, Lucius Tarquinius Priscus, Servius Tullius, and Lucius Tarquinius Superbus. The monarchy was increasingly unpopular, and Tarquinius Superbus was overthrown in 509 BC after one of his sons assaulted a woman named Lucretia. Lucretia's husband, Collatinus, and Tarquinius Superbus' nephew, Brutus, became the first consuls of Rome.</p>"
    } else if (current_slide == 1) {
        document.getElementById("carousel-main").innerHTML = "<p>The Roman Republic was governed by the Senate, which entirely consisted of upperclass patrician men. However, following the Secession of the Plebs, a Tribune of the Plebs was elected to represent the lower class plebeians. Two consuls were elected each year to jointly lead Rome.</p>"
    } else {
        current_slide = 2;
        document.getElementById("carousel-main").innerHTML = "<iframe width=\"960\" height=\"540\" src=\"https://www.youtube.com/embed/dEMW0CMyv8Q\"></iframe>";
    }
}

function republic() {
    var republic_Y = document.getElementById("republic-section").getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    
    window.scrollBy({
        top: document.getElementById("republic-section").getBoundingClientRect().top - 50,
        left: 0,
        behavior: "smooth",
    });
    

    document.getElementById("rep-button").style.backgroundColor = "rgb(135, 33, 33)";
    document.getElementById("prin-button").style.backgroundColor = "rgb(96, 18, 18)";
    document.getElementById("dom-button").style.backgroundColor = "rgb(96, 18, 18)";
}

function principate() {
    var princeps_Y = document.getElementById("principate-section").getBoundingClientRect().top - document.body.getBoundingClientRect().top + 20;
    window.scrollBy({
        top: document.getElementById("principate-section").getBoundingClientRect().top - 50,
        left: 0,
        behavior: "smooth",
    });

    document.getElementById("rep-button").style.backgroundColor = "rgb(96, 18, 18)";
        document.getElementById("prin-button").style.backgroundColor = "rgb(135, 33, 33)";
        document.getElementById("dom-button").style.backgroundColor = "rgb(96, 18, 18)";
}

function dominate() {
    var dominate_Y = (document.getElementById("dominate-section").getBoundingClientRect().top - 50) - document.body.getBoundingClientRect().top;
    window.scrollBy({
        top: document.getElementById("dominate-section").getBoundingClientRect().top - 50,
        left: 0,
        behavior: "smooth",
    });

    document.getElementById("rep-button").style.backgroundColor = "rgb(96, 18, 18)";
        document.getElementById("prin-button").style.backgroundColor = "rgb(96, 18, 18)";
        document.getElementById("dom-button").style.backgroundColor = "rgb(135, 33, 33)";
}

function modal(id) {
    document.getElementById(id).style.display = "block";
}


function hideModal(id) {
    document.getElementById(id).style.display = "none";
}