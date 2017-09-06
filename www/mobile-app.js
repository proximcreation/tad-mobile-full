var mobApp = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('click', this.onDeviceReady, true);
  },
  onDeviceReady: function() {
    console.log('device ready');
    StatusBar.hide();
    // angular.element(document).ready(function() {
    //     angular.bootstrap(document);
    // });
  }
};
