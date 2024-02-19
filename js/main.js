// const i = 0
let text = document.querySelector('#typewriter').textContent

console.log(text)


function typeWriterEffect(){
    if (i < text.length) {
        document.querySelector('#typewriter').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriterEffect, speed);
    }
}
   