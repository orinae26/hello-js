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













