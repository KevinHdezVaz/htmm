 
 


let datos = [23,4,5,177,8,190]

let BtnUno = document.getElementById( "try" );
 

BtnUno.addEventListener('click',async (e)=>{
    console.log(sumaArreglo)
})


sumaUno = (valor)=> valor*2;
sumaDos = (valor)=> valor-2;




//REDUCE
const listaOriginal =[1,2,3,4,5];

//const nuevaLista = listaOriginal.map((valor) => valor*2);
//const nuevaListaRedu = listaOriginal.map(SumaDos);

let sumaArreglo = listaOriginal.reduce((acc,item)=>  acc + item,0)
suma=0;
 
//////////////////////////


const alumnos =[

{nombre :'juan', apellidos : 'merino diaz', matricula: 111 , edad: 20,op:"estudiante" },
{nombre :'rafael', apellidos : 'nava diaz', matricula: 323, edad: 12,op:"estudiante"},
{nombre :'antonio', apellidos : 'merino gonzaes', matricula: 233 , edad: 40,op:"estudiante"},
{nombre :'hiperb', apellidos : 'mhernandesz rehgio', matricula: 531 , edad: 22,op:"profesor"},

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
///REDUCE CON OBJETOS
const listaprofes = alumnos.filter (item => item.op =="profesor");

let sumaprofe = alumnos.reduce((acc,item)=> 
{
 if(item.op==="profesor")
    return acc+1
    else return acc
}  
 ,0)

 console.log("la suma es de profes "+sumaprofe);

 //////////////////////


//const alumnoconMasEdad = alumnosConEdad

//const mensaje_saludar = saludar("roberto")
//mensaje_saludar("bienvenido")

//---------------------------
function saludar (nombre){
    return "hola"+nombre;
}

function mensaje_saluda(dato,mensaje,nombre){
    console.log(nombre+mensaje)
}

mensaje_saluda(saludar,"bienvenido nuevamente","kevin")
 