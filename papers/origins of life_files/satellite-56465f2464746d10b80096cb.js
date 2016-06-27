_satellite.pushBlockingScript(function(event, target, $variables){
  window.trackAlive=function(){}
try{
		window.trackAlive=function(trackEvent){
			_satellite.track(trackEvent);
		}
		setTimeout(function(){trackAlive('10secondsin');},10000);
		setTimeout(function(){trackAlive('30secondsin');},30000);
		setTimeout(function(){trackAlive('90secondsin');},90000);
}
catch(e){}

});
