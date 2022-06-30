/*! J&Z Jekyll Theme - v1.1.0 (https://github.com/jzadaptrum/JandZ-JekyllTheme)
 *  Copyright (c) 2022 J&Z's Workshop https://www.jzadaptrum.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  (function (window) {
    window.openURL = openURL;

    function openURL(url) {
      let link = document.createElement('a');
      link.target = "_blank";
      link.href = url;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    };
  })(window);

})();
