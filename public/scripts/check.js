//FUNCIÓN QUE VALIDA EL TOKEN
/*export async function validarToken() {

    let token = JSON.parse(localStorage.getItem("token"));

    const resp = await fetch("http://localhost:4000/usuario", { 
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await resp.json();

    console.log("MODULO: ", data)

    if(data.codigo == 202) {

    } else if(data.codigo == 500) {
        window.open("ingreso.html", "_self");
    }
}*/

/*export async function validarToken(admin) {

    let token = JSON.parse(localStorage.getItem("token"));

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    console.log(token)

    var raw = JSON.stringify({"id":1,"monto":"500"});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const resp = await fetch("http://localhost:4000/usuario", requestOptions)

    const data = await resp.json();

    console.log("MODULO: ", data)

    if(data.codigo == 202) {

        if (admin == true) {

        window.location.replace("admin.html");

        } else {

        window.location.replace("usuario.html");

        }

    } else if(data.codigo == 500) {
        window.open("ingreso.html", "_self");
    }

}*/

//FUNCIÓN QUE VALIDA EL TOKEN

export async function validarToken() {

    let token = JSON.parse(localStorage.getItem("token"));

    console.log(token)

    const resp = await fetch("http://localhost:4000/usuario", { 
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await resp.json();

    console.log("MODULO: ", data)


    if (data.codigo == 202) {

        let urlActual = location.href;

        if (urlActual === "http://localhost:4000/ingreso.html") { //si estoy en el inicio

            window.open("usuario.html", "_self"); 
            console.log("entro por usuarios")

            //if (data.admin) {window.open("admin.html", "_self");

        } //else {
            
            //window.open("usuario.html", "_self"); 
            //console.log("entro por usuarios")}

        //} else {console.log(data); return data;}
                    
    } else if (data.codigo == 500) {window.open("ingreso.html", "_self");}
}
