class Sala
{
    constructor(xInicial,yInicial,anchoInicial,altoInicial,posXInicial,posYInicial)
    {
        this.x = xInicial;
        this.y = yInicial;
        this.ancho = anchoInicial;
        this.alto = altoInicial;
        this.posX = posXInicial;
        this.posY = posYInicial;
    }

    dibujar()
    {
        // hospital
        for(let y = this.y; y < this.alto + this.y; y++)
        {
            for(let x = this.x; x < this.ancho + this.x; x++)
            {
                let figura = hospital[y][x];
                ctx.drawImage(figuramap, figura*figuraWith,0, figuraWith,figuraWith, (x - this.x + this.posX)*anchoF,(y - this.y + this.posY)*altoF, anchoF,altoF);
            }
        }

        // personaje
        if((personaje.x >= this.x) && (personaje.x < this.x + this.ancho) && (personaje.y >= this.y) && (personaje.y < this.y + this.alto))
            ctx.drawImage(figuramap, 1*figuraWith,1*figuraWith, figuraWith,figuraWith, (personaje.x - this.x + this.posX)*anchoF,(personaje.y-this.y+this.posY)*altoF, anchoF,altoF);

        // coronavirus
        coronavirus.forEach(covid => {
            if((covid.x >= this.x) && (covid.x < this.x + this.ancho) && (covid.y >= this.y) && (covid.y < this.y + this.alto))
                ctx.drawImage(figuramap, 0*figuraWith,1*figuraWith, figuraWith,figuraWith, (covid.x - this.x + this.posX)*anchoF,(covid.y-this.y+this.posY)*altoF, anchoF,altoF);
        });

        // Suero
        suero.forEach(suerito => {
            if((suerito.x >= this.x) && (suerito.x < this.x + this.ancho) && (suerito.y >= this.y) && (suerito.y < this.y + this.alto))
                ctx.drawImage(figuramap, suerito.fotograma*figuraWith,2*figuraWith, figuraWith,figuraWith, (suerito.x - this.x + this.posX)*anchoF,(suerito.y-this.y+this.posY)*altoF, anchoF,altoF);
        });

       
    }

    arriba()
    {
        if(this.y > 0)
        {
            this.y--;
        }
    }
    abajo()
    {
        if(this.y < altohospital - this.alto)
        {
            this.y++;
        }
    }
    izquierda()
    {
        if(this.x > 0)
        {
            this.x--;
        }
    }
    derecha()
    {
        if(this.x < anchohospital - this.ancho)
        {
            this.x++;
        }
    }

}