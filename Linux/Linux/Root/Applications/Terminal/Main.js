const INPUT_TEXT = document.getElementById('__input_text__');
const RENDER_TEXT = document.getElementById('__render_text__');
const CONTAINER = document.getElementById('____terminal____');

var commandedArr = [];
var commandedIndex = 0;
var addedCursor = '';
INPUT_TEXT.onkeyup = function (e) {
    addedCursor = 
    INPUT_TEXT.value.slice(0, INPUT_TEXT.selectionEnd) + 
    `<div class="terminal__text-cursor"> ${INPUT_TEXT.value.charAt(INPUT_TEXT.selectionEnd)} </div>` +
    INPUT_TEXT.value.slice(INPUT_TEXT.selectionEnd, -1);
    RENDER_TEXT.innerHTML = addedCursor;

    if(e.keyCode == 13) {
        updateCommanded(INPUT_TEXT.value);    
        if(INPUT_TEXT.value != '') {
            commandedArr.push(INPUT_TEXT.value);
            commandedIndex = commandedArr.length;
        }
        
        RENDER_TEXT.innerHTML = INPUT_TEXT.value = '';
    }
    else if(e.keyCode == 38) {
        commandedIndex --;
        if(commandedIndex < 0) {
            commandedIndex = 0;
        }
        if(commandedArr[commandedIndex]) {
            RENDER_TEXT.innerHTML = commandedArr[commandedIndex];
        }
    }
    else if(e.keyCode == 40) {
        commandedIndex ++;
        if(commandedIndex > commandedArr.length) {
            commandedIndex = commandedArr.length;
        }
        if(commandedArr[commandedIndex]) {
            RENDER_TEXT.innerHTML = commandedArr[commandedIndex];
        }
    }
    else if(e.keyCode == 17 && e.keyCode == 67) {
        console.log('canceled!')
    }
    console.log(e.keyCode, commandedArr)
}


function updateCommanded(text) {
    var tmp = document.createElement('div');
    tmp.setAttribute('class', 'terminal-commanded');
    tmp.innerHTML = 
    `<span class="terminal__user">hoangduckiemluyen</span>:
    <span class="terminal__dir">~</span>
    <span class="terminal__access">$</span>
    <span id="__render_text__" class="terminal__text">${INPUT_TEXT.value}</span>`;
    CONTAINER.appendChild(tmp);

    commandedMessage('bash: '+ text +': command not found! ')
}

function commandedMessage(text) {
    var tmp = document.createElement('div');
    tmp.setAttribute('class', 'terminal__message');
    tmp.innerHTML = text;
    CONTAINER.appendChild(tmp);
}
