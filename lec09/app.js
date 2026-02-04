document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked!");
});
document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("parent Clicked!");
    e.stopPropagation();
});
document.querySelector("#child").addEventListener("click", () => {
    console.log("child Clicked!");
});