//=== Begin: Activities =====================================>>>
var desktopActivitiesHeight = GET_ELEMENT('#____main____ #____desktop____').clientHeight;
desktopActivitiesHeight = desktopActivitiesHeight - desktopActivitiesHeight * 30 / 100;

var initializePosTop = [];
var initializePosLeft = [];

function activities(actived = true) {
    if(!actived) {
        $('#____main____').removeClass('activities');
        $('#____applist_level____').removeClass('actived');
        $('#____applist____').removeClass('actived');
        $('#____activities_level____').removeClass('actived');
    }
    else{
        $('#____main____').addClass('activities');
        $('#____activities_level____').addClass('actived');
        systemControl(false);
        notification(false);
    }
}

function autoActivities() {
    if($('#____main____').hasClass('activities')) {
        activities(false);
    }
    else {
        activities(true);
    }
}   
//=== End: Activities =====================================>>>

//=== Begin: level applist =====================================>>>
function applist(actived = true) {
    if(!actived) {
        $('#____applist____').removeClass('actived');
        $('#____applist_level____').removeClass('actived');
    }
    else {
        $('#____applist____').addClass('actived');
        $('#____applist_level____').addClass('actived');
    }
}

function autoApplist() {
    if($('#____applist____').hasClass('actived')) {
        applist(false);
    }
    else {
        applist(true);
    }
}
//=== End: level applist =====================================>>>


//=== Begin: Date & Time =====================================>>>

function setDateAndTime() {
    var date = new Date();
    var month = "";
    switch(date.getMonth() + 1) {
        case 1: month = "Jan"; break;
        case 2: month = "Feb"; break;
        case 3: month = "Mar"; break;
        case 4: month = "Apr"; break;
        case 5: month = "May"; break;
        case 6: month = "Jun"; break;
        case 7: month = "July"; break;
        case 8: month = "Aug"; break;
        case 9: month = "Sep"; break;
        case 10: month = "Oct"; break;
        case 11: month = "Nov"; break;
        case 12: month = "Dec"; break;
    }

    $('#____date_time____').html(`
        ${month} 
        ${date.getDate()}
        ${date.getHours()}:${date.getMinutes() < 10 ?
        '0'+date.getMinutes() : date.getMinutes()}
    `);

    setTimeout(function(){
        setDateAndTime();
    }, 500);
}

//=== End: Date & Time =====================================>>>

//=== Begin: notification level =====================================>>>
function notification(actived = true) {
    if(!actived) {
        $('#____notification____').removeClass('actived');
        $('#____notification_level____').removeClass('actived');
    }
    else {
        $('#____notification____').addClass('actived');
        $('#____notification_level____').addClass('actived');
        systemControl(false);
        activities(false);
    }
}

function autoNotification() {
    if($('#____notification____').hasClass('actived')) {
        notification(false);
    }
    else {
        notification(true);
    }
}
//=== End: notification level =====================================>>>


//=== Begin: System control level =====================================>>>
function systemControl(actived = true) {
    if(actived) {
        $('#____system_control____').addClass('actived');
        $('#____system_control_level____').addClass('actived');
        activities(false);
        notification(false);
    }
    else {
        $('#____system_control____').removeClass('actived');
        $('#____system_control_level____').removeClass('actived');
    }
}


function autoSystemControl () {
    if($('#____system_control____').hasClass('actived')){
        systemControl(false);
    }
    else {
        systemControl(true);
    }
}
//=== End: System control level =====================================>>>

//=== Begin: XML Process =====================================>>>
function loadMXL(filePath) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', filePath);
    xhttp.send();
    return xhttp;
}

//=== End: XML Process =====================================>>>

