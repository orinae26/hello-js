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






















