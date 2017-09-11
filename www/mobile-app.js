var mobApp = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, true);
  },
  onDeviceReady: function() {
    console.log('device ready');
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString("#ffffff");
    // StatusBar.hide();
    // angular.element(document).ready(function() {
    //     angular.bootstrap(document);
    // });
  }
};
