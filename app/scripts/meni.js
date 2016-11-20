'use strict';
/**
 * Close meni on mobile
 */
      $(function() {
        $('#meni').click(function () {
          var screenWidth = window.innerWidth;
          if (screenWidth < 768) {
            $('#js-navbar-collapse').collapse('hide');
          }
        });
      });