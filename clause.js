var uniqueInfo = {
"theCompany" :  "stormcloud",
"theFullLegalNameOfCompany": null,
"theProduct" : "website"
}

var theFullLegalNameOfCompany = prompt("What is the full legal name of your company");
var theCompany = prompt("What is your company Called");
var theProduct = prompt("What is your product","website");

var clauses = [{
"intro": [
{"intro" :"This " + theProduct + " is operated by " + theCompany + ". Throughout the site, the terms \"we\", \“us\” and \“our\” refer to " + theCompany + ". " + theCompany + " offers this " + theProduct +  ", including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here. Please read these Terms of Use carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Use. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Use. Any new features or tools which are added to " 
+ theProduct + " shall also be subject to the Terms of Use. You can review the most current version of the Terms of Use at any time on this page. We reserve the right to update, change or replace any part of these Terms of Use by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes."
}
],	
	
"informationCollection": [
	
{"personalInformation": "Submission of information on our site is considered permission to collect and store the personal information that you give us. Examples of this are such as your name, address and email address. When you provide personal information through our website, the information may be sent to computer servers located in the United States and/or other countries around the world, and stored there to be used in the ways that we make notice of later in this document."},
{"ipAddress": "When you browse our site, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser, operating system, and activity on our site."},
{"cookies": "We use cookies to store information about your browsing session and browsing history with our site."},
{"thirdParties": "We may also cooberate, verify, or further develop the personal information that we have obtained about you with information about you from other business partners, contractors and other third parties."}
],
		
"storage":[
{"storage": "Your data is stored in our internal databases or on a secure server behind a firewall."},
{"duration": "storage of this information may be for an indefinite period of time",}
],

"useOfInfo": [
{"primary": " the main reason that we gather and use information is to deliver the products and services that you have requested, and to improve those products and services in the future. We also use this information to manage your account and provide you with customer support. To carry out these activities we perform research and analysis about your use of our products, services, or content."},
{"emailMarketing" : "With your permission, we may send you emails about our company, " + theProduct + ", and other promotions that are going on. You may opt out of these at anytime"},	
{"otherCommunication": "We may also communicate with you in the form of mail, telephone, SMS, and/or other mobile communication for the purposes of relaying information about our products or services that may be of interest to you."},
{"backgroundCheck": "We may also use the information to perform background research about you if you are applying for a position with our company, as is permitted by law. We may also use the information to perform background research on you if you are a service provider or offer other third party services"}
],

"errors" :[
{"overview": "We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site."}
],

"prohibitedUse" : [
{"all": "In addition to other prohibitions as set forth in the Terms of Use, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses."}
],

"warranties" : [
{"availability": "We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free."},
{"accuracy": "We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable."},
{"maintenence": "You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you."},
{"atRisk": "You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement."},
{"liability" : "In no case shall" + theCompany + ", our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law."}
],

"indemnification": [
{"indemnify": "You agree to indemnify, defend and hold harmless" + theCompany + "and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party."}
],

"severability": [
{"sever": "In the event that any provision of these Terms of Use is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions."}
],

"termination" : [
{"forever":"The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes."},
{"whenTerminated":"These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Use at any time by notifying us that you no longer wish to use our Services, or when you cease using our" + theProduct + "."},
{"weTerminate": "If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Use, we also may terminate this agreement at any time with or without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof)."}
],

"entireAgreement" :[
{"enforce":"The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision."},
{"agreement":"These Terms of Use and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Use)."},
{"ambigious":"Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party."}
],

"changesToAgreement" :[
{"currentVersion": "You can review the most current version of the Terms of Service at any time at this page."},
{"rightToUpdate" : "We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes."}
]
}];



