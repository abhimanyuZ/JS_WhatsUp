function simulateMouseEvents(element, eventName) {
    var mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initEvent(eventName, true, true);
    element.dispatchEvent(mouseEvent);
}

name = "" ;  //Name of the Whatsapp contact

simulateMouseEvents(document.querySelector('[title="'+name+'"]'), 'mousedown');  

function startTimer() {
    setTimeout(myFunc, 3000);
}

startTimer();

var eventFire = (MyElement, ElementType) =>  {
    var MyEvent = document.createEvent("MouseEvents");
    MyEvent.initMouseEvent(ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    MyElement.dispatchEvent(MyEvent);
};


function myFunc() {
    messageBox = document.querySelectorAll("[contenteditable='true']")[0];
    message = ""; // Fill in your message here 
    counter = 1;  // Number of messages goes here      
    for (i = 0; i < counter; i++) {
        event = document.createEvent("UIEvents");
        messageBox.innerHTML = message.replace(/ /gm, '');        
        event.initUIEvent("input", true, true, window, 1);
        messageBox.dispatchEvent(event);
        eventFire(document.querySelector('span[data-icon="send"]'), 'click'); // simulate click event on send icon
    }

}



/*
var now = new Date();
// Replace Hours,Mins and secs with your desired time in 24 hour time format e.g. 
// Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 00, 0) - now; will send message at 2.30PM 

var rt = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Hours, Minutes, Sec, 0) - now;  
if (rt < 0) {
     rt += 86400000; 
}
setTimeout(startTimer, rt);
*/
