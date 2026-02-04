const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const logs = document.querySelector(".logs");
const clearBtn = document.querySelector(".clearBtn");


grandparent.addEventListener("click", () => {
    console.log("capturing: grandparent is clicked!");
    const log = document.createElement("li");
    log.innerText = "capturing: grandparent is clicked!"
    logs.appendChild(log)
}, true); //capturing

grandparent.addEventListener("click", () => {
    console.log("buubling: grandparent is clicked!");
    const log = document.createElement("li");
    log.innerText = "buubling: grandparent is clicked!"
    logs.appendChild(log)
}); // bubbling

parent.addEventListener("click", () => {
    console.log("capturing: parent is clicked!");
    const log = document.createElement("li");
    log.innerText = "capturing: parent is clicked!"
    logs.appendChild(log)
} , true); // capturing


parent.addEventListener("click", () => {
    console.log("bubbling: parent is clicked!");
    const log = document.createElement("li");
    log.innerText = "bubbling: parent is clicked!"
    logs.appendChild(log)
}); // bubbling

child.addEventListener("click", () => {
    console.log("capturing: child is clicked!");
    const log = document.createElement("li");
    log.innerText = "capturing: child is clicked!"
    logs.appendChild(log)
} , true); // capturing

child.addEventListener("click", () => {
    console.log("bubbling: child is clicked!");
    const log = document.createElement("li");
    log.innerText = "bubbling: grandparent is clicked!"
    logs.appendChild(log)
}); // bubbling

// clearing logs
clearBtn.addEventListener("click", () => {
    logs.innerHTML = "";
})
