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

    // ---------------

    $(function(){
      $("a.tab").on("click", function(e){
        e.preventDefault();
        
        /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
        $(this).closest("ul").find("a.tab").removeClass("-on");
        $(this).addClass("-on");
        
        /* 找到對應的頁籤內容，加上 -on 來顯示 */
        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
      });
    });
    
    // ---------輪播----------------
    
    // var swiper = new Swiper('.swiper-container', {
    //   slidesPerView: 5,   //同時顯示的slides數量
    //   spaceBetween: 10,   //slide之間的距離 (單位px)
    //   loop: true,
    //   pagination: {
    //     el: '.swiper-pagination',  
    //     clickable: true,  
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });
    $('.carousel[data-type="multi"] .item').each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    
      for (var i = 0; i < 2; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
    
        next.children(':first-child').clone().appendTo($(this));
      }
    });