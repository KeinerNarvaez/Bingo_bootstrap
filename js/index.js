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
    for (let vecesIteracion = 0; vecesIteracion < 5; vecesIteracion++) {
        let matriz = [];
        for (let vecesIteracion2 = 0; vecesIteracion2 < 5; vecesIteracion2++) {
            let resultado = Math.floor(Math.random() * 100);
            matriz.push(resultado);
        }
        random.push(matriz);
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
                        for (let iteracion = 0; iteracion <5; iteracion++) {
                            for (iteracionMultiplo = 0; iteracionMultiplo < 5; iteracionMultiplo++) {
                                if (iteracion=== iteracionMultiplo || iteracionMultiplo+iteracion===4) {
                                    claseRojo='rojo'
                                }  else{
                                    claseRojo=""
                                }      
                                print += `<h1 class="separacion_numero text-bold display-5 `+claseRojo+`">`+random[iteracion][iteracionMultiplo]+`</h1>`;
                            }                          
                        }
        print += `</div>
                </div>
                </div>`;
    }
    random=[];
    for (let vecesIteracion = 0; vecesIteracion < 5; vecesIteracion++) {
        let matriz = [];
        for (let vecesIteracion2 = 0; vecesIteracion2 < 5; vecesIteracion2++) {
            let resultado = Math.floor(Math.random() * 100);
            matriz.push(resultado);
        }
        random.push(matriz);
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
                        
                        for (let iteracion = 0; iteracion <5; iteracion++) {
                            for (iteracionMultiplo = 0; iteracionMultiplo < 5; iteracionMultiplo++) {
                                if (iteracionMultiplo*iteracion==8||iteracionMultiplo+iteracion==2||iteracionMultiplo+iteracion===0||iteracion+iteracionMultiplo==(iteracion+1)*2 || iteracion+iteracionMultiplo==4) {
                                    claseRojo='rojo'
                                }  else{
                                    claseRojo=""
                                }      
                                print += `<h1 class="separacion_numero text-bold display-5 `+claseRojo+`">`+random[iteracion][iteracionMultiplo]+`</h1>`;
                            }                          
                        }
        print += `</div>
                </div>
                </div>`;
    }

    document.getElementById('pagina').innerHTML = print;
});


