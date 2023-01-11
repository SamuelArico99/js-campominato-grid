const playButton = document.getElementById('play');
playButton.addEventListener('click',
    
      function () {
        document.getElementById("container").style.display = 'block';
      }

)




function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) + min;
} 

const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < 100; i++) {



    const newCell = createNewCell();
    gridContainer.append(newCell);


    
}

function createNewCell(params) {
    const cell = document.createElement('div')
    cell.classList.add('cell');
    cell.addEventListener('click',
       
       function led() {

         if (this.classList.contains('clicked')) {
            this.classList.remove('clicked');
         }
         else {
            this.classList.add('clicked');
            console.log(numeroRandom);
         }

       }

);

const numeroRandom = generaNumeroRandom(1, 100);
cell.innerHTML = numeroRandom;

return cell;

};

