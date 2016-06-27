try{ 
  if(window.ga){



  (function(){
	var params = document.location.search.replace("?","").split("&");
	for(i=0; i<params.length; i++){
		var kvs = params[i].split("=");
		if(kvs[0]=="campaign"){
			ga('set','campaignName',kvs[1]);
      ga('set','campaignId',kvs[1]);
      ga('set','campaignSource','wiley');
      ga('set','campaignMedium','wiley');
		}
	}
  })();

	var galocation = document.location.href;


 if(_satellite.getVar('Prop1- Page Type')  && (_satellite.getVar('Prop1- Page Type')==="ACCESS DENIED" || _satellite.getVar('Prop1- Page Type')==="ABSTRACT/ACCESS DENIED")){
     galocation=document.location.protocol + "//" + document.location.host + document.location.pathname + "-accessdenied" + document.location.search + document.location.hash;
     ga('set', 'metric1', 1);
	}
	if(_satellite.getVar('Prop13- Product DOI')){
		ga('set','dimension1',_satellite.getVar('Prop13- Product DOI')); 
	}
	if(_satellite.getVar('Prop3- Product Title')){
		ga('set','dimension2',_satellite.getVar('Prop3- Product Title')); 
	}
	if(_satellite.getVar('Prop14- Article DOI')){
		ga('set','dimension3',_satellite.getVar('Prop14- Article DOI')); 
	}
	if(_satellite.getVar('Prop7- Article Title')){
		ga('set','dimension4',_satellite.getVar('Prop7- Article Title')); 
	}
  if(_satellite.getVar('eVar33- Virtual Issue DOI')){
		ga('set','dimension5',_satellite.getVar('eVar33- Virtual Issue DOI')); 
	}
    
    if (document.location.href.indexOf("/epdf") < 1 ){
			ga('send', 'pageview', galocation);
      ga('set','metric1',0);
      ga('set','metric2',0);
      ga('set','metric3',0);
      ga('set','metric5',0);
      
    }
  
    
  }
}
catch(e){}

