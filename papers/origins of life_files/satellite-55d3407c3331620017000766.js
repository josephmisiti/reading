window.console && console.log("Page data:");
window.console && window.wol1datalayer && console.log(wol1datalayer);


digitalData = window.digitalData ? digitalData : {};
digitalData.event = digitalData.event || [];

digitalData.event.push = function (){
	var newLength =  Array.prototype.push.apply(this,arguments),
  		ev;
  
	if (arguments.length) {
		ev = arguments[0];

	    if (typeof ev === 'object' &&  typeof ev.eventInfo === 'object') {
			if (typeof ev.eventInfo.eventData === 'object') {
				// send along entire eventData map
        window.console && console.log("Event data:");
				_satellite.setVar('eventData',ev.eventInfo.eventData); 
        window.console && console.log(ev.eventInfo.eventData);
			}
			if (typeof ev.eventInfo.eventName === 'string') {
				// direct call rule using eventName
        window.console && console.log("For event named '", ev.eventInfo.eventName, "'");
				_satellite.track(ev.eventInfo.eventName);
			}
			digitalData.event.length=0;
		} else {
	         _satellite.notify('eventInfo does not exist - DataLayer Event requires a root object of "eventInfo"')
	  	}
	}
  return newLength;
 }
