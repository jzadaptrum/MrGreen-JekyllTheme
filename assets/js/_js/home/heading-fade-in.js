/*! J&Z Jekyll Theme - v1.1.0 (https://github.com/jzadaptrum/JandZ-JekyllTheme)
 *  Copyright (c) 2022 J&Z's Workshop https://www.jzadaptrum.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  $(function () {
    let home_heading = $(".home-heading");

    if (home_heading.length > 0) {
      home_heading.hide();
      home_heading.fadeIn("slow");
    }
  });

})();
