
var appNames        = ['Terminal', 'Browser', 'Music', 'Code', 'Youtube'];

createApplist(appNames);
listAppEvent(appNames);

function createApplist(appNames){
    var item = '';

    item += '<div class="row wrap">';

    appNames.forEach((n, i)=>{
        item += `
            <style>
                #____applist_list_${appNames[i]}_img____ {
                    background: url('${APPLICATIONS_DIR}/${appNames[i]}/Logo.png');
                }
            </style>
            <div id="____applist_list_${appNames[i]}____" class="__system_applist_item col l-c-2 m-c-2 s-c-3" >
                <div class="__system_applist_item__img" id="____applist_list_${appNames[i]}_img____"></div>
                <div class="__system_applist_item__title">
                    <div>${appNames[i]}</div>
                </div>
            </div>
        `;
    }); 
    
    item += '</div>';

    $('#____applist_list____').html(item);
}

function listAppEvent(appNames) {
    appNames.forEach((appName, index) => {
        $(`#____applist_list_${appNames[index]}____`).click(function() {
            app = new Application(appName);
            app.open();
            app.setContent();
            activities(false);
        });
    });
}