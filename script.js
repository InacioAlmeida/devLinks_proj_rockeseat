function toggleMode(){
    //Poderia ter sido usada uma estruturade if e else, porem já há a função toogle
    const html = document.documentElement
    html.classList.toggle('dark')

    const img = document.querySelector("#profile img")
    if(html.classList.contains('dark')) {
        img.setAttribute('src', './assets/inas_avatar.png')
        img.setAttribute('alt', "Foto de Inácio")
    } else {
        img.setAttribute('src', './assets/inas_avatar_dark.png')
        img.setAttribute('alt', "Foto de Inácio usando óculos escuros")
    }
}