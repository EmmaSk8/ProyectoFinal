class Suerito
{
    

    
        constructor(x,y)
    {
        this.x = x;
        this.y = y;

        this.fotograma = 0; 
        this.contador = 0;
        this.retraso = 7;
    }

    cambioFotograma ()
    {
       if (this.fotograma < 3 )
       this.fotograma ++ ;

       else this.fotograma = 0 ;

    }

    actualizar ()
    {
        if (this.contador < this.retraso )
        this.contador ++ ;

        else
        {
            this.contador = 0 ;
            this.cambioFotograma ();
            
        }  
    }
}