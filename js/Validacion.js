// const email = document.getElementById("exampleInputEmail1")
// const password = document.getElementById("exampleInputPassword1")
// const form = document.getElementById("form")
// const parrafo = document.getElementById("warnings")

// form.addEventListener("submit", e=>{
// e.preventDefault()
// let warnings = ""
// let entrar = false
// let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
// parrafo.innerHTML = ""
// if(!regexEmail.test(email.value)){
//     warnings += 'El email no es valido <br>'
//     entrar = true
// }

// if(pass.value.lenght < 8){
//     warnings += 'La contraseña no es valido <br>'
//     entrar = true
//     }

//     if(entrar){
//         parrafo.innerHTML = warnings
//     }else{
//         parrafo.innerHTML = "Enviado"
//     }

// })} 

// VALIDACION CAMPOS LOGIN Y CREAR CUENTA -------------------------------------------
$('#login').submit(function(e){
var resultado = validarFormulario();
if(resultado == false){
    e.preventDefault();
}

})

function validarFormulario(){

    $('.alert').remove();
    var correo =$('#exampleInputEmail1').val(),
        pass =$('#exampleInputPassword1').val()

        var resultado = true;
    if(correo ==""||correo==null){
        cambiarColor("correo");
        mostrarAlerta("Campo obligatorio")
        resultado = false;

    }else{
        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            cambiarColor("correo");
            mostrarAlerta ("Por favor ingrese un correo valido");
            resultado = false;

        }
    }

    if(pass ==""||pass==null){
        cambiarColor("pass");
        mostrarAlertapass("Campo obligatorio")
        resultado = false;

    }else{
        var lenght = /^.{4,12}$/;
        if(!lenght.test(pass)){
            cambiarColor("pass");
            mostrarAlertapass ("Por favor ingrese una contraseña valida");
            resultado = false;
        }
    }
    return resultado;

}

function cambiarColor(dato){
$('#'+ dato).css({
    border: "1px solid #dd5144"
});
}

function mostrarAlerta(texto){
    $('#exampleInputEmail1').before('<div class= "alert" > Error: ' + texto +'</div>')
}


function mostrarAlertapass(texto){
    $('#exampleInputPassword1').before('<div class= "alert" > Error: ' + texto +'</div>')
}


// VALIDACION CAMPOS DE ESCUELA -------------------------------

$('#Info_Escuela').submit(function(e){
    var resultado = validarCampoEscuela();
    if(resultado == false){
        e.preventDefault();
    }
    
    })
    
    function validarCampoEscuela(){
    
        $('.alert').remove();
        var correo =$('#CorreoUsuario').val(),
            pass =$('#ContraUsuario').val(),
            nombre =$('#NombreUsuario').val()
    
            var resultado = true;
        if(correo ==""||correo==null){
            cambiarColor("correo");
            mostrarAlertaCorreoSchool("Campo obligatorio")
            resultado = false;
    
        }else{
            var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if(!expresion.test(correo)){
                cambiarColor("correo");
                mostrarAlertaCorreoSchool ("Por favor ingrese un correo valido");
                resultado = false;
    
            }
        }
    
        if(pass ==""||pass==null){
            cambiarColor("pass");
            mostrarAlertaPassSchool("Campo obligatorio")
            resultado = false;
    
        }else{
            var lenght = /^.{4,12}$/;
            if(!lenght.test(pass)){
                cambiarColor("pass");
                mostrarAlertaPassSchool ("Por favor ingrese una contraseña valida");
                resultado = false;
            }
        }

        if(nombre ==""||nombre==null){
            cambiarColor("nombre");
            mostrarAlertaNombreSchool("Campo obligatorio")
            resultado = false;
    
        }else{
            var nombr = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
            if(!nombr.test(nombre)){
                cambiarColor("nombre");
                mostrarAlertaNombreSchool ("Por favor ingrese un nombre valido");
                resultado = false;
            }
        }
        return resultado;
    
    }
    


    // VALIDACION DE CREACION DE CURSO ---------------------------------

    $('#Crear_curso').submit(function(e){
        var resultado = validarCurso();
        if(resultado == false){
            e.preventDefault();
        }
        })
        
        function validarCurso(){
        
            $('.alert').remove();
            var catego =$('#catego').val(),
                nombrec =$('#nombcur').val(),
                descri  =$('#descrip').val()
                precio  =$('#preciocurso').val()
                
                var resultado = true;
            
            if(nombrec ==""||nombrec==null){
                cambiarColor("nombrec");
                mostrarAlertaNombreCurso("Campo obligatorio")
                resultado = false;
        
            }else{
                var nombrc = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
                if(!nombrc.test(nombrec)){
                    cambiarColor("nombrec");
                    mostrarAlertaNombreCurso ("Por favor ingrese un nombre valido");
                    resultado = false;
                }
            }

            if(catego ==""||catego==null){
                cambiarColor("categ");
                mostrarAlertaNombreCategoria("Campo obligatorio")
                resultado = false;
        
            }else{
                var categ = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
                if(!categ.test(catego)){
                    cambiarColor("categ");
                    mostrarAlertaNombreCategoria ("Por favor ingrese un nombre valido");
                    resultado = false;
                }
            }

            if(descri ==""||descri==null){
                cambiarColor("descri");
                mostrarAlertaDescripcionCurso("Campo obligatorio")
                resultado = false;
            }

            if(precio ==""||precio==null){
                cambiarColor("precio");
                mostrarAlertaPrecioCurso("Campo obligatorio")
                resultado = false;
            }

            return resultado;
        
        }
        

// VALIDACION CAMPOS DE ESTUDIANTE -------------------------------

$('#Perfil_Estudiante').submit(function(e){
    var resultado = validarCampoEstudiante();
    if(resultado == false){
        e.preventDefault();
    }
    
    })
    
    function validarCampoEstudiante(){
    
        $('.alert').remove();
        var correo =$('#CorreoUsuario').val(),
            pass =$('#ContraUsuario').val(),
            nombre =$('#NombreUsuario').val()
    
            var resultado = true;
        if(correo ==""||correo==null){
            cambiarColor("correo");
            mostrarAlertaCorreoEstud("Campo obligatorio")
            resultado = false;
    
        }else{
            var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if(!expresion.test(correo)){
                cambiarColor("correo");
                mostrarAlertaCorreoEstud ("Por favor ingrese un correo valido");
                resultado = false;
    
            }
        }
    
        if(pass ==""||pass==null){
            cambiarColor("pass");
            mostrarAlertaPassEstud("Campo obligatorio")
            resultado = false;
    
        }else{
            var lenght = /^.{4,12}$/;
            if(!lenght.test(pass)){
                cambiarColor("pass");
                mostrarAlertaPassEstud ("Por favor ingrese una contraseña valida");
                resultado = false;
            }
        }

        if(nombre ==""||nombre==null){
            cambiarColor("nombre");
            mostrarAlertaNombreEstud("Campo obligatorio")
            resultado = false;
    
        }else{
            var nombr = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
            if(!nombr.test(nombre)){
                cambiarColor("nombre");
                mostrarAlertaNombreEstud ("Por favor ingrese un nombre valido");
                resultado = false;
            }
        }
        return resultado;
    
    }
          
    function cambiarColor(dato){
    $('#'+ dato).css({
        border: "1px solid #dd5144"
    });
    }
//-------------------------------
    function mostrarAlertaCorreoSchool(texto){
        $('#CorreoUsuario').before('<div class= "alert" > Error: ' + texto +'</div>')
    }
    
    
    function mostrarAlertaPassSchool(texto){
        $('#ContraUsuario').before('<div class= "alert" > Error: ' + texto +'</div>')
    }

    
    function mostrarAlertaNombreSchool(texto){
        $('#NombreUsuario').before('<div class= "alert" > Error: ' + texto +'</div>')
    }
//----------------------------
    
    function mostrarAlertaNombreCurso(texto){
        $('#nombcur').before('<div class= "alert" > Error: ' + texto +'</div>')
    }

    
    function mostrarAlertaNombreCategoria(texto){
        $('#catego').before('<div class= "alert" > Error: ' + texto +'</div>')
    }
    
    function mostrarAlertaDescripcionCurso(texto){
        $('#descrip').before('<div class= "alert" > Error: ' + texto +'</div>')
    }

    function mostrarAlertaPrecioCurso(texto){
        $('#preciocurso').before('<div class= "alert" > Error: ' + texto +'</div>')
    }
    

//-------------------------------

function mostrarAlertaCorreoEstud(texto){
    $('#CorreoUsuario').before('<div class= "alert" > Error: ' + texto +'</div>')
}


function mostrarAlertaPassEstud(texto){
    $('#ContraUsuario').before('<div class= "alert" > Error: ' + texto +'</div>')
}


function mostrarAlertaNombreEstud(texto){
    $('#NombreUsuario').before('<div class= "alert" > Error: ' + texto +'</div>')
}
