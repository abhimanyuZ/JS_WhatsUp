function simulateMouseEvents(element, eventName) {
    var mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initEvent(eventName, true, true);
    element.dispatchEvent(mouseEvent);
}
simulateMouseEvents(document.querySelector('[title="test"]'), 'mousedown');

function startTimer() {
    setTimeout(myFunc, 3000);
}


startTimer();


var eventFire = (el, etype) => {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(etype, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(evt);
};


function myFunc() {

    messageBox = document.querySelectorAll("[contenteditable='true']")[0];
    message = "test";
    for (i = 0; i < 2; i++) {
        event = document.createEvent("UIEvents");
        messageBox.innerHTML = message.replace(/ /gm, '');
        event.initUIEvent("input", true, true, window, 1);
        messageBox.dispatchEvent(event);

        eventFire(document.querySelector('span[data-icon="send"]'), 'click');
    }

}
