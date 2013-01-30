/*
	Title: Auburn Redirect Tool (ART)
	Author/Copyright: Jake Harris (jch0039@auburn.edu if you're on CWS, else javakatdesign@gmail.com)
*/

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
	var redirect;
	
	/* We read the requested URL and redirect to the proper location based on that. */
	
	if(~info.url.indexOf("fp/")) redirect = "https://fp.auburn.edu/" + info.url.substring(info.url.indexOf("fp/") + "fp/".length);
	else if(~info.url.indexOf("cws/")) redirect = "http://cws.auburn.edu/" + info.url.substring(info.url.indexOf("cws/") + "cws/".length);
	else if(~info.url.indexOf("dev/")) redirect = "http://cwsdev.auburn.edu/" + info.url.substring(info.url.indexOf("dev/") + "dev/".length);
	else if(~info.url.indexOf("test/")) redirect = "http://cwstest.auburn.edu/" + info.url.substring(info.url.indexOf("test/") + "test/".length);
	else if(~info.url.indexOf("migr/")) redirect = "http://cwsmigr.auburn.edu/" + info.url.substring(info.url.indexOf("migr/") + "migr/".length);
	
	/* We should make an ajax request to see if the targeted location actually exists. */
	
	
    return {redirectUrl: redirect};
  },
  {
    urls: [
      "*fp/*",
	  "*cws/*",
	  "*dev/*",
	  "*test/*",
	  "*migr/*"
    ]
  },
  ["blocking"]);