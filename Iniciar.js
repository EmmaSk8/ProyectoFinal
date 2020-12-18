
function inicializar()
{
    canvas = document.createElement("CANVAS");
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