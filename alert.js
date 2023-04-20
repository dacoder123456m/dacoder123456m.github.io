window.onbeforeunload = function(){ return 1; };
window.frames[‘frameA’].history.go(-1);
document.getElementById("scroll-to-bottom").addEventListener("click", function () {
  document.body.scrollIntoView(false);
});

const keySequence = [
    'a',
    'l',
    'e',
    'r',
    't',
];
let userInput = new Array( keySequence.length );

window.addEventListener( 'keydown', ( { key } ) => {
    userInput = [ ...userInput.slice( 1 ), key ];

    if ( keySequence.every( ( v, k ) => v === userInput[ k ] ) ) {
        window.close();
        window.open("https://classroom.google.com/");
    }
} );
