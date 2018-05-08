const contenitore = document.getElementById("segnaposto");
function crea_paragrafo(){
        const nuovo_paragrafo = document.createElement('p');
        const contenuto_paragrafo = document.createTextNode("Lorem ipsum...");
             // crea il legame padre-figlio fra il paragrafo e il suo contenuto
        nuovo_paragrafo.appendChild(contenuto_paragrafo);
        ;
                if (contenitore) {
                    contenitore.appendChild(nuovo_paragrafo);
                                }
                        contenitore.style.visibility = "visible";
                            }
    document.querySelectorAll("button")[0].addEventListener('click', crea_paragrafo);  
    
    
function elimina_paragrafo(){
                    /*const segnaposto1 = document.getElementById(segnaposto1);*/
                    

                   /* if(contenitore){
                        contenitore.removeChild(contenitore.nuovo_paragrafo);
                         }
             }*/
             if (contenitore.style.visibility === 'visible') 
             {
                contenitore.style.visibility = "hidden";
            } 
        }
     
          
          document.querySelectorAll("button")[1].addEventListener('click', elimina_paragrafo);   
            
       