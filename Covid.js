class Covid {
    constructor(x,y) {
        this.x = x;
        this.y = y;

        this.direcion = random(0,3);

        this.retraso = FPS;
        this.contador = 0;
    }

    setPosicion(x,y)
    {
        this.x = x;
        this.y = y;
    }

    dibujar()
    {
        ctx.drawImage(figuramap, 0*figuraWith,1*figuraWith, figuraWith,figuraWith, this.x*anchoF,this.y*altoF, anchoF,altoF);
    }

    colision(x,y)
    {
        if(hospital[y][x] == pared || hospital[y][x] == salida || hospital[y][x] == jeringa)
            return true;
        else
            return false;
    }

    intentarMover()
    {
        personaje.colisioncovid(this.x,this.y);

        if(this.contador < this.retraso)
            this.contador++;
        else
        {
            this.contador = 0;
            this.direcion = random(0,3);
            this.mover();
        }
    }

    mover()
    {
        switch (this.direcion) {
            case 0: // ARRIBA
                if(!this.colision(this.x,this.y-1))
                    this.y--;
                else
                {
                    this.direcion = random(0,3);
                    this.mover();
                }
            break;

            case 1: // ABAJO
                if(!this.colision(this.x,this.y+1))
                    this.y++;
                else
                {
                    this.direcion = random(0,3);
                    this.mover();
                }
            break;

            case 2: // IZQUIERDA
                if(!this.colision(this.x-1,this.y))
                    this.x--;
                else
                {
                    this.direcion = random(0,3);
                    this.mover();
                }
            break;

            case 3: // DERECHA
                if(!this.colision(this.x+1,this.y))
                    this.x++;
                else
                {
                    this.direcion = random(0,3);
                    this.mover();
                }
            break;
        
            default:
                break;
        }
    }
}
