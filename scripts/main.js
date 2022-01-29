//String Concatenation
//template literals ('${}')s';

const strinng1 = `I like the new format of javasscript.
You do not have to use the backslash to escape the new line character.`
console.log(strinng1);

const string = "This is a string";

console.log(string.length);

const browser = "Mozilla";

console.log(browser);

//print last character of string

console.log(browser[browser.length - 1]);

//testing if a string contains a substring
if(browser.includes("zilla")){
    console.log("Yes, it includes zilla");
}else{
    console.log("No, it does not include zilla");
}

//.startsWith()

if (browser.startsWith("Moz")){
    console.log("Yes, it starts with Moz");
}else{
    console.log("No, it does not start with Moz");
}

//.endsWith()
if(browser.endsWith("zilla")){
    console.log("Yes, it ends with zilla");
}else{
    console.log("No, it does not end with zilla");
}

//slice()
//returns a substring from 1st character to 3rd character
console.log(browser.slice(0,3));
//from 1st character to 2nd last character
console.log(browser.slice(0, -1));
//from 3rd character to the end
console.log(browser.slice(2))

//change case
//uppercase
console.log(browser.toUpperCase());
//lowercase
console.log(browser.toLowerCase());
//replace
const yoghurt = browser.replace("Moz", "Van");
console.log(yoghurt);


//String operations
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(let city of cities){

    const lowerCity = city.toLowerCase();

    const firstLetter = lowerCity[0].toUpperCase();

    const capitalCity = lowerCity.replace(lowerCity[0], firstLetter);

    console.log(capitalCity);
}


const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for(station of stations){

    const code = station.slice(0,3);

    const semiColon = station.indexOf(";");

    const name = station.slice(semiColon + 1);

    const newStationName = `${code} : ${name}`;

    console.log(newStationName);

}

//arrays
const shopping = ['milk', 'eggs', 'chocolate', 'bread', 'coffee'];

console.log(shopping);

console.log(shopping.length);

//iterate through an array

for(item of shopping){
    console.log(item);
}

//modify an array

shopping[1] = 'cheese';

console.log(shopping);

//indexOf()

console.log(shopping.indexOf('chocolate'));

//multidimensional arrays

const shoppings = ["eggs", "bread", "milk", "chocolate",["tea", "coffee", "juice"]];

//iterate through a multidimensional array
console.log(shoppings[4][1]);

console.log(shoppings.indexOf("juice"));

//add an item to the end of an array via push()

shoppings.push("vegetables","honey","jam","apples");

console.log(shoppings);

//remove last item from an array via pop()

shoppings.pop();

console.log(shoppings);

//add item in the front of an array

shoppings.unshift("Biscuits");
console.log(shoppings);

//remove item from the front of an array

shoppings.shift();
console.log(shoppings);


const news = shoppings.splice(2,5);

console.log(shoppings);


const shopping2 = ["eggs", "bread", "milk", "chocolate",["tea", "coffee", "juice"]];

for(const shop of shopping2){
    console.log(shop);
}

const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
    console.log(bird);
}
//map()
const score = [5, 6, 7, 8, 9];

function triple (score){
    return score * 3;
}

const totalScore = score.map(triple);

console.log (totalScore);
//filter()
function isLong(city){
    return city.length>8;
}

const city = ["London","Birmingham", "Southanptom","Bristol","Liverpool","Manchester","Stoke"];

const longCities = city.filter(isLong);

console.log(longCities);
























