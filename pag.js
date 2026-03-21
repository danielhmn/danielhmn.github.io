function login(){
alert("Función no disponible. Presiona omitir ");
}

function buscar(){
    const texto = document.getElementById('buscador').value.toLowerCase();
    const enlaces = document.querySelectorAll('.info2 a');

    enlaces.forEach(a => {
        const nombre = a.textContent.toLocaleLowerCase();
        a.style.display = nombre.includes(texto)? 'inline-block' : 'none' ;
        
    });
}