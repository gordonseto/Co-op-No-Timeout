var actualCode = '(' + function() {
    // All code is executed in a local scope.
    // For example, the following does NOT overwrite the global `alert` method
    // To overwrite a global variable, prefix `window`:
    window.sessionTimeoutPopup = function() {
   //  	window.keepMeLoggedIn.open('get', '/keepAlive.htm?rand=' + Math.floor(Math.random()*100000));
	 	// window.keepMeLoggedIn.send(null);

	 	console.log("hello");
	 	window.keepMeLoggedInClicked();
    }


} + ')();';

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();
