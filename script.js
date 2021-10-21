// SPREAD AND DESTRUCTURING WITH FUNCTIONS EXERCISE

// 1a.
const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];
// 1b.
function seeDinos (a, ...b) { //using rest to take everything else passed in as the argument grouped into the b parameter
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos); //using spread to spread the contents of the array as the argument into the function's parameter


// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    IanMalcolm: "Jeff Goldblum"
};
// 2b--don't forget the curly brackets!!
seeCharacters = ({ellieSattler}) => ellieSattler;
console.log(seeCharacters(jPCharacters));
// OR can put the console log inside the curly bracket of the function like this:
// seeCharacters = ({ellieSattler}) => {
//     console.log(ellieSattler);
// };
// seeCharacters(jPCharacters);


// BONUS
// 3a.
const jurassicParkMovies = [
    {
    one: "Jurassic Park", 
    two: "The Lost World: Jurassic Park", 
    three: "Jurassic Park III"
    }, 
    {
    four: "Jurassic World", 
    five: "Jurassic World: Fallen Kingdom", 
    six: "Jurassic World: Dominion"
    }
];
// 3b. we destructure in the parameter...first the array (with the square brackets) and then the two objects (with the key names)
seeJPMovies = ([{one, two, three}, {four, five, six}]) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(jurassicParkMovies);

// OR WE CAN DO IT THIS WAY:
// On the first line we destructure ONLY THE OBJECT in the parameter:
// seeJPMovies = ({one, two, three}, {four, five, six}) => {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//     console.log(four);
//     console.log(five);
//     console.log(six);
// }
// seeJPMovies(...jurassicParkMovies); THEN HERE WE SPREAD THE ARRAY
