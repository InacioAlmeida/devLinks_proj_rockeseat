function toggleMode(){
    //Poderia ter sido usada uma estruturade if e else, porem já há a função toogle
    const html = document.documentElement
    html.classList.toggle('dark')

    const img = document.querySelector("#profile img")
    if(html.classList.contains('dark')) {
        img.setAttribute('src', './assets/dog_light.jpg')
        img.setAttribute('alt', "Foto de um cachorro usando óculos")
    } else {
        img.setAttribute('src', './assets/dog_dark.jpg')
        img.setAttribute('alt', "Foto de um cachorro usando óculos escuros")
    }
}