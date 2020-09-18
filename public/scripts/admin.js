let submitTransf = document.getElementById('submitTransf');
let asignMoney = document.getElementById('asignMoney');
let userName = document.getElementById('userName');
let usuarios = document.getElementsByClassName('usuario');


//CON ESTO TOMO EL ID DE USUARIO AL HACER CLICK SOBRE EL Y LO COLOCO DENTRO DEL INPUT DE USUARIO
for( i=0; i<usuarios.length;i++){


    usuarios[i].addEventListener('click',event=>{

        //currentTarget retorna el elemento desde el cual se dispara el event listener (ej: usuarios[i]);
        let userChilds= event.currentTarget.children;
        userName.value = userChilds[1].textContent;
        
    });
};


//WINDOW CONFIRM DE ASIGNACION DINERO
submitTransf.addEventListener('click', ()=>{

    let monto = asignMoney.value;
    let usuario = userName.value;

    let confirmacion = confirm('Usted esta a punto de asignar $'+monto+' a '+ usuario+'.'+
                                '\n¿Desea continuar la operación?');

    if(confirmacion){
        alert('Asignación realizada.');
    }else{
        alert('Asignación cancelada.');
    }
});