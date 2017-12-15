var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseElement = (function () {
    function BaseElement() {
        //游戏元素基类
        this.type = ""; //元素类型
        //public name:string = "";
    }
    return BaseElement;
}());
__reflect(BaseElement.prototype, "BaseElement");
