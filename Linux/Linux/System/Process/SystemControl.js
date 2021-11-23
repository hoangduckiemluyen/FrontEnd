//=== Begin: Activities =====================================>>>
$('#____activities_level____').click(autoActivities);


//=== End: Activities =====================================>>>

//=== Begin: level applist =====================================>>>
$('#____applist_level____').click(autoApplist);
//=== end: level applist =====================================>>>

//=== Begin: Date & Time =====================================>>>
//set curent date & time
setDateAndTime();
$('#____notification____').click(autoNotification);
$('#____notification_level____').click(autoNotification);
$('#____notification____ div').click(function(e) {e.stopPropagation();});

//=== End: Date & Time =====================================>>>

//=== Begin: System control level =====================================>>>
$('#____system_control_level____').click(autoSystemControl);
//=== End: System control level =====================================>>>