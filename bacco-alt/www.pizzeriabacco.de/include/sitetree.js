/* [nodename, id, name, navigationtext, href, isnavigation, childs[], templatename] */

if (typeof(decodeURIComponent) == 'undefined') {
  decodeURIComponent = function(s) {
    return unescape(s);
  }
}

function jdecode(s) {
    s = s.replace(/\+/g, "%20")
    return decodeURIComponent(s);
}

var POS_NODENAME=0;
var POS_ID=1;
var POS_NAME=2;
var POS_NAVIGATIONTEXT=3;
var POS_HREF=4;
var POS_ISNAVIGATION=5;
var POS_CHILDS=6;
var POS_TEMPLATENAME=7;
var theSitetree=[ 
	['PAGE','39994',jdecode('Startseite'),jdecode(''),'/39994.html','true',[],''],
	['PAGE','40350',jdecode('Speisekarte'),jdecode(''),'/40350.html','true',[],''],
	['PAGE','40359',jdecode('Impressum'),jdecode(''),'/40359.html','true',[],'']];
var siteelementCount=3;
theSitetree.topTemplateName='Saeule';
theSitetree.paletteFamily='FEFDFD';
theSitetree.keyvisualId='10845';
theSitetree.keyvisualName='kv_10845.jpg';
theSitetree.fontsetId='31861';
theSitetree.graphicsetId='13663';
theSitetree.contentColor='353434';
theSitetree.contentBGColor='FEFDFD';
var theTemplate={
				hasFlashNavigation: 'false',
				hasFlashLogo: 	'false',
				hasFlashCompanyname: 'false',
				hasFlashElements: 'false',
				hasCompanyname: 'false',
				name: 			'Saeule',
				paletteFamily: 	'FEFDFD',
				keyvisualId: 	'10845',
				keyvisualName: 	'kv_10845.jpg',
				fontsetId: 		'31861',
				graphicsetId: 	'13663',
				contentColor: 	'353434',
				contentBGColor: 'FEFDFD',
				a_color: 		'000000',
				b_color: 		'000000',
				c_color: 		'000000',
				d_color: 		'000000',
				e_color: 		'000000',
				f_color: 		'000000',
				hasCustomLogo: 	'false',
				contentFontFace:'Verdana, Arial, Helvetica, sans-serif',
				contentFontSize:'12',
				useFavicon:     'false'
			  };
var webappMappings = {};
webappMappings['1006']=webappMappings['1006-1006']={
webappId:    '1006',
documentId:  '39994',
internalId:  '1006',
customField: '1006'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '39994',
internalId:  '',
customField: '20081201-191148'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '40359',
internalId:  '',
customField: '20081201-190550'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '40350',
internalId:  '',
customField: '20100403-102955'
};
var canonHostname = 'c4awrk01.aul.t-online.de';
var accountId     = 'ATOIX0IR4QWC';
var companyName   = 'Pizzeria+Bacco';
var htmlTitle	  = '';
var metaKeywords  = '';
var metaContents  = '';
					                                                                    
theSitetree.getById = function(id, ar) {												
							if (typeof(ar) == 'undefined')                              
								ar = this;                                              
							for (var i=0; i < ar.length; i++) {                         
								if (ar[i][POS_ID] == id)                                
									return ar[i];                                       
								if (ar[i][POS_CHILDS].length > 0) {                     
									var result=this.getById(id, ar[i][POS_CHILDS]);     
									if (result != null)                                 
										return result;                                  
								}									                    
							}                                                           
							return null;                                                
					  };                                                                
					                                                                    
theSitetree.getParentById = function(id, ar) {                                        
						if (typeof(ar) == 'undefined')                              	
							ar = this;                                             		
						for (var i=0; i < ar.length; i++) {                        		
							for (var j = 0; j < ar[i][POS_CHILDS].length; j++) {   		
								if (ar[i][POS_CHILDS][j][POS_ID] == id) {          		
									// child found                                 		
									return ar[i];                                  		
								}                                                  		
								var result=this.getParentById(id, ar[i][POS_CHILDS]);   
								if (result != null)                                 	
									return result;                                  	
							}                                                       	
						}                                                           	
						return null;                                                	
					 }								                                    
					                                                                    
theSitetree.getName = function(id) {                                                  
						var elem = this.getById(id);                                    
						if (elem != null)                                               
							return elem[POS_NAME];                                      
						return null;	                                                
					  };			                                                    
theSitetree.getNavigationText = function(id) {                                        
						var elem = this.getById(id);                                    
						if (elem != null)                                               
							return elem[POS_NAVIGATIONTEXT];                            
						return null;	                                                
					  };			                                                    
					                                                                    
theSitetree.getHREF = function(id) {                                                  
						var elem = this.getById(id);                                    
						if (elem != null)                                               
							return elem[POS_HREF];                                      
						return null;	                                                
					  };			                                                    
					                                                                    
theSitetree.getIsNavigation = function(id) {                                          
						var elem = this.getById(id);                                    
						if (elem != null)                                               
							return elem[POS_ISNAVIGATION];                              
						return null;	                                                
					  };			                                                    
					                                                                    
theSitetree.getTemplateName = function(id, lastTemplateName, ar) {             		
	                                                                                 
	if (typeof(lastTemplateName) == 'undefined')                                     
		lastTemplateName = this.topTemplateName;	                                 
	if (typeof(ar) == 'undefined')                                                   
		ar = this;                                                                   
		                                                                             
	for (var i=0; i < ar.length; i++) {                                              
		var actTemplateName = ar[i][POS_TEMPLATENAME];                               
		                                                                             
		if (actTemplateName == '')                                                   
			actTemplateName = lastTemplateName;		                                 
		                                                                             
		if (ar[i][POS_ID] == id) {                                			         
			return actTemplateName;                                                  
		}	                                                                         
		                                                                             
		if (ar[i][POS_CHILDS].length > 0) {                                          
			var result=this.getTemplateName(id, actTemplateName, ar[i][POS_CHILDS]); 
			if (result != null)                                                      
				return result;                                                       
		}									                                         
	}                                                                                
	return null;                                                                     
	};                                                                               
theSitetree.getByXx = function(lookup, xx, ar) {									 
    if (typeof(ar) == 'undefined')												 
    	ar = this;																	 
    for (var i=0; i < ar.length; i++) {										     
        if (ar[i][xx] == lookup)													 
        	return ar[i];															 
        if (ar[i][POS_CHILDS].length > 0) {										 
        	var result=this.getByXx(lookup, xx, ar[i][POS_CHILDS]);					 
            if (result != null)													 
                return result;													 
        }																			 
    }																				 
    return null;																	 
};																				 
function gotoPage(lookup) {														 
    var page = theSitetree.getHREF(lookup);										 
    if (!page) {																	 
  		var testFor = [ POS_NAME, POS_NAVIGATIONTEXT ];							 
            for (var i=0 ; i < testFor.length ; i++) {							 
                    var p = theSitetree.getByXx(lookup, testFor[i]);				 
                    if (p != null) {												 
                            page = p[POS_HREF];									 
                            break;												 
                    }																 
            }																		 
    }																				 
 document.location.href = (new URL(__path_prefix__ + page, true, true)).toString();
}
/* EOF */					                                                            
