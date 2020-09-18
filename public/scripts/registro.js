
//INPUT ID DE REGISTRO
let regId = document.getElementById('regId');
//INPUT PARA CONFIRMACION DE ID
let regId2 = document.getElementById('regId2');
// INPUT DE NOMBRE DE REGISTRO
let regName= document.getElementById('regName');
//INFO DE USUARIO
let infoUS = document.getElementById('infoUS');
//INFO DE ID
let infoID = document.getElementById('infoID');
//BOTON DE REGISTRO
let register = document.getElementById('register');

regName.addEventListener('focus',()=>{

    regName.style.border = 'solid 3.5px darkgray ';
    infoUS.style.display = 'unset';
});
regName.addEventListener('blur',()=>{

    regName.style.border = 'solid 1.5px darkgray ';
    infoUS.style.display = 'none';
})
regId.addEventListener('focus',()=>{

    regId.style.border = 'solid 3.5px darkgray ';
    infoID.style.display = 'unset';
});
regId.addEventListener('blur',()=>{

    regId.style.border = 'solid 1.5px darkgray ';
    infoID.style.display = 'none';
})
regId2.addEventListener('focus',()=>{

    regId2.style.border = 'solid 3.5px darkgray ';
});
regId2.addEventListener('blur',()=>{

    regId2.style.border = 'solid 1.5px darkgray ';
})


let input;
let inputId;
let input2;

//CONTROLA LENGTH DE INPUTS DE -REGISTRO- Y CAMBIA PROPIEDADES CSS//
function checkRegName(param, param2){
    
    param.addEventListener('keyup', ()=>{

        inputId = regId.value;
        input = param.value;

        if(input.length >= 1 & input.length < 6 || input.length > 8){
    
            param.style.backgroundColor = 'rgb(245, 62, 62)';

        }else if(input.length >= 6 & input.length <= 8){
            
            param.style.backgroundColor = 'lightgreen'; 

        }else if(input.length == 0){
    
            param.style.backgroundColor = 'white'; 
        }
    }) 
}
function checkRegId(param, param2){

    param.addEventListener('keyup', ()=>{

        inputId = regId.value;
        input = param.value;

        if(input.length >= 1 & input.length < 6 || input.length > 8){
    
            param.style.backgroundColor = 'rgb(245, 62, 62)';

        }else if(input.length >= 6 & input.length <= 8){
            
            param.style.backgroundColor = 'lightgreen'; 

        }else if(input.length == 0){
    
            param.style.backgroundColor = 'white'; 
        }
    }) 
}
checkRegName(regName, infoUS);
checkRegId(regId, infoID);

//EXPEPCION PARA CONTROLAR EL BOTON DE REGISTRO
regId.addEventListener('keyup',()=>{

    inputId = regId.value; 
    
    if(inputId == input2){

        register.style.display = 'unset';
        register.addEventListener('click',()=>{
    
            alert('Ha sido registrado con exito!');
        })
        
    }else{
        register.style.display = 'none';
    }

})

//COMPARA LA PRIMER CLAVE GENERADA CON LA CONFIRMACION DE LA 2DA CLAVE
regId2.addEventListener('keyup', ()=>{

    input2 = regId2.value; 
    
    if(inputId == input2){

        register.style.display = 'unset';
        regId2.style.backgroundColor = 'lightgreen';
        register.addEventListener('click',()=>{
    
            alert('Ha sido registrado con exito!');
        })
        
    }else if(input2 == ""){
        register.style.display = 'none';
        regId2.style.backgroundColor = 'white';
    }else{
        register.style.display = 'none';
        regId2.style.backgroundColor = 'rgb(245, 62, 62)';
    }

});


