
const div = document.querySelector(".grid");

for (let u =0; u <=15; u++){
    const line = document.createElement('div');
    for(let i=0; i<=15; i++) {
        const square = document.createElement('div');

        square.classList.add("squareDiv");
        line.appendChild(square);
    }
    div.appendChild(line);
}