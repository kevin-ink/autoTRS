chrome.runtime.onMessage.addListener((request) => {
    if (request.id == "trs") {
        x = document.getElementById("weekList0.dayList2.clockInOutList0.userClockIn");
        x.value = 6;
        x = document.getElementById("weekList0.dayList2.clockInOutList0.userClockOut");
        x.value = 11;
        x = document.getElementById("weekList0.dayList2.clockInOutList0.userClockInAmPm");
        x.value = pm;
        x = document.getElementsByClassName("ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only")
    }
});