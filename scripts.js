_.each(clauses, 
	function(allClauses){	
		_.each(allClauses, function(result){
			//console.dir(result);		
			_.each(result, function(data){		
	if(data.intro){$("#terms").append("<div class=\"container\">" + data.intro + "</div>");}
	else if(data.personalInformation){$("#terms").append("<div class=\"container\">" + data.personalInformation + "</div>");}
	else if(data.ipAddress){$("#terms").append("<div class=\"container\">" + data.ipAddress + "</div>");}
	else if(data.cookies){$("#terms").append("<div class=\"container\">" + data.cookies + "</div>");}
	else if(data.thirdParties){$("#terms").append("<div class=\"container\">" + data.thirdParties + "</div>");}
	else if(data.storage){$("#terms").append("<div class=\"container\">" + data.storage + "</div>");}
	else if(data.duration){$("#terms").append("<div class=\"container\">" + data.duration + "</div>");}
	else if(data.primary ){$("#terms").append("<div class=\"container\">" + data.primary + "</div>");}
	else if(data.emailMarketing){$("#terms").append("<div class=\"container\">" + data.emailMarketing + "</div>");}
	else if(data.otherCommunication){$("#terms").append("<div class=\"container\">" + data.otherCommunication + "</div>");}
	else if(data.backgroundCheck){$("#terms").append("<div class=\"container\">" + data.backgroundCheck + "</div>");}
	else if(data.overview){$("#terms").append("<div class=\"container\">" + data.overview + "</div>");}
	else if(data.all ){$("#terms").append("<div class=\"container\">" + data.all + "</div>");}
	else if(data.availability){$("#terms").append("<div class=\"container\">" + data.availability + "</div>");}
	else if(data.accuracy){$("#terms").append("<div class=\"container\">" + data.accuracy + "</div>");}
	else if(data.maintenence){$("#terms").append("<div class=\"container\">" + data.maintenence + "</div>");}
	else if(data.atRisk){$("#terms").append("<div class=\"container\">" + data.atRisk + "</div>");}
	else if(data.liability){$("#terms").append("<div class=\"container\">" + data.liability + "</div>");}
	else if(data.indemnify){$("#terms").append("<div class=\"container\">" + data.indemnify + "</div>");}
	else if(data.sever){$("#terms").append("<div class=\"container\">" + data.sever + "</div>");}
	else if(data.forever){$("#terms").append("<div class=\"container\">" + data.forever + "</div>");}
	else if(data.whenTerminated){$("#terms").append("<div class=\"container\">" + data.whenTerminated + "</div>");}
	else if(data.weTerminate){$("#terms").append("<div class=\"container\">" + data.weTerminate + "</div>");}
	else if(data.enforce){$("#terms").append("<div class=\"container\">" + data.enforce + "</div>");}
	else if(data.agreement ){$("#terms").append("<div class=\"container\">" + data.agreement + "</div>");}
	else if(data.ambigious){$("#terms").append("<div class=\"container\">" + data.ambigious + "</div>");}
	else if(data.currentVersion){$("#terms").append("<div class=\"container\">" + data.currentVersion + "</div>");}
	else if(data.rightToUpdate){$("#terms").append("<div class=\"container\">" + data.rightToUpdate + "</div>");}
	else{console.error("error");}					
			})		
		})		
	}
);


/*
			
	
*/


		



