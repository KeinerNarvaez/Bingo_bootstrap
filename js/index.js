document.addEventListener('DOMContentLoaded', function () {
    let tabla = [];
    let multiplo = [];
    let iteracionTabla;
    let iteracionMultiplo;
    let resultado;
    let numeroTabla;
    let numeroMultiplo;
    let print = '';
    let numerorojo;
    let random=[];

    for (iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        numeroTabla = iteracionTabla + 1;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeroMultiplo = iteracionMultiplo + 1;
            resultado = numeroTabla * numeroMultiplo;
            multiplo.push(resultado);
        }
        tabla.push(multiplo);
    }
    console.log(tabla);

    for (iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        print += `<div class="card row targeta" style="width: 28rem;">
                <div class="card-body row">
                <div class="align-items-center titulo" style="width: 5rem;">
                   <h1 class="text-bold display-1 card-title  col">B</h1>
                </div>
                <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">I</h1>
                 </div>
                 <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">N</h1>
                 </div>
                 <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">G</h1>
                 </div>
                 <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">O</h1>
                 </div>
                 <div class="hr"></div>
                  
                 <div class="parte_numerica">`;

        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numerorojo = iteracionMultiplo%5;
            if (numerorojo === iteracionTabla) {
                claseRojo='rojo'
            }  else{
                claseRojo=""
            }      
            print += `<h1 class="separacion_numero text-bold `+claseRojo+`">`+tabla[iteracionTabla][iteracionMultiplo]+`</h1>`;
        }
        print +=`</div>
                </div>
                </div>`;
    }
    for (let index = 0; index < 5; index++) {
        let iteracion = [];
        for (let i = 0; i < 5; i++) {
            let resultado = Math.floor(Math.random() * 100);
            iteracion.push(resultado);
        }
        random.push(iteracion);
    }
    
    console.log(random);

    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        print += `<div class="card row targeta" style="width: 28rem;">
                <div class="card-body row">
                <div class="align-items-center titulo" style="width: 5rem;">
                   <h1 class="text-bold display-1 card-title  col">B</h1>
                </div>
                <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">I</h1>
                 </div>
                 <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">N</h1>
                 </div>
                 <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">G</h1>
                 </div>
                 <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">O</h1>
                 </div>
                 <div class="hr"></div>
                  
                 <div class="parte_numerica">`;
                        for (let i = 0; i <5; i++) {
                            for (iteracionMultiplo = 0; iteracionMultiplo < 5; iteracionMultiplo++) {
                                if (i === iteracionMultiplo || iteracionMultiplo+i===4) {
                                    claseRojo='rojo'
                                }  else{
                                    claseRojo=""
                                }      
                                print += `<h1 class="separacion_numero text-bold display-5 `+claseRojo+`">`+random[i][iteracionMultiplo]+`</h1>`;
                            }                          
                        }
        print += `</div>
                </div>
                </div>`;
    }
    random=[];
    for (let index = 0; index < 5; index++) {
        let iteracion = [];
        for (let i = 0; i < 5; i++) {
            let resultado = Math.floor(Math.random() * 100);
            iteracion.push(resultado);
        }
        random.push(iteracion);
    }
    console.log(random);
    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        print += `<div class="card row targeta" style="width: 28rem;">
                <div class="card-body row">
                <div class="align-items-center titulo" style="width: 5rem;">
                   <h1 class="text-bold display-1 card-title  col">B</h1>
                </div>
                <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">I</h1>
                 </div>
                 <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">N</h1>
                 </div>
                 <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">G</h1>
                 </div>
                 <div class="align-items-center titulo" style="width: 5rem;">
                    <h1 class="text-bold display-1 card-title  col">O</h1>
                 </div>
                 <div class="hr"></div>
                  
                 <div class="parte_numerica">`;
                        
                        for (let i = 0; i <5; i++) {
                            for (iteracionMultiplo = 0; iteracionMultiplo < 5; iteracionMultiplo++) {
                                if (iteracionMultiplo*i==8||iteracionMultiplo+i==2||iteracionMultiplo+i===0||i+iteracionMultiplo==(i+1)*2 || i+iteracionMultiplo==4) {
                                    claseRojo='rojo'
                                }  else{
                                    claseRojo=""
                                }      
                                print += `<h1 class="separacion_numero text-bold display-5 `+claseRojo+`">`+random[i][iteracionMultiplo]+`</h1>`;
                            }                          
                        }
        print += `</div>
                </div>
                </div>`;
    }

    document.getElementById('pagina').innerHTML = print;
});


