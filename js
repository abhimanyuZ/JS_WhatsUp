 //node = document.querySelector('[title="Karunakaran"]');
 
 function simulateMouseEvents(element, eventName) {
    var mouseEvent= document.createEvent ('MouseEvents');
    mouseEvent.initEvent (eventName, true, true);
    element.dispatchEvent (mouseEvent);
}

simulateMouseEvents(document.querySelector('[title="NIRMALA The Clean QQ O just"]'), 'mousedown');

messageBox = document.querySelectorAll("[contenteditable='true']")[0];

message="hi";

event = document.createEvent("UIEvents");

messageBox.innerHTML = message.replace(/  /gm,'');

event.initUIEvent("input", true, true, window, 1);

messageBox.dispatchEvent(event);

const eventFire = (el, etype) => {
		var evt = document.createEvent("MouseEvents");
		evt.initMouseEvent(etype, true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
		el.dispatchEvent(evt);
	}
  
 eventFire(document.querySelector('span[data-icon="send"]'), 'click');
