const randomHelloById = document.getElementById("randomHello");
let helloJSON;
let length;

start();



// sets off the necessary functions for the change of hello
async function start() {
    await getJSON();
    length = helloJSON.length;
    window.setInterval(setNewHello, 5000);
}

// gets the json file containing all hellos
async function getJSON() {
    try {
        const res = await fetch("./random_hello/hello.json");
        helloJSON = await res.json();
    } catch(error) {
        console.error("Oh no error: ", error);
    }
}

// sets the new hello word
function setNewHello() {
    let randomInt = getRandomInt(0, length)
    let randomHello = helloJSON[randomInt].hello;
    randomHelloById.innerText = randomHello;
}

// can be min but is less than max
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }