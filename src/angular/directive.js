//export type restrict = "E" | "A" | "C" | "M";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Directive = /** @class */ (function () {
    function Directive() {
        this.restrict = "A";
        this.require = [];
    }
    return Directive;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        _this.name = "widgetsButton";
        _this.template = "<div>test</div>";
        return _this;
    }
    return Button;
}(Directive));
var Angular = /** @class */ (function () {
    function Angular(ngModule) {
        this.ngModule = ngModule;
    }
    Angular.prototype.createDirective = function (directive) {
        this.ngModule.directive(directive.name, directive.require.concat([function () {
                return directive;
            }]));
    };
    return Angular;
}());
// angular.module('huoyun.widget').directive('widgetsButton', [
//   function () {
//     return {
//       restrict: 'A',
//       scope: {
//         options: "="
//       },
//       templateUrl: 'button/button.html',
//       link: function ($scope, elem, attrs) { }
//     }
//   }
// ]);
