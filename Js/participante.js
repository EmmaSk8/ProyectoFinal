class Participante {
    constructor() {
        this.x = 1;
        this.y = 1;
        this.color = '#820C01';
        this.jeringa1 = false;
        this.jeringa2 = false;
    }

    setPosicion(x,y)
    {
        this.x = x;
        this.y = y;
    }

    dibujar()
    {
        ctx.drawImage(figuramap, 1*figuraWith,1*figuraWith, figuraWith,figuraWith, this.x*anchoF,this.y*altoF, anchoF,altoF);
    }

    arriba()
    {
        if(!this.colision(this.x,this.y-1))
        {
            this.y--;
            if(this.y < altohospital/2)
            {
                if(sala == sala3)
                    sala = sala1;
                else if(sala == sala4)
                    sala = sala2;
            }
            personaje.interactuar();
        }
    }
    abajo()
    {
        if(!this.colision(this.x,this.y+1))
        {
            this.y++;
            if(this.y >= altohospital/2)
            {
                if(sala == sala1)
                    sala = sala3;
                else if(sala == sala2)
                    sala = sala4;
            }
            personaje.interactuar();
        }
    }
    izquierda()
    {
        if(!this.colision(this.x-1,this.y))
        {
            this.x--;
            if(this.x < anchohospital/2)
            {
                if(sala == sala2)
                    sala = sala1;
                else if(sala == sala4)
                    sala = sala3;
            }
            personaje.interactuar();
        }
    }
    derecha()
    {
        if(!this.colision(this.x+1,this.y))
        {
            this.x++;
            if(this.x >= anchohospital/2)
            {
                if(sala == sala1)
                    sala = sala2;
                else if(sala == sala3)
                    sala = sala4;
            }
            personaje.interactuar();
        }
    }

    colision(x,y)
    {
        if(hospital[y][x] == pared)
            return true;
        else
            return false;
    }

    colisioncovid(x,y)
    {
        if(this.x == x && this.y == y)
        {
            alert('Un covid te ha matado :(');
            reiniciar();
        }
    }

    interactuar()
    {
        let objeto = hospital[this.y][this.x];
        
        if(objeto == jeringa)
        {
            hospital[this.y][this.x] = suelo;

            if(this.jeringa1)
            {
                alert("Has encontrado otra vacuna!!!!! Ya tienes dos!!");
                this.jeringa2 = true;
            }
            else
            {
                alert("Has encontrado una vacuna!!");
                this.jeringa1 = true;
            }
        }
        else if(objeto == salida)
        {
            if(this.jeringa2)
            {
                alert("HAS ESCAPADO DEL HOSPITAL!!!");
                reiniciar();
            }
            else if(this.jeringa1)
            {
                alert("Tienes una vacuna... pero necesitas dos vacunas!!!");
            }
            else
                alert("salida cerrada");
        }
    }
}