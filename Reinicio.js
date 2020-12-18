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