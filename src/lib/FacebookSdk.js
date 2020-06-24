const initFbSdk = (Vue, facebookClientId) => {
  return new Promise((resolve) => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: facebookClientId,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v3.2",
      });
      Vue.FB = window.FB;
      resolve("success");
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
};

exports.initFbSdk = initFbSdk;
