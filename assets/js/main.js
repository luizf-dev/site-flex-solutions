//*seleção dos elementos
let menu = document.querySelector('#icon-menu');
let navbar = document.querySelector('.navbar');

//* função para adicionar a classe open para mostrar o menu e o icone para fechar o menu mobile
menu.onclick = () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('fa-times');
}

//*Adiciona um manipulador de eventos para cada link dentro do menu
let menuLinks = document.querySelectorAll('.navbar a');

menuLinks.forEach(link => {
    link.addEventListener('click', () =>{
        //*Fecha o menu quando um link é clicado
        navbar.classList.remove('open');
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
    });
});