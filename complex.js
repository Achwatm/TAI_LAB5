"use strict";
var Complex = /** @class */ (function () {
    function Complex(rzecz, urojona) {
        this.rzecz = rzecz;
        this.urojona = urojona;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.rzecz + obj.rzecz, this.urojona + obj.urojona);
    };
    Complex.prototype.substract = function (obj) {
        return new Complex(this.rzecz - obj.rzecz, this.urojona - obj.urojona);
    };
    Complex.prototype.modul = function () {
        return Math.sqrt((this.rzecz * this.rzecz) + (this.urojona * this.urojona));
    };
    Complex.prototype.toString = function () {
        return this.rzecz + "+" + this.urojona + "i";
    };
    return Complex;
}());
var obj = new Complex(3, 2);
var obj2 = new Complex(2, 3);
obj = obj.add(obj2);
console.log(obj);
obj = obj.substract(obj2);
console.log(obj);
console.log(obj.modul());
console.log(obj.toString());
