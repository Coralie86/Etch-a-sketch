
const grid = document.querySelector(".grid");

let opacity = 0;
for (let u =0; u <=15; u++){
    const line = document.createElement('div');
    for(let i=0; i<=15; i++) {
        const square = document.createElement('div');

        square.classList.add("squareDiv");

        square.addEventListener('mouseover', () =>{
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            square.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
            square.style.opacity = `${opacity}%`;
            opacity +=10;
        })


        line.appendChild(square);
    }
    grid.appendChild(line);
}

const btn = document.querySelector("#buttonSquare")
btn.addEventListener('click', () => {
    let nbSquare = Number(prompt("How many squares do you want per line?"))

    while(nbSquare >=100){
        nbSquare = Number(prompt("How many squares do you want per line?"))
    }
    const div = document.querySelector(".grid");
    document.body.removeChild(div);

    let opacity = 0;
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid")
    
    for (let u =0; u <= nbSquare-1; u++){
    const line = document.createElement('div');
        for(let i=0; i<= nbSquare-1; i++) {
            const square = document.createElement('div');

            square.classList.add("squareDiv");
            square.style.height = String(480 / nbSquare) + 'px';
            square.style.width = String(480 / nbSquare) +'px';

            square.addEventListener('mouseover', () =>{
                let red = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                square.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
                square.style.opacity = `${opacity}%`;
                opacity +=10;
            })


            line.appendChild(square);
        }
    newDiv.appendChild(line);
    }
    document.body.appendChild(newDiv);    
})
