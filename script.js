const button = document.querySelector('.button');
button.addEventListener('click', switchBackground);

function switchBackground(){
    let x = Math.floor(Math.random() * 257);
    let y = Math.floor(Math.random() * 257);
    let z = Math.floor(Math.random() * 257);
    let w = Math.random();

    console.log("hello");

    document.body.style.backgroundColor = `rgba(${x}, ${y}, ${z}, ${w})`;
}