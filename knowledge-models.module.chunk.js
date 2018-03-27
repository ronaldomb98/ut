webpackJsonp(["knowledge-models.module"],{

/***/ "../../../../../src/app/components/knowledge-models/t1/t1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/knowledge-models/t1/t1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  t1 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/knowledge-models/t1/t1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var T1Component = /** @class */ (function () {
    function T1Component() {
    }
    T1Component.prototype.ngOnInit = function () {
    };
    T1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-t1',
            template: __webpack_require__("../../../../../src/app/components/knowledge-models/t1/t1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/knowledge-models/t1/t1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], T1Component);
    return T1Component;
}());



/***/ }),

/***/ "../../../../../src/app/modules/knowledge-models/knowledge-models.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeModelsModule", function() { return KnowledgeModelsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_knowledge_models_t1_t1_component__ = __webpack_require__("../../../../../src/app/components/knowledge-models/t1/t1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__knowledge_models_routing__ = __webpack_require__("../../../../../src/app/modules/knowledge-models/knowledge-models.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var KnowledgeModelsModule = /** @class */ (function () {
    function KnowledgeModelsModule() {
    }
    KnowledgeModelsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__knowledge_models_routing__["a" /* ROUTES */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_knowledge_models_t1_t1_component__["a" /* T1Component */]]
        })
    ], KnowledgeModelsModule);
    return KnowledgeModelsModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/knowledge-models/knowledge-models.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_knowledge_models_t1_t1_component__ = __webpack_require__("../../../../../src/app/components/knowledge-models/t1/t1.component.ts");

var ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tutoria-1'
    },
    {
        path: 'tutoria-1',
        component: __WEBPACK_IMPORTED_MODULE_0__components_knowledge_models_t1_t1_component__["a" /* T1Component */]
    }
];


/***/ })

});
//# sourceMappingURL=knowledge-models.module.chunk.js.map