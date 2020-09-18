import { validarToken } from "./check.js"

//INPUT DE NOMBRE DE INGRESO
let formName= document.getElementById('formName');
//INPUT DE ID DE INGRESO
let formId = document.getElementById('formId');


//CONTROLA LENGTH DE INPUTS DE -INGRESO- Y CAMBIA PROPIEDADES CSS//
function checkForm(param){
    
    param.addEventListener('keyup', ()=>{

        let input = param.value;
        if(input.length >= 1 & input.length < 6 || input.length > 8){
    
            param.style.backgroundColor = 'rgb(245, 62, 62)';
    
        }else if(input.length >= 6 & input.length <= 8){
            
            param.style.backgroundColor = 'lightgreen'; 
    
        }else if(input.length == 0){
    
            param.style.backgroundColor = 'white'; 
        }
    })
}
checkForm(formName);
checkForm(formId);

formName.addEventListener('focus',()=>{

    formName.style.border = 'solid 3.5px darkgray ';
});
formName.addEventListener('blur',()=>{

    formName.style.border = 'solid 1.5px darkgray ';
})
formId.addEventListener('focus',()=>{

    formId.style.border = 'solid 3.5px darkgray ';
});
formId.addEventListener('blur',()=>{

    formId.style.border = 'solid 1.5px darkgray ';
})

let submit = document.querySelector('.submit');

submit.addEventListener("click", () => {

    ingreso(formName, formId)

});

function ingreso(formName, formId) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"email":formName.value,"pass":formId.value});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/ingreso", requestOptions)
    .then(resp => resp.json())
    .then(data => {

        //console.log(data);
        
        if (data.codigo == 202 && data.token != "") {

            localStorage.setItem("token", JSON.stringify(data.token));
            validarToken();

            //localStorage.setItem("token", JSON.stringify(data.token));
            //console.log("Ingresa como admin");
            //window.location.replace("admin.html");
            //validarToken(data.admin)

        //} else if (data.codigo == 202 && data.token != "" && data.admin == false) {

            //localStorage.setItem("token", JSON.stringify(data.token));
            //console.log("Ingresa como usuario");
            //window.location.replace("usuario.html");
            //validarToken(data.admin)

        } else {console.log("Usuario no registrado");}

    }) .catch(error => console.log('error', error));

}

////////////////////////////////////////////////////////////