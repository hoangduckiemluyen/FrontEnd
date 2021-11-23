
class Application extends Frame {

    constructor(name = 'Application') {
        super();
        this.__Name = name;
        this.createTask(name);
        this.createProcess(name);
        this.createFrame(name);
        this.eventActive();
        this.eventMaximize();
        this.eventDrag();
        this.eventClose(name);
        this.open();
        this.__Frame.style.zIndex = 999;
    }

    eventMaximize() {
        var frame = this.__Frame;
        
        var touchtime = 0;
        this.__Topbar.onclick = function() {
            if (touchtime == 0) {
                // set first click
                touchtime = new Date().getTime();
            } else {
                // compare first click to this click and see if they occurred within double click threshold
                if (((new Date().getTime()) - touchtime) < 800) {
                    // double click occurred
                    if(frame.classList.contains('maximized')) {
                        frame.classList.remove('maximized');
                    }
                    else {
                        frame.classList.add('maximized');
                    }

                    touchtime = 0;
                } else {
                    // not a double click so set as a new first click
                    touchtime = new Date().getTime();
                }
            }
        }
    }

    eventActive       = function() {
        var frame = this.__Frame;
        var task = this.__Task;
        
        this.__Process.onclick = frame.onclick = task.onclick = function() {
                // begin: set actiive frame
            GET_ELEMENTS('.__system_task').forEach(element => {
                element.classList.remove('actived');
            });
            GET_ELEMENTS('.__system_application').forEach(element => {
                element.style.zIndex --;
                element.classList.remove('actived');
            });

            task.classList.add('actived');
            frame.style.zIndex = 999;
            frame.classList.add('actived');

            activities(false);
        }
    }

    open            = function() {

        // begin: set actiive frame
        GET_ELEMENTS('.__system_task').forEach(element => {
            element.classList.remove('actived');
        });
        GET_ELEMENTS('.__system_application').forEach(element => {
            element.style.zIndex --;
            element.classList.remove('actived');
        });
        this.__Frame.style.zIndex = 1000;
        // end: set actiive frame

        this.__Task.classList.add('opened');
        this.__Task.classList.add('actived');
        this.__Frame.classList.add('opened');
        this.__Frame.classList.add('actived');
    }

    eventClose      = function(name) {
        var task = this.__Task;
        var frame = this.__Frame;
        var process = this.__Process;
        
        this.__Process_Close.onclick = this.__CloseBtn.onclick = function(e) {
            e.stopPropagation();
            if(confirm(`Close Application: ${name}?`)) {
                task.remove();
                frame.remove();
                process.remove();
            }
        }
    }

    eventDrag       = function() {
        var frame = this.__Frame;
        var task = this.__Task;
        var topbar = this.__Topbar;

        dragElement(topbar);

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            elmnt.onmousedown = dragMouseDown;
            
            function dragMouseDown(e) {

                topbar.style.cursor = "move";

                // begin: set actiive frame
                GET_ELEMENTS('.__system_task').forEach(element => {
                    element.classList.remove('actived');
                });
                GET_ELEMENTS('.__system_application').forEach(element => {
                    element.style.zIndex --;
                });
                task.classList.add('actived');
                frame.style.zIndex = 999;
                // end: set actiive frame

                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }
            
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;

                if(!frame.classList.contains('maximized')) {
                    frame.classList.add('moving');
                    frame.style.top = (frame.offsetTop - pos2) + "px";
                    frame.style.left = (frame.offsetLeft - pos1) + "px";
                }
            }
            
            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;

                if(!frame.classList.contains('maximized')) {
                    frame.classList.remove('moving');
                    if(frame.offsetLeft < 0) frame.style.left = 0;
                    if(frame.offsetTop < 0) frame.style.top = 0;
                }

                topbar.style.cursor = "default";
            }
        }        
    }   
}
