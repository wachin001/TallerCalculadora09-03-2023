
function renderizarGUI(){
    
    //Div Container (Div #1)
    const divContainer= document.createElement("div")
    
    divContainer.setAttribute("class", "container")
   
    document.body.appendChild(divContainer);
  
    //Div row (Div #2)
    const divRow= document.createElement("div")
    divRow.setAttribute("class", "row");
    divContainer.appendChild(divRow);

    //Div content (Div #3)
    const divContent= document.createElement("div")
    divContent.setAttribute("class", "col-lg-12");
    divContent.setAttribute("id", "content");
    divRow.appendChild(divContent);
    
    //Div Calculadora (Div #4)
    const divCalculadora= document.createElement("div")
    divCalculadora.setAttribute("class", "calculator");
    divContent.appendChild(divCalculadora);


    //Div Pantalla (Div #5)
    const divPantalla= document.createElement("div")
    divPantalla.setAttribute("class", "screen");
    divPantalla.setAttribute("id", "screen");
    divCalculadora.appendChild(divPantalla);
    
    //ul Botones (ul #1)
    const ulBotones= document.createElement("ul")
    ulBotones.setAttribute("class", "buttons");
    ulBotones.setAttribute("id", "buttons");
    divCalculadora.appendChild(ulBotones);

   
  
    for(var i = 0; i < 18; i++) {
	    
        var li = document.createElement("li");

        var aElement = document.createElement("a");
        aElement.setAttribute("href", "#");

        if(i == 0){
          
            
            aElement.setAttribute("data-key", "clear");
            aElement.innerHTML = "C";
         
        } else if(i == 1) {
            
            
            aElement.setAttribute("data-key", "-");
            aElement.innerHTML = "-";

        } else if(i == 2) {

            
            aElement.setAttribute("data-key", "/");
            aElement.innerHTML = "/";

        } else if(i == 3) {
           
            aElement.setAttribute("data-key", "*");
            aElement.innerHTML = "*";


        } else if(i == 4) {
           
            aElement.setAttribute("data-key", "7");
            aElement.innerHTML = "7";


        } else if(i == 5) {
            
            aElement.setAttribute("data-key", "8");
            aElement.innerHTML = "8";


        } else if(i == 6) {
            
            aElement.setAttribute("data-key", "9");
            aElement.innerHTML = "9";


        } else if(i == 7) {
            
            aElement.setAttribute("data-key", "-");
            aElement.innerHTML = "-";


        } else if(i == 8) {
           
            aElement.setAttribute("data-key", "4");
            aElement.innerHTML = "4";


        } else if(i == 9) {
           
            aElement.setAttribute("data-key", "5");
            aElement.innerHTML = "5";


        } else if(i == 10) {
           
            aElement.setAttribute("data-key", "6");
            aElement.innerHTML = "6";


        } else if(i == 11) {
           
            aElement.setAttribute("data-key", "+");
            aElement.innerHTML = "+";


        } else if(i == 12) {
           
            aElement.setAttribute("data-key", "1");
            aElement.innerHTML = "1";


        } else if(i == 13) {
           
            aElement.setAttribute("data-key", "2");
            aElement.innerHTML = "2";


        } else if(i == 14) {
           
            aElement.setAttribute("data-key", "3");
            aElement.innerHTML = "3";


        } else if(i == 15) {
           
            aElement.setAttribute("data-key", "equal");
            aElement.setAttribute("class", "equal tall");
            aElement.innerHTML = "=";


        } else if(i == 16) {
           
            aElement.setAttribute("data-key", "0");
            aElement.setAttribute("class", "wide shift");
            aElement.innerHTML = "0";


        } else if(i == 17) {
           
            aElement.setAttribute("data-key", ".");
            aElement.setAttribute("class", "shift");
            aElement.innerHTML = ".";
            


        }

        li.appendChild(aElement);

	    ulBotones.appendChild(li);

    }


}

renderizarGUI();


//FUNCIONAIDAD DE CALCULADORAA
let screen = document.getElementById('screen');
const buttons = document.querySelectorAll("#buttons a");

for (const button of buttons) {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        if (e.target.dataset.key == 'equal') {
            screen.textContent = eval(screen.textContent);
            if (screen.textContent.length > 8) {
                screen.textContent = eval(screen.textContent).toFixed(8);
            }
        } else if (e.target.dataset.key == 'clear') {
            screen.textContent = '';
        } else {
            screen.textContent = screen.textContent + e.target.dataset.key;
        }   
    });
}
