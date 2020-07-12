var windowHeight = window.innerHeight;
var section = document.querySelectorAll('.zodiac-section');

var i;
for(i = 0; section.length >i; i++) {
    var mySection = section[i];

    mySection.style.height = (windowHeight-150)+'px';
}
