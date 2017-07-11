(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _pageToggle = require('./page-toggle');

var _pageToggle2 = _interopRequireDefault(_pageToggle);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = new _header2.default();

header.init();

// Temp functionality


var pageToggle = new _pageToggle2.default();

pageToggle.init();

// Scroll functionality for hero button


var home = new _home2.default();

home.init();

},{"./header":3,"./home":5,"./page-toggle":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, [{
    key: 'init',
    value: function init() {
      this.setupHeaderScroll();
      this.setupMenuToggle();
    }
  }, {
    key: 'setupHeaderScroll',
    value: function setupHeaderScroll() {
      $(window).scroll(function () {
        if (window.scrollY > 100) {
          $('.header').addClass('header--fill');
        } else {
          $('.header').removeClass('header--fill');
        }
      });
    }
  }, {
    key: 'setupMenuToggle',
    value: function setupMenuToggle() {
      $('.header__nav-toggle').on('click', function () {
        $('body').toggleClass('nav-open');
      });
    }
  }]);

  return Header;
}();

exports.default = Header;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = require('./header');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_header).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./header":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function () {
  function Home() {
    _classCallCheck(this, Home);
  }

  _createClass(Home, [{
    key: 'init',
    value: function init() {
      this.setupPageScroll();
    }
  }, {
    key: 'setupPageScroll',
    value: function setupPageScroll() {
      $('#scroll-btn').on('click', function () {
        var headerHeight = $('.header').outerHeight();
        var offset = $('.secondary-hero').offset().top - headerHeight;

        $('html, body').animate({
          scrollTop: offset
        }, 300);
      });
    }
  }]);

  return Home;
}();

exports.default = Home;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = require('./home');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_home).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./home":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageToggle = require('./page-toggle');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pageToggle).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./page-toggle":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageToggle = function () {
  function PageToggle() {
    _classCallCheck(this, PageToggle);
  }

  _createClass(PageToggle, [{
    key: 'init',
    value: function init() {
      this.setupTabClickHandler();
    }
  }, {
    key: 'setupTabClickHandler',
    value: function setupTabClickHandler() {
      // Store a reference for the page tabs
      var $pageLinks = $('a[data-page-name], button[data-page-name]');

      $pageLinks.on('click', function (e) {
        e.preventDefault();

        var pageName = $(this).data('page-name');

        $('[data-page]').hide();
        $('[data-page=' + pageName + ']').show();
      });
    }
  }]);

  return PageToggle;
}();

exports.default = PageToggle;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIiwic3JjL2Fzc2V0cy9zY3JpcHRzL2hlYWRlci9oZWFkZXIuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvaGVhZGVyL2luZGV4LmpzIiwic3JjL2Fzc2V0cy9zY3JpcHRzL2hvbWUvaG9tZS5qcyIsInNyYy9hc3NldHMvc2NyaXB0cy9ob21lL2luZGV4LmpzIiwic3JjL2Fzc2V0cy9zY3JpcHRzL3BhZ2UtdG9nZ2xlL2luZGV4LmpzIiwic3JjL2Fzc2V0cy9zY3JpcHRzL3BhZ2UtdG9nZ2xlL3BhZ2UtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQU9BOzs7O0FBT0E7Ozs7OztBQVpBLElBQUksU0FBUyxzQkFBYjs7QUFFQSxPQUFPLElBQVA7O0FBRUE7OztBQUdBLElBQUksYUFBYSwwQkFBakI7O0FBRUEsV0FBVyxJQUFYOztBQUVBOzs7QUFHQSxJQUFJLE9BQU8sb0JBQVg7O0FBRUEsS0FBSyxJQUFMOzs7Ozs7Ozs7Ozs7O0lDbEJNLE07Ozs7Ozs7MkJBQ0c7QUFDTCxXQUFLLGlCQUFMO0FBQ0EsV0FBSyxlQUFMO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsUUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQzFCLFlBQUksT0FBTyxPQUFQLEdBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCLFlBQUUsU0FBRixFQUFhLFFBQWIsQ0FBc0IsY0FBdEI7QUFDRCxTQUZELE1BRU87QUFDTCxZQUFFLFNBQUYsRUFBYSxXQUFiLENBQXlCLGNBQXpCO0FBQ0Q7QUFDRixPQU5EO0FBT0Q7OztzQ0FFaUI7QUFDaEIsUUFBRSxxQkFBRixFQUF5QixFQUF6QixDQUE0QixPQUE1QixFQUFxQyxZQUFXO0FBQzlDLFVBQUUsTUFBRixFQUFVLFdBQVYsQ0FBc0IsVUFBdEI7QUFDRCxPQUZEO0FBR0Q7Ozs7OztrQkFLWSxNOzs7Ozs7Ozs7Ozs7OzsyQ0N6Qk4sTzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBSCxJOzs7Ozs7OzJCQUNHO0FBQ0wsV0FBSyxlQUFMO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsUUFBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVk7QUFDdkMsWUFBSSxlQUFlLEVBQUUsU0FBRixFQUFhLFdBQWIsRUFBbkI7QUFDQSxZQUFJLFNBQVMsRUFBRSxpQkFBRixFQUFxQixNQUFyQixHQUE4QixHQUE5QixHQUFvQyxZQUFqRDs7QUFFQSxVQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDdEIscUJBQVc7QUFEVyxTQUF4QixFQUVHLEdBRkg7QUFHRCxPQVBEO0FBUUQ7Ozs7OztrQkFHWSxJOzs7Ozs7Ozs7Ozs7Ozt5Q0NqQk4sTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ0FBLE87Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUgsVTs7Ozs7OzsyQkFDRztBQUNMLFdBQUssb0JBQUw7QUFDRDs7OzJDQUVzQjtBQUNyQjtBQUNBLFVBQUksYUFBYSxFQUFFLDJDQUFGLENBQWpCOztBQUVBLGlCQUFXLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFVBQVMsQ0FBVCxFQUFZO0FBQ2pDLFVBQUUsY0FBRjs7QUFFQSxZQUFJLFdBQVcsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFdBQWIsQ0FBZjs7QUFFQSxVQUFFLGFBQUYsRUFBaUIsSUFBakI7QUFDQSxVQUFFLGdCQUFlLFFBQWYsR0FBeUIsR0FBM0IsRUFBZ0MsSUFBaEM7QUFDRCxPQVBEO0FBUUQ7Ozs7OztrQkFLWSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5cbmxldCBoZWFkZXIgPSBuZXcgSGVhZGVyKCk7XG5cbmhlYWRlci5pbml0KCk7XG5cbi8vIFRlbXAgZnVuY3Rpb25hbGl0eVxuaW1wb3J0IFBhZ2VUb2dnbGUgZnJvbSAnLi9wYWdlLXRvZ2dsZSdcblxubGV0IHBhZ2VUb2dnbGUgPSBuZXcgUGFnZVRvZ2dsZSgpO1xuXG5wYWdlVG9nZ2xlLmluaXQoKTtcblxuLy8gU2Nyb2xsIGZ1bmN0aW9uYWxpdHkgZm9yIGhlcm8gYnV0dG9uXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnXG5cbmxldCBob21lID0gbmV3IEhvbWUoKTtcblxuaG9tZS5pbml0KCk7IiwiY2xhc3MgSGVhZGVyIHtcbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwSGVhZGVyU2Nyb2xsKCk7XG4gICAgdGhpcy5zZXR1cE1lbnVUb2dnbGUoKTtcbiAgfVxuXG4gIHNldHVwSGVhZGVyU2Nyb2xsKCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcbiAgICAgICAgJCgnLmhlYWRlcicpLmFkZENsYXNzKCdoZWFkZXItLWZpbGwnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItLWZpbGwnKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0dXBNZW51VG9nZ2xlKCkge1xuICAgICQoJy5oZWFkZXJfX25hdi10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vaGVhZGVyJztcbiIsImNsYXNzIEhvbWUge1xuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBQYWdlU2Nyb2xsKCk7XG4gIH1cblxuICBzZXR1cFBhZ2VTY3JvbGwoKSB7XG4gICAgJCgnI3Njcm9sbC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7XG4gICAgICBsZXQgb2Zmc2V0ID0gJCgnLnNlY29uZGFyeS1oZXJvJykub2Zmc2V0KCkudG9wIC0gaGVhZGVySGVpZ2h0O1xuXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XG4gICAgICB9LCAzMDApO1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2hvbWUnOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL3BhZ2UtdG9nZ2xlJztcbiIsImNsYXNzIFBhZ2VUb2dnbGUge1xuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBUYWJDbGlja0hhbmRsZXIoKTtcbiAgfVxuXG4gIHNldHVwVGFiQ2xpY2tIYW5kbGVyKCkge1xuICAgIC8vIFN0b3JlIGEgcmVmZXJlbmNlIGZvciB0aGUgcGFnZSB0YWJzXG4gICAgbGV0ICRwYWdlTGlua3MgPSAkKCdhW2RhdGEtcGFnZS1uYW1lXSwgYnV0dG9uW2RhdGEtcGFnZS1uYW1lXScpXG5cbiAgICAkcGFnZUxpbmtzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHBhZ2VOYW1lID0gJCh0aGlzKS5kYXRhKCdwYWdlLW5hbWUnKTtcblxuICAgICAgJCgnW2RhdGEtcGFnZV0nKS5oaWRlKCk7XG4gICAgICAkKCdbZGF0YS1wYWdlPScrIHBhZ2VOYW1lICsnXScpLnNob3coKTtcbiAgICB9KVxuICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBQYWdlVG9nZ2xlO1xuIl19

//# sourceMappingURL=maps/app.js.map
