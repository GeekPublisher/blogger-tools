window.fbAsyncInit = function() {
    FB.init({
      appId            : '1221797707830992',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v11.0'
    });
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
