(function () {
  'use strict';
  Polymer({

    is: 'loading-page',

    properties: {
      paused: {
        type: Boolean,
        value: false,
        observer: '_pausedLoading'
      }
    },
    _pausedLoading: function() {
      if(this.paused) {
        this.$$('#loader').classList.value = 'loading__paused';
      } else {
        this.$$('#loader').classList.value = 'loading__loader';
      }
    }

  });
}());
