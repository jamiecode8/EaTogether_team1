$(function() {

    var tabMenu = function() {

      var $tabs              = $('.Choose_tabs');
      var $content           = $('.tab-content');
      var TAB_ACTIVE_CLASS   = 'is_active';
      var CONTENT_SHOW_CLASS = 'is_show';
      var id_arr             = $content.map(function() { return '#' + $(this).attr('id');}).get();


      /**
       * @return {string} 
       * @return {false} 
       */
      var getHash = function() {
        var hash = window.location.hash;
        var index = id_arr.indexOf(hash);

        if (index === -1) {
          return false;
        } else {
          return id_arr[index];
        }
      };

      var initialize = function() {
        var hash = getHash();

        if (hash) {
          $tabs.find('a[href="'+hash+'"]').addClass(TAB_ACTIVE_CLASS); // 1
          $(hash).addClass(CONTENT_SHOW_CLASS); // 2
        } else {
          $tabs.find('li:first > a').addClass(TAB_ACTIVE_CLASS); // 3
          $($content[0]).addClass(CONTENT_SHOW_CLASS); // 3
        }
      };
      var addEvent = function() {
        $tabs.find('a').on('click', function(e) {
          var href = $(this).attr('href'); // 1
          var $targetContent = $(href); // 1

          // 2
          if ($(this).hasClass(TAB_ACTIVE_CLASS)) {
            return false;
          }

          // 3
          $tabs.find('a').removeClass(TAB_ACTIVE_CLASS);
          $content.removeClass(CONTENT_SHOW_CLASS);

          // 4
          $(this).addClass(TAB_ACTIVE_CLASS);
          $targetContent.addClass(CONTENT_SHOW_CLASS);

          return false;
        });
      };

      return [initialize(), addEvent()];
    };

    tabMenu();

    });