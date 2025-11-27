// Evento de Scroll para mudar a Navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.replace('bg-transparent', 'bg-black');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// (Opcional) Console log estilo "Easter Egg" para recrutadores técnicos
console.log(
    "%c Olá! Se você está vendo isso, provavelmente é um recrutador ou dev curioso.",
    "color: #0dcaf0; font-size: 16px; font-weight: bold;"
);
console.log("Este portfólio foi construído manualmente para demonstrar conhecimentos em Frontend.");