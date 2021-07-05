const progressWrapper = document.querySelector('.progress-wrapper');
const progressBar = document.querySelector('.progress__bar');

const startButton = document.getElementById('btn')

progressBar.style.width = '0%';

let counter = 0;

let TIMER;

startButton.addEventListener( 'click', () => {

    if( startButton.textContent === 'start' ) {
        startButton.textContent = 'stop';
        TIMER = setInterval( changeWidth, 100 );
    }

    else {
        startButton.textContent = 'start';
        clearInterval(TIMER);
    }

        

});


    const paragFrag = new DocumentFragment();
    const parag = document.createElement('p');

    paragFrag.appendChild(parag);
    progressWrapper.prepend(paragFrag);
    parag.textContent = '0%';

function changeWidth() {

    parag.textContent = `${counter}%`;        

    if( counter < 100 ) {

        progressBar.style.width = counter + '%';

        counter++;
    }

    else {
        counter = 0;
        //clearInterval(TIMER)
    }

}




