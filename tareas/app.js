const agregar = document.querySelector('.agregar');
const pendiente = document.querySelector('.pendiente');
const texto = document.querySelector('.tarea');
const template = document.querySelector('template').content;
const fragment = document.createDocumentFragment();
let tareas = [];

agregar.addEventListener('click', () => {
    setTarea();
});

pendiente.addEventListener('click', e => {
    btnAccion(e)
});

function setTarea() {
    const tarea = {
        id: Date.now(),
        texto: texto.value,
        estado: false
    }
    tareas.push(tarea);
    texto.value = '';
    mostrarTarea();
}

function mostrarTarea() {
    pendiente.innerHTML='';
    tareas.forEach(tarea => {
        let clone = template.cloneNode(true);
        clone.querySelector('.tarea-agregada').textContent = tarea.texto;
        clone.querySelector('.fa-check').setAttribute('id', tarea.id);
        clone.querySelector('.fa-minus').setAttribute('id', tarea.id);
        fragment.appendChild(clone);
    });
    pendiente.appendChild(fragment);
}

function btnAccion (e) {
    e.preventDefault();
    const ID = Number(e.target.id);

    if (e.target.classList.contains('fa-check')) { 
    }
    if (e.target.classList.contains('fa-minus')) {
        const deleteIndex = tareas.map(nombre => nombre.id).indexOf(ID);        
        tareas.splice(deleteIndex, 1);
    }   
    mostrarTarea();
}