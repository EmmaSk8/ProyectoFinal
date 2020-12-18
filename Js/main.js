let canvas;
let canvasWidth = 750;
let canvasHeight = 500;
let ctx;
let FPS = 60;

//ancho y alto de cada celda
let anchoF = 50;
let altoF = 50;
let figuraWith = 32;

let pared = 0;
let salida = 1;
let suelo = 2;
let jeringa = 3;

let personaje;
let figuramap;
let suero = [];
let aviso = [];
let coronavirus = [];


let anchohospital = 30;
let altohospital = 20;
let anchoEspacio = 15;
let altoEspacio = 10;

let sala;
let sala1;
let sala2;
let sala3;
let sala4;

//cada numero representa una cela en el hospital
let hospital = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 2, 0, 2, 2, 0, 0, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],



];

function colocarObjetos(objeto) {
    colocado = false;

    while (!colocado) {
        fila = random(1, altohospital - 2);
        columna = random(1, anchohospital - 2);
        console.log('random: ' + fila + ', ' + columna);

        for (let y = fila; y < altohospital - 1; y++) {
            for (let x = columna; x < anchohospital - 1; x++) {
                if (hospital[y][x] == suelo) {
                    console.log(objeto + ' en pos (' + y + ', ' + x + ')');
                    hospital[y][x] = objeto;
                    colocado = true;
                    break;
                }
            }

            if (colocado)
                break;
        }
    }
}

function random(min,max)
{
    return num = Math.floor(Math.random() * (max - min + 1)) + min;
}

function inicializar()
{
    canvas = document.getElementById("miCanvas");
    canvas.setAttribute("id", "canvas");
    canvas.style.width = canvasWidth;
    canvas.style.height = canvasHeight;
    canvas.style.border = "3px solid black"
    document.body.appendChild(canvas);
    
    ctx = canvas.getContext('2d');
    
    figuramap = new Image();
    figuramap.src = "img/figuramap.png"

    sala1 = new Sala(0,0, anchoEspacio,altoEspacio, 0,0);
    sala2 = new Sala(anchohospital/2,0, anchoEspacio,altoEspacio, 0,0);
    sala3 = new Sala(0,altohospital/2, anchoEspacio,altoEspacio, 0,0);
    sala4 = new Sala(anchohospital/2,altohospital/2, anchoEspacio,altoEspacio, 0,0);
    sala = sala1;

    personaje = new Participante();

    coronavirus.push(new Covid(4,8));
    coronavirus.push(new Covid(13,1));
    coronavirus.push(new Covid(8,6));
    coronavirus.push(new Covid(22,1));
    coronavirus.push(new Covid(20,7));
    coronavirus.push(new Covid(3,18));
    coronavirus.push(new Covid(25,12));
    
    //aviso.push(new SigSala (1,1));

    suero.push(new Suerito(1,3));
    suero.push(new Suerito(4,1));
    suero.push(new Suerito(4,3));
    suero.push(new Suerito(10,2));
    suero.push(new Suerito(2,9));
    suero.push(new Suerito(12,5));
    suero.push(new Suerito(8,5));
    suero.push(new Suerito(26,13));
    suero.push(new Suerito(8,22));
    suero.push(new Suerito(18,8));
    suero.push(new Suerito(16,6));
    suero.push(new Suerito(15,10));
    suero.push(new Suerito(11,2));
    suero.push(new Suerito(4,19));
    suero.push(new Suerito(27,4));
    suero.push(new Suerito(17,17));
    suero.push(new Suerito(24,10));
    suero.push(new Suerito(14,7));
    suero.push(new Suerito(9,9));
    suero.push(new Suerito(11,9));
    suero.push(new Suerito(10,14));
    suero.push(new Suerito(13,16));

    colocarObjetos(salida);
    colocarObjetos(jeringa);
    colocarObjetos(jeringa);

    document.addEventListener('keydown',function(tecla)
    {
        switch (tecla.key) {
            case 'ArrowDown':
                personaje.abajo();
                // sala.abajo();
            break;
    
            case 'ArrowUp':
                personaje.arriba();
                // sala.arriba();
            break;
    
            case 'ArrowLeft':
                personaje.izquierda();
                // sala.izquierda();
            break;
    
            case 'ArrowRight':
                personaje.derecha();
                // sala.derecha();
            break;

            case 'r':
                reiniciar();
            break;
        
            default:
                break;
        }
    });
    
    setInterval(principal, 1000/FPS);
}

function borraCanvas()
{
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

function principal()
{
    borraCanvas();

    // dibujahospital();
    sala.dibujar();

    // personaje.dibujar();

    coronavirus.forEach(covid => {
        covid.intentarMover();
        // covid.dibujar();
    });

    suero.forEach(suerito => {
        suerito.actualizar();
    });

  
}

function reiniciar()
{
    for(let y = 1; y < altohospital-1; y++)
    {
        for(let x = 1; x < anchohospital-1; x++)
        {
            if(hospital[y][x] == salida || hospital[y][x] == jeringa)
            {
                hospital[y][x] = suelo;
            }
        }
    }

    sala = sala1;

    personaje.setPosicion(1,1);
    personaje.jeringa1 = false;
    personaje.jeringa2 = false;

    coronavirus[0].setPosicion(1,8);
    coronavirus[1].setPosicion(13,1);
    coronavirus[2].setPosicion(8,6);
    coronavirus.forEach(covid => {
        covid.contador = 0;
    });

    colocarObjetos(salida);
    colocarObjetos(jeringa);
    colocarObjetos(jeringa);
}

