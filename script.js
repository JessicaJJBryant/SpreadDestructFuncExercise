// SPREAD DESTRUCTURING FUNCTIONS EXERCISE

// 1a.
const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];
// 1b.
function seeDinos (a, ...b) {
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);


// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    IanMalcolm: "Jeff Goldblum"
};
// 2b--don't forget the curly brackets!!
seeCharacters = ({ellieSattler}) => ellieSattler;
console.log(seeCharacters(jPCharacters));
