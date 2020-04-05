"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Kongapay = /*#__PURE__*/function () {
  function Kongapay() {
    _classCallCheck(this, Kongapay);
  }

  _createClass(Kongapay, [{
    key: "init",
    value: function init() {
      var _this = this;

      var box = document.getElementById("initiate_transaction");
      box === null || box === void 0 ? void 0 : box.addEventListener("click", function (e) {
        return _this.initiateTransaction({
          e: e
        });
      });
    }
  }, {
    key: "initiateTransaction",
    value: function initiateTransaction(_ref) {
      var args = _extends({}, _ref);

      console.log("Transaction initiated");
    }
  }]);

  return Kongapay;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zyb250LXRzL2NoYW5uZWxzL2tvbmdhcGF5L2luZGV4LnRzIl0sIm5hbWVzIjpbIktvbmdhcGF5IiwiYm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaW5pdGlhdGVUcmFuc2FjdGlvbiIsImFyZ3MiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7Ozs7Ozs7MkJBQ0s7QUFBQTs7QUFDSCxVQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixzQkFBeEIsQ0FBVjtBQUNBRixNQUFBQSxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILFlBQUFBLEdBQUcsQ0FBRUcsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQWEsS0FBSSxDQUFDQyxtQkFBTCxDQUF5QjtBQUFDRCxVQUFBQSxDQUFDLEVBQURBO0FBQUQsU0FBekIsQ0FBYjtBQUFBLE9BQS9CO0FBQ0g7Ozs4Q0FFeUQ7QUFBQSxVQUFsQ0UsSUFBa0M7O0FBQ3REQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgS29uZ2FwYXkgaW1wbGVtZW50cyBJQ2hhbm5lbCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdGlhdGVfdHJhbnNhY3Rpb25cIik7XG4gICAgICAgIGJveD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOkV2ZW50KSA9PiB0aGlzLmluaXRpYXRlVHJhbnNhY3Rpb24oe2V9KSk7XG4gICAgfVxuXG4gICAgaW5pdGlhdGVUcmFuc2FjdGlvbih7Li4uYXJnc306IHsgW3A6IHN0cmluZ106IGFueSB9KTogYW55IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBpbml0aWF0ZWRcIilcbiAgICB9XG59Il19