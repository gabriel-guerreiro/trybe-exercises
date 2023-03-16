
window.onload = () => {
    //background color
    const buttonsBG = document.querySelectorAll('#background-color button');
    for (let index = 0; index < buttonsBG.length; index += 1) {
        buttonsBG[index].addEventListener('click', (event) => {
            document.body.style.backgroundColor = event.target.innerHTML;
            localStorage.setItem('xablau', document.body.style.backgroundColor);
        })
    }
    let savedbackground = localStorage.getItem('xablau');
    document.body.style.backgroundColor = savedbackground;

    //font color

    const fontbutton = document.querySelectorAll('#font-color button');
    for (let index = 0; index < fontbutton.length; index += 1) {
        fontbutton[index].addEventListener('click', (event) => {
            document.body.style.color = event.target.innerHTML;
            localStorage.setItem('corfonte', event.target.innerHTML);
        })
    }

    let fontecor = localStorage.getItem('corfonte');
    document.body.style.color = fontecor;

    //font size
    const fontsizebutton = document.querySelectorAll('#font-size button');
    for (let index = 0; index < fontsizebutton.length; index += 1) {
        fontsizebutton[index].addEventListener('click', (event) => {
            document.body.style.fontSize = `${parseInt(event.target.innerHTML)}px`;
             localStorage.setItem('fontsiz',document.body.style.fontSize);
        })
    }
    let fontisize = localStorage.getItem('fontsiz');
    document.body.style.fontSize = fontisize;

}

