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
//convert string to array
const ukCities = "London,Birmingham,Southanptom,Bristol,Liverpool,Manchester,Stoke";

const myArray = ukCities.split(",");

console.log(myArray);

console.log(cities);
//convert arrays to strings
const dogNames = ["Fido", "Spot", "Scooby", "Lassie"];

const myArray1 = dogNames.toString();

console.log(myArray1)



const shopItems = `Underpants:6.99,Socks:5.99,T-shirt:14.99,Trousers:31.99,Shoes:23.99`;

const products= shopItems.split(",");

let total = 0

console.log(products);

for(const product  of products){
    
    const subArray = product.split(":")

    const itemName = subArray[0]

    const price = Number(subArray[1])

    total += price 

    const totalPrice = total.toFixed(2)

    const textItem = `${itemName} -- $${price} `

    console.log(textItem)
}

//for ...of loop

const cats = ["Leonard","Penny","Raj","Emmy","Bernadette","Sheldon"]

for (const cat of cats){
    console.log(cat)
}

//map() 

function toUpper(string){
    return string.toUpperCase()
}

const upperCats = cats.map(toUpper)

console.log(upperCats)

//filter ()

function bigCats(string){
    return string.length > 6
}

const bigFive = cats.filter(bigCats)
 
console.log(bigFive)

//function expression

const jungle = ["Leopard","Lion", "Zebra","Cheetah","Jaguar"]

const filtered = jungle.filter((cat) => cat.startsWith("L"))

console.log(filtered)

console.log(jungle.length)

for(let i = 0; i < jungle.length; i++){
    console.log(jungle[i])
}

let myFavorite = "My favorite Animals are "

for(let i =0; i < jungle.length; i++){
    if (i === jungle.length - 1 ){
        myFavorite = `${myFavorite} and ${jungle[i]}`
    }else{
        myFavorite = `${myFavorite} ${jungle[i]}`
    }
}

console.log(myFavorite)

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];

for (const contact of contacts){
    const splitContact = contact.split(":")
    console.log(splitContact)
}

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    para.textContent = '';
    for (const contact of contacts) {
        const splitContact = contact.split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        }
    }
    if (para.textContent === '') {
        para.textContent = 'Contact not found.';
    }
});


























