"use strict";

/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.getElementById("contactForm").addEventListener("submit", function _callee(event) {
  var form, formData, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          form = event.target;
          formData = new FormData(form);
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch(form.action, {
            method: form.method,
            body: formData
          }));

        case 6:
          response = _context.sent;

          if (response.ok) {
            document.getElementById("submitSuccessMessage").classList.remove("d-none");
            form.reset();
          } else {
            document.getElementById("submitErrorMessage").classList.remove("d-none");
          }

          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          document.getElementById("submitErrorMessage").classList.remove("d-none");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 10]]);
});
//# sourceMappingURL=scripts.dev.js.map
