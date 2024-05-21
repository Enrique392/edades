
window.onload=function (){

    let bloque=document.querySelector(".maquina")
    let img=document.querySelector("#respuestaMaquina")
    let user=document.querySelectorAll('input[type=radio][name="opcion"]');
    let contadorMaquina=0;
    let contadorUsuario=0;
    let empate=0;

    user.forEach(function (userOption){
        userOption.addEventListener("click",function (){

            if (this.checked){
                let userResp=this.value;
                let maq=parseInt(Math.random()*3+1)
                console.log("Maquina->" + maq)
                console.log("usuario->" + userResp)
                bloque.style.visibility="visible"
                bloque.classList.add("maquina-respuesta")
                switch (maq){
                    case 1:{
                        img.src="views/imagenes/piedra.png"
                        break;
                    }

                    case 2:{
                        img.src="views/imagenes/papel.png"
                        break;
                    }

                    case 3:{
                        img.src="views/imagenes/tijeras.png"
                        break;
                    }

                }

                let msg="";
                if (userResp==maq){
                    msg="Empate"
                    empate++;
                }else if (userResp==1 && maq==2){
                    contadorMaquina++;
                    msg="Gana la maquina";
                }else if (userResp==1 && maq==3){
                    contadorUsuario++;
                    msg="Ganaste"
                }else if (userResp==2 && maq==1){
                    contadorUsuario++;
                    msg="Ganaste";
                }else if (userResp==2 && maq==3){
                    contadorMaquina++;
                    msg="Gana la maquina"
                }else if (userResp==3 && maq==1){
                    contadorMaquina++;
                    msg="Gana la maquina";
                }else if (userResp==3 && maq==2){
                    contadorUsuario++;
                    msg="Ganaste"
                }
                document.querySelector("#mensaje").innerHTML=msg
                document.querySelector("#contador").innerHTML=`Usuario: ${contadorUsuario}  Maquina: ${contadorMaquina} Empate: ${empate}`
            }
            if (contadorUsuario==10){
                ganador();
                let boton=document.querySelector(".boton");
                let salir=document.querySelector(".salir")
                boton.style.visibility="visible"
                salir.style.visibility="visible"
                boton.addEventListener("click",function (){
                    window.location.replace("index.jsp");
                })
                salir.addEventListener("click",function (){
                    window.close();
                })
            }

        })

    })
}