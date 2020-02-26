/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict'; // import './components/slider';
  // let info = document.querySelector('.tab-content'),
  //     tabs = document.querySelectorAll('.info-tab'),
  //     imgs = document.querySelectorAll('.img-fluid'),
  //     bigImg = document.querySelector('.img-tabcontent');
  // function bigImage(a) {
  //     for (let i = a; i < imgs.length; i++) {
  //         if (imgs[i] == imgs[a]) {
  //             let picture = imgs[i].getAttribute('src');
  //             bigImg.classList.remove('hide');
  //             bigImg.innerHTML = `<img src = "${picture}">`;
  //         }
  //     }
  // }
  // function nonActiveTab() {
  //     for (let i = 0; i < tabs.length; i++) {
  //         if (tabs[i].classList.contains('active')) {
  //             tabs[i].classList.remove('active');
  //         }
  //     }
  // }
  // function activeTab(b) {
  //     for (let i = 0; i < tabs.length; i++) {
  //         if (tabs[i] == tabs[b]) {
  //             tabs[i].classList.add('active');
  //         }
  //     }
  // }
  // if (info) {
  //     info.addEventListener('click', function (event) {
  //         let target = event.target;
  //         if (target && target.classList.contains('info-tab')) {
  //             for (let i = 0; i < tabs.length; i++) {
  //                 if (target == tabs[i]) {
  //                     if (tabs[i].classList.contains('show-all')) {
  //                         bigImg.classList.add('hide');
  //                         bigImg.innerHTML = '';
  //                         nonActiveTab();
  //                         activeTab(i);
  //                         break;
  //                     }
  //                     nonActiveTab();
  //                     activeTab(i);
  //                     bigImage(i);
  //                     break;
  //                 }
  //             }
  //         }
  //     });
  // }

  var reviewBlock = document.querySelector('.reviews-block');
  var review = document.querySelectorAll('.review-text');

  if (reviewBlock) {
    reviewBlock.addEventListener('click', function (ev) {
      var target = ev.target;

      if (target && target.classList.contains('review-text')) {
        for (var i = 0; i < review.length; i++) {
          if (target == review[i]) {
            // nonFirsterActive();
            firsterActive(i);
            break;
          }
        }
      }
    });
  }

  function nonFirsterActive() {
    for (var i = 0; i < review.length; i++) {
      if (review[i].classList.contains('firster')) {
        review[i].classList.remove('firster');
      }
    }
  }

  function firsterActive(c) {
    for (var i = 0; i < review.length; i++) {
      if (review[i] == review[c]) {
        nonFirsterActive();
        review[i].classList.add('firster');
      }
    }
  }

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.scrollToTop').fadeIn('slow', function () {
          $(this).attr('style', 'display: block !important;');
        });
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
    $('.scrollToTop').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    $(window).on('load', function () {
      $('.preloader').delay(500).fadeOut('slow', function () {
        $(this).attr('style', 'display: none !important;');
      });
    });
  });
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\OpenServer\OSPanel\domains\my_constrr_gulp\wp-content\themes\myconstruction\src\js\bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmV2aWV3QmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXZpZXciLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXYiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImkiLCJsZW5ndGgiLCJmaXJzdGVyQWN0aXZlIiwibm9uRmlyc3RlckFjdGl2ZSIsInJlbW92ZSIsImMiLCJhZGQiLCIkIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZmFkZUluIiwiYXR0ciIsImZhZGVPdXQiLCJjbGljayIsImFuaW1hdGUiLCJvbiIsImRlbGF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLE1BQU0sQ0FBQ0Ms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LENBQXdCO0FBQ3BCTCxpQkFBUyxFQUFFO0FBRFMsT0FBeEIsRUFFRyxHQUZIO0FBR0EsYUFBTyxLQUFQO0FBQ0gsS0FMRDtBQU9BRixLQUFDLENBQUNsQixNQUFELENBQUQsQ0FBVTBCLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLFlBQVk7QUFDN0JSLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JTLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCSixPQUEzQixDQUFtQyxNQUFuQyxFQUEyQyxZQUFZO0FBQ25ETCxTQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxPQUFiLEVBQXNCLDJCQUF0QjtBQUNILE9BRkQ7QUFHSCxLQUpEO0FBT0gsR0ExQkEsQ0FBRDtBQWlDSCxDQXRJRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBpbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInO1xyXG5cclxuXHJcblxyXG4gICAgLy8gbGV0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRlbnQnKSxcclxuICAgIC8vICAgICB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm8tdGFiJyksXHJcbiAgICAvLyAgICAgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctZmx1aWQnKSxcclxuICAgIC8vICAgICBiaWdJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLXRhYmNvbnRlbnQnKTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBiaWdJbWFnZShhKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IGE7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbWdzW2ldID09IGltZ3NbYV0pIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBwaWN0dXJlID0gaW1nc1tpXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG4gICAgLy8gICAgICAgICAgICAgYmlnSW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIC8vICAgICAgICAgICAgIGJpZ0ltZy5pbm5lckhUTUwgPSBgPGltZyBzcmMgPSBcIiR7cGljdHVyZX1cIj5gO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIG5vbkFjdGl2ZVRhYigpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRhYnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGFic1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBhY3RpdmVUYWIoYikge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgIC8vICAgICAgICAgaWYgKHRhYnNbaV0gPT0gdGFic1tiXSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGFic1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoaW5mbykge1xyXG4gICAgLy8gICAgIGluZm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vICAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIC8vICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmZvLXRhYicpKSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gdGFic1tpXSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAodGFic1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3ctYWxsJykpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0ltZy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBiaWdJbWcuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBub25BY3RpdmVUYWIoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYihpKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5vbkFjdGl2ZVRhYigpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWIoaSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJpZ0ltYWdlKGkpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgbGV0IHJldmlld0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld3MtYmxvY2snKTtcclxuICAgIGxldCByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3LXRleHQnKTtcclxuXHJcbiAgICBpZiAocmV2aWV3QmxvY2spIHtcclxuICAgICAgICByZXZpZXdCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jldmlldy10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2aWV3Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PSByZXZpZXdbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uRmlyc3RlckFjdGl2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdGVyQWN0aXZlKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBub25GaXJzdGVyQWN0aXZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2aWV3Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXZpZXdbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXJzdGVyJykpIHtcclxuICAgICAgICAgICAgICAgIHJldmlld1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdmaXJzdGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlyc3RlckFjdGl2ZShjKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXZpZXcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHJldmlld1tpXSA9PSByZXZpZXdbY10pIHtcclxuICAgICAgICAgICAgICAgIG5vbkZpcnN0ZXJBY3RpdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldmlld1tpXS5jbGFzc0xpc3QuYWRkKCdmaXJzdGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcclxuICAgICAgICAgICAgICAgICQoJy5zY3JvbGxUb1RvcCcpLmZhZGVJbignc2xvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7Jyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5zY3JvbGxUb1RvcCcpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2Nyb2xsVG9Ub3AnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgICAgICB9LCA4MDApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnByZWxvYWRlcicpLmRlbGF5KDUwMCkuZmFkZU91dCgnc2xvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3R5bGUnLCAnZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=