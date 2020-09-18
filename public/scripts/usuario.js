/*validarToken(false);

async function validarToken(admin) {

    let token = JSON.parse(localStorage.getItem("token"));

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    console.log(myHeaders)    

    let raw = JSON.stringify({"id":1,"monto":"500"});

    console.log(raw)  

    let requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
      body: raw,
      redirect: 'follow'
    };

    console.log(requestOptions)    


    const resp = await fetch("http://localhost:4000/usuario", requestOptions)

    const data = await resp.json();

    console.log("MODULO: ", data)

    if(data.codigo == 202) {

        if (admin == true) {

        //window.location.replace("admin.html");

        } else {

        console.log("Ingresa como usuario");
        //window.location.replace("usuario.html");

        }

    } else if(data.codigo == 500) {
        window.open("ingreso.html", "_self");
    }

}*/


import { validarToken } from "./module.js"

validarToken()
.then(resp => {

    console.log(resp);

    let urlActual = location.href;

/*    if(urlActual === "http://localhost:4000/admin.html") {

        if(!resp.admin) {

            window.location.replace("ingreso.html");

            return;

        }
    }*/

})
.catch(err => console.error("PASO ALGO!!", err));




let submitTransf = document.getElementById('submitTransf');
let asignMoney = document.getElementById('asignMoney');
let userName = document.getElementById('userName');

//WINDOW CONFIRM ANTES DE TRANSFERIR
submitTransf.addEventListener('click', ()=>{

    let monto = asignMoney.value;
    let usuario = userName.value;

    let confirmacion = confirm('Usted esta a punto de transferir $'+monto+' a '+ usuario+'.'+
                                '\n¿Desea continuar la operación?');

    if(confirmacion){
        alert('Transferencia realizada.');
    }else{
        alert('Transferencia cancelada.');
    }

})