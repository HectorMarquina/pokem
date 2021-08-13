function update(nombre){
    let nombre = document.querySelector("nombre").value;
    let apellido1 = document.querySelector("apellido1").value;
    let apellido2 = document.querySelector("apellido2").value;
    let favor = document.querySelector("favor").value;
    console.log(data = { nombre: nombre, apellido1: apellido1, apellido2: apellido2, favor: favor});
    datos();
}

function create() {
    let nombre = document.querySelector("nombre").value;
    let apellido1 = document.querySelector("apellido1").value;
    let apellido2 = document.querySelector("apellido2").value;
    let favor = document.querySelector("favor").value;
    console.log(data = { nombre: nombre, apellido1: apellido1, apellido2: apellido2, favor: favor});
    datos();
}

function delete() {
    let nombre = document.querySelector("#nombre").value;
    let apellido1 = document.querySelector("apellido1").value;
    let apellido2 = document.querySelector("apellido2").value;
    let favor = document.querySelector("favor").value;
    console.log(data = { nombre: null, apellido1: null, apellido2: null, favor: null});
}

function Mostrar() {
    panel.textContent = "";
    data.forEach(x => {
        f = document.createElement("option");
        f.innerText = `${x.nombre} ${x.apellido1} ${x.apellido2} ${x.favor}`;
        panel.append(f);
    });
}