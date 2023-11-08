
gsap.from("button", {
    x: 100, 
    duration: 1, 
    delay: 0.5, 
    y: 400,
});

gsap.from("h1", {
    y: -300,
    delay: 0.5,
    duration:1
})

let convertTemp =  () =>{
    let degree = parseFloat(document.getElementById('degrees').value);
    const scale = document.getElementById('scale').value;
    let result = 0;

    if(scale === "c"){
        result= (degree - 32) * (5/9);
    } else if (scale === "f"){
        result = (degree * (9/5)) + 32 ;
    }

    let output = document.querySelector('.result');
    output.textContent = ` Result: ${result.toFixed(4)} ${scale === "c" ? "°C" : "°F"} `;
}

let button = document.querySelector('button');
button.addEventListener('click', convertTemp);
