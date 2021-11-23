const DESKTOP = GET_ELEMENT('#____desktop____');

class Frame {

    static s_ApplicationsDir    = APPLICATIONS_DIR;
    static s_ApplicationID      = 0;

    __Frame             = null;
    __Content           = null;
    __Title             = null;
    __Topbar            = null;
    __CloseBtn          = null;
    __Task              = null;
    __Name              = null;

    __Process           = null;
    __Process_Close     = null;
    __Process_Content   = null;

    createFrame() {
        this.__Frame            = `____application_${Application.s_ApplicationID}____`;
        this.__Topbar           = `____application_${Application.s_ApplicationID}_topbar____`;
        this.__Title            = `____application_${Application.s_ApplicationID}_title____`;
        this.__CloseBtn         = `____application_${Application.s_ApplicationID}_close____`;
        this.__Content          = `____application_${Application.s_ApplicationID}_main____`;

        var frame = document.createElement('div');
        frame.setAttribute('id', this.__Frame);

        var isMobile = false;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            frame.setAttribute('class', '__system_application maximized l-c-12 m-c-12 s-c-12');
            frame.style.height = '100%';
            frame.style.top = '0';
            frame.style.left = '0';
            isMobile = true;
        }
        else {
            frame.setAttribute('class', '__system_application l-c-6 m-c-8 s-c-10');
            isMobile = false;
        }

        DESKTOP.appendChild(frame);
        frame.innerHTML = 
        `
            <div class="__system_application_topbar" id="${this.__Topbar}" style="display: ${isMobile ? 'none' : ''}">
                <div class="__system_application_topbar__text" id="${this.__Title}">${this.__Name}</div>
                <div class="__system_application_topbar__nav" id="${this.__CloseBtn}">
                    <div class="__system_application_topbar__nav_btn"><i class="fas fa-times"></i></div>
                </div>
            </div>
            <div class="__system_application_content" id="${this.__Content}"></div>
        `;

        this.__Frame            = GET_ELEMENT(`#${this.__Frame}`);
        this.__Topbar           = GET_ELEMENT(`#${this.__Topbar}`);
        this.__Title            = GET_ELEMENT(`#${this.__Title}`);
        this.__CloseBtn         = GET_ELEMENT(`#${this.__CloseBtn}`);
        this.__Content          = GET_ELEMENT(`#${this.__Content}`);

        Application.s_ApplicationID ++;
    }

    createTask() {
        this.__Task = document.createElement('div');
        this.__Task.setAttribute('class', '__system_task');
        this.__Task.setAttribute('id', `____task-item_${this.__Name}____`);
        this.__Task.innerHTML = `
            <style>
                #____task-item_${this.__Name}____ .__system_task__img {
                    background-image: url('${ Frame.s_ApplicationsDir }/${this.__Name}/Logo.png');
                }
            </style>
            <div class="__system_task__dot"></div>
            <div class="__system_task__img"></div>
        `;
        GET_ELEMENT('#____taskbar_list____').appendChild(this.__Task);
    }

    createProcess() {
        // create process in "all windows" element

        this.__Process          = `____application_${Application.s_ApplicationID}_process____`;
        this.__Process_Close    = `____application_${Application.s_ApplicationID}_process_close____`;
        this.__Process_Content  = `____application_${Application.s_ApplicationID}_process_content____`;

        var tmp = document.createElement('div');
        tmp.setAttribute('class', '__system_all_windows_frame');
        tmp.setAttribute('id', this.__Process);
        tmp.innerHTML = `
            <div class="__system_all_windows_frame__title">
                <div class="__system_all_windows_frame__title_text">${this.__Name}</div>
            </div>
            <div id="${this.__Process_Close}" class="__system_all_windows_frame__close">
                <i class="fas fa-times"></i>
            </div>
            <div id="${this.__Process_Content}" class="__system_all_windows_frame__content"></div>
        `;
        GET_ELEMENT('#____all_windows____').appendChild(tmp);

        this.__Process          = GET_ELEMENT(`#${this.__Process}`);
        this.__Process_Close    = GET_ELEMENT(`#${this.__Process_Close}`);
        this.__Process_Content  = GET_ELEMENT(`#${this.__Process_Content}`);
    }

    setContent() {
        var tmp = document.createElement('iframe');
        tmp.setAttribute('src', `${Frame.s_ApplicationsDir }/${this.__Name}/Main.html`);
        tmp.setAttribute('frameborder', '0');
        tmp.setAttribute('width', '100%');
        tmp.setAttribute('height', '100%');
        this.__Content.appendChild(tmp);
        this.__Process_Content.innerHTML = this.__Content.innerHTML;
    }
}
