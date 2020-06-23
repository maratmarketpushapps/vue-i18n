const initFbSdk = (Vue, facebookClientId) => {
  window.fbAsyncInit = () => {
    window.FB.init({
      appId: facebookClientId,
      autoLogAppEvents: true,
      xfbml: true,
      version: "v3.2",
    });
    Vue.FB = window.FB;
  };
};

exports.initFbSdk = initFbSdk;
