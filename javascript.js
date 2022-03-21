//-------------------------
let sumare = (datos,n)
=>
{
    if(n>0)
    {
        let x =datos[n] + sumare(datos,n-1);
        console.log("x: "+x);
        return (x)
    }
    else{
        console.log("Ultima llamada sumarec:");
        return (datos[0])
        
    }
}


let datos = [23,4,5,177,8,190]

let BtnUno = document.getElementById("btnAccion");

BtnUno.addEventListener('cick',async (e)=>{
    console.log(alumnoconNombre)
})


sumaUno = (valor)=> valor*2;
sumaDos = (valor)=> valor-2;



const listaOriginal =[1,2,3,4,5];

const nuevaLista = listaOriginal.map((valor) => valor*2);
const nuevaListaRedu = listaOriginal.map(SumaDos);

const alumnos =[

{nombre :'juan', apellidos : 'merino diaz', matricula: 111 , edad: 20},
{nombre :'rafael', apellidos : 'nava diaz', matricula: 323, edad: 12},
{nombre :'antonio', apellidos : 'merino gonzaes', matricula: 233 , edad: 40},
{nombre :'hiperb', apellidos : 'mhernandesz rehgio', matricula: 531 , edad: 22},

]

extraNombres =(item) => item.nombre+item.apellidos;

const alumnoconNombre = alumnos.map(extraNombres);

const alumnoconotroA = alumnos.map(item =>{
    return {
        nombre: item.nombre,
        apellidos: item.apellidos,
        matricula: item.matricula,
        edad: item.edad,
        revisado: 'ok'
    }
})

//const alumnoconMasEdad = alumnosConEdad

const mensaje_saludar = saludar("roberto")
mensaje_saludar("bienvenido")

//---------------------------
function saludar (nombre){
    return "hola"+nombre;
}

function mensaje_saluda(dato,mensaje,nombre){
    console.log(nombre+mensaje)
}

mensaje_saluda(saludar,"bienvenido nuevamente","kevin")
 