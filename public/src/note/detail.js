'use strict';
angular.module('app').component('noteDetail', {
    templateUrl: '/src/note/detail.html',
    bindings: {
        session: '<',
        note: '<',
    },
    controller: function($mdDialog) {
      this.showAlert = function(ev, version, body) {
          // Appending dialog to document.body to cover sidenav in docs app
          // Modal dialogs should fully cover application
          // to prevent interaction outside of dialog
          $mdDialog.show(
            $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('Version ' + version)
              .textContent(body)
              .ariaLabel('Alert Dialog Demo')
              .ok('Close')
              .targetEvent(ev)
          );
        };

    }

});
