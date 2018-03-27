webpackJsonp(["numerical-methods.module"],{

/***/ "../../../../../src/app/components/numerical-methods/t1/t1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/numerical-methods/t1/t1.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n\n\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n    <div class=\"card\">\n      <div class=\"card-header card-header-text\" data-background-color=\"blue\">\n        <h4 class=\"card-title\">Gráfica</h4>\n      </div>\n      <div class=\"card-content\">\n        <!--<mat-card>-->\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title class=\"text-center\">\n              <h2>Configuración de la Gráfica</h2>\n            </mat-card-title>\n          </mat-card-header>\n\n          <mat-card-content>\n            <div mat-card-image class=\"text-center\">\n              <ngx-charts-line-chart *ngIf=\"multi.length >= 1\" [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"multi\" [gradient]=\"gradient\"\n                [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n                [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [autoScale]=\"autoScale\" (select)=\"onSelect($event)\">\n              </ngx-charts-line-chart>\n            </div>\n            <form [style.marginTop.px]=\"multi.length >= 1 ? 210 : 0\" [formGroup]=\"initDataForm\" class=\"w-100\" (ngSubmit)=\"loadBiseccionExcersice(initDataForm.value)\">\n              <div class=\"row\" formGroupName=\"fromTo\">\n                <div class=\"col\">\n                  <mat-form-field class=\"w-100\">\n                    <input matInput formControlName=\"from\" placeholder=\"Desde\" type=\"number\">\n                    <mat-error>Campo\n                      <strong>Obligatorio</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </div>\n                <div class=\"col\">\n                  <mat-form-field class=\"w-100\">\n                    <input matInput formControlName=\"to\" placeholder=\"Hasta\" type=\"number\">\n                    <mat-error>Campo\n                      <strong>Obligatorio</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </div>\n              </div>\n\n\n              <div class=\"text-center\" formGroupName=\"excersice\">\n                <h3 class=\"h3\">\n                  <strong>Ejercicios</strong>\n                </h3>\n                <mat-checkbox formControlName=\"a\">A</mat-checkbox>\n                <mat-checkbox formControlName=\"b\">B</mat-checkbox>\n                <mat-checkbox formControlName=\"c\">C</mat-checkbox>\n                <mat-checkbox formControlName=\"d\">D</mat-checkbox>\n                <div class=\"m-4\">\n                  <button mat-raised-button color=\"primary\" [disabled]=\"initDataForm.invalid\">Enviar</button>\n                </div>\n              </div>\n            </form>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n\n\n    <div class=\"card\">\n      <div class=\"card-header card-header-text\" data-background-color=\"blue\">\n        <h4 class=\"card-title\">Herramientas</h4>\n      </div>\n      <div class=\"card-content\">\n        <!--<mat-card>-->\n        <div class=\"row\">\n          <div class=\"col-sm-4\" *ngFor=\"let row of data\">\n            <mat-card class=\"\">\n              <mat-card-header>\n                <mat-card-title>{{row.title}}</mat-card-title>\n                <mat-card-subtitle> {{row.subtitle}}</mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"number\" [formControl]=\"row.control\" placeholder=\"Ingrese el valor de X\">\n                </mat-form-field>\n                <p [id]=\"row.id\"></p>\n              </mat-card-content>\n            </mat-card>\n          </div>\n        </div>\n\n        <mat-card class=\"mb-5\">\n          <mat-card-header>\n            <mat-card-title>Calculo de Xi</mat-card-title>\n            <mat-card-subtitle>(a + b) / 2</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n\n            <form [formGroup]=\"formXi\">\n              <div class=\"row no-gutters\">\n                <div class=\"col\">\n                  <mat-form-field class=\"w-100\">\n                    <input matInput type=\"number\" formControlName=\"a\" placeholder=\"a\">\n                    <mat-error>Campo\n                      <strong>Obligatorio</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </div>\n                <div class=\"col\">\n                  <mat-form-field class=\"w-100\">\n                    <input matInput type=\"number\" formControlName=\"b\" placeholder=\"b\">\n                    <mat-error>Campo\n                      <strong>Obligatorio</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </div>\n              </div>\n\n            </form>\n            <p [innerHTML]=\"resultFormXi\"> </p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n\n\n    <div class=\"text-center\">\n      <h2>Resultados</h2>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header card-header-text\" data-background-color=\"blue\">\n        <h4 class=\"card-title\">Ejercicio A</h4>\n\n      </div>\n      <div class=\"card-content\">\n        <mat-table #table [dataSource]=\"tablea\">\n\n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n\n          <!-- Position Column -->\n\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef> Vuelta </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i=index\"> {{i+1}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"xi\">\n            <mat-header-cell *matHeaderCellDef> xi </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.xi}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"xu\">\n            <mat-header-cell *matHeaderCellDef> xu </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.xu}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"ea\">\n            <mat-header-cell *matHeaderCellDef> Ea. </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.ea}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"xr\">\n            <mat-header-cell *matHeaderCellDef> xr. </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.xr}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"fxr\">\n            <mat-header-cell *matHeaderCellDef> f(xr). </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.fxr}} </mat-cell>\n          </ng-container>\n\n\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumnsBisection\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumnsBisection;\"></mat-row>\n        </mat-table>\n\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header card-header-text\" data-background-color=\"blue\">\n        <h4 class=\"card-title\">Ejercicio B</h4>\n      </div>\n      <div class=\"card-content\">\n        <mat-table #table [dataSource]=\"tableb\">\n\n          <!--- Note that these columns can be defined in any order.\n                    The actual rendered columns are set as a property on the row definition\" -->\n\n          <!-- Position Column -->\n\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef> Vuelta </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i=index\"> {{i+1}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"xi\">\n            <mat-header-cell *matHeaderCellDef> xi </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.xi}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"xu\">\n            <mat-header-cell *matHeaderCellDef> xu </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.xu}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"ea\">\n            <mat-header-cell *matHeaderCellDef> Ea. </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.ea}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"xr\">\n            <mat-header-cell *matHeaderCellDef> xr. </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.xr}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"fxr\">\n            <mat-header-cell *matHeaderCellDef> f(xr). </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.fxr}} </mat-cell>\n          </ng-container>\n\n\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumnsBisection\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumnsBisection;\"></mat-row>\n        </mat-table>\n\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header card-header-text\" data-background-color=\"blue\">\n        <h4 class=\"card-title\">Ejercicio C</h4>\n      </div>\n      <div class=\"card-content\">\n        <p id=\"resultadoEjercicioC\"></p>\n\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header card-header-text\" data-background-color=\"blue\">\n        <h4 class=\"card-title\">Ejercicio D</h4>\n      </div>\n      <div class=\"card-content\">\n        <p id=\"resultadoEjercicioD\"></p>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "../../../../../src/app/components/numerical-methods/t1/t1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function T1Component(fb) {
        this.fb = fb;
        this.title = 'ut';
        this.multi = [];
        this.view = [window.screen.width - 300, window.screen.height - 500];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'X';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Y';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // line, area
        this.autoScale = true;
        this.xexcersiceb = this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.xexcersicea = this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.xexcersicec = this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.xexcersicecDerivate = this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.xexcersiced = this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.xexcersicedDerivate = this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.resultExcersicea = null;
        this.nameexcersicea = '"e^(x-1)-1.5x"';
        this.nameexcersiceb = "sen(x)-2x+1";
        this.nameexcersicec = "cox(x)-x^2";
        this.nameexcersicecDerivative = "-sin(x)-2x";
        this.nameexcersiced = "2x^2+1-e^x";
        this.nameexcersicedDerivative = "4x-e^x";
        this.data = [
            {
                title: 'Ejercicio A',
                subtitle: this.nameexcersicea,
                control: this.xexcersicea,
                id: 'ejercicioa',
                equation: this.equationa
            },
            {
                title: 'Ejercicio B',
                subtitle: this.nameexcersiceb,
                control: this.xexcersiceb,
                id: 'ejerciciob',
                equation: this.equationb
            },
            {
                title: 'Ejercicio C',
                subtitle: this.nameexcersicec,
                control: this.xexcersicec,
                id: 'ejercicioc',
                equation: this.equationc
            },
            {
                title: 'Ejercicio C Derivada',
                subtitle: this.nameexcersicecDerivative,
                control: this.xexcersicecDerivate,
                id: 'ejerciciodDerivative',
                equation: this.equationcDerivative
            },
            {
                title: 'Ejercicio D',
                subtitle: this.nameexcersiced,
                control: this.xexcersiced,
                id: 'ejerciciod',
                equation: this.equationd
            },
            {
                title: 'Ejercicio D Derivada',
                subtitle: this.nameexcersicedDerivative,
                control: this.xexcersicedDerivate,
                id: 'ejerciciodDerivative',
                equation: this.equationdDerivative
            }
        ];
        this.displayedColumnsBisection = ['id', 'xi', 'xu', 'ea', 'xr', 'fxr'];
    }
    T1Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.newtonRaphsonMethod(1, 50, _this.equationc, _this.equationcDerivative, 'resultadoEjercicioC');
            _this.newtonRaphsonMethod(1, 100, _this.equationd, _this.equationdDerivative, 'resultadoEjercicioD');
        }, 3000);
    };
    T1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.data.forEach(function (item) { return _this.loadxExcersice(item.control, item.id, item.equation); });
        this.buildInitDataForm();
        this.buildFormXi();
        this.tablea = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatTableDataSource */]((this.bisectionMethod(2, 3, 0, this.equationa)));
        this.tableb = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatTableDataSource */]((this.bisectionMethod(2, 3, 0, this.equationa)));
        this.bisectionMethod(0, 1, 0, this.equationb);
        this.bisectionMethod(0, 1, 0, this.equationc);
        this.loadBiseccionExcersice(this.initDataForm.value);
    };
    T1Component.prototype.loadTablea = function (rounds) {
        this.tablea = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatTableDataSource */](rounds);
    };
    T1Component.prototype.loadxExcersice = function (xexcersice, ref, equation) {
        xexcersice
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (x) {
            if (typeof x == 'number') {
                var val = equation(x);
                document.getElementById(ref).innerHTML = val + '';
            }
            else {
                document.getElementById(ref).innerHTML = "\n          <div class=\"alert alert-danger\" role=\"alert\">\n            Solo se aceptan datos <strong>numericos</strong>\n          </div>\n          ";
            }
        });
    };
    T1Component.prototype.buildInitDataForm = function () {
        this.initDataForm = this.fb.group({
            fromTo: this.fb.group({
                from: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                to: [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
            }),
            excersice: this.fb.group({
                a: [true],
                b: [true],
                c: [true],
                d: [true]
            })
        });
    };
    T1Component.prototype.buildFormXi = function () {
        var _this = this;
        this.formXi = this.fb.group({
            a: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.formXi
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (val) {
            if (_this.formXi.valid) {
                var result = (val.a + val.b) / 2;
                _this.resultFormXi = val.a + " + " + val.b + " = " + result;
            }
        });
    };
    T1Component.prototype.loadBiseccionExcersice = function (formData) {
        this.multi = [];
        var excersice = formData.excersice;
        if (excersice.a)
            this.excersice(formData.fromTo, this.equationa, this.nameexcersicea);
        if (excersice.b)
            this.excersice(formData.fromTo, this.equationb, this.nameexcersiceb);
        if (excersice.c)
            this.excersice(formData.fromTo, this.equationc, this.nameexcersicec);
        if (excersice.d)
            this.excersice(formData.fromTo, this.equationd, this.nameexcersiced);
    };
    T1Component.prototype.excersice = function (fromTo, funct, name) {
        var equation = {
            "name": name,
            "series": []
        };
        var i = fromTo.from;
        while (i <= fromTo.to) {
            var val = funct(i);
            equation.series.push({
                "name": i,
                "value": val
            });
            i += 0.001;
        }
        this.multi.push(equation);
    };
    T1Component.prototype.onSelect = function (event) {
        console.log(event);
    };
    T1Component.prototype.equationa = function (x) {
        return Math.pow(Math.E, (x - 1)) - 1.5 * x;
    };
    T1Component.prototype.equationb = function (x) {
        return Math.sin(x) - (2 * x) + 1;
    };
    T1Component.prototype.equationc = function (x) {
        return Math.cos(x) - Math.pow(x, 2);
    };
    T1Component.prototype.equationcDerivative = function (x) {
        return -1 * Math.sin(x) - 2 * x;
    };
    T1Component.prototype.equationd = function (x) {
        return 2 * Math.pow(x, 2) + 1 - Math.pow(Math.E, x);
    };
    T1Component.prototype.equationdDerivative = function (x) {
        return 4 * x - Math.pow(Math.E, x);
    };
    T1Component.prototype.xi = function (a, b) {
        var val = (a + b) / 2;
        return val;
    };
    T1Component.prototype.errora = function (xNew, xPrevious) {
        if (!xPrevious)
            return;
        var calc = (xNew - xPrevious) / xNew;
        return Math.abs(calc) * 100;
    };
    T1Component.prototype.erroraAlternative = function (xu, xi) {
        var calc = (xu - xi) / (xu + xi);
        return Math.abs(calc) * 100;
    };
    T1Component.prototype.bisectionMethod = function (minInterval, maxInterval, errorAdmit, equation, maxRounds) {
        var rounds = [];
        var i = 0;
        var initRound = this.bisectionRound(minInterval, maxInterval, equation);
        rounds.push(initRound);
        while (true) {
            var greaterThan0 = rounds.filter(function (round) { if (round.fxr > 0)
                return round; });
            var lowerThan0 = rounds.filter(function (round) { if (round.fxr < 0)
                return round; });
            var b = greaterThan0[greaterThan0.length - 1] ? greaterThan0[greaterThan0.length - 1].xr : (equation(minInterval) > 0) ? minInterval : maxInterval;
            var a = lowerThan0[lowerThan0.length - 1] ? lowerThan0[lowerThan0.length - 1].xr : (equation(minInterval) < 0) ? minInterval : maxInterval;
            var round = this.bisectionRound(a, b, equation, rounds[rounds.length - 1].xr);
            if (!round) {
                console.log("Algo salio mal en el round ", rounds.length + 1);
                rounds.splice(0, -1);
                return [];
            }
            rounds.push(round);
            i++;
            if (maxRounds === i || rounds[rounds.length - 1].ea <= errorAdmit)
                break;
        }
        return rounds;
    };
    T1Component.prototype.newtonRaphsonMethod = function (xi, maxRounds, equation, equationDerivative, id) {
        var rounds = [];
        var i = 0;
        while (i <= maxRounds) {
            var fx = equation(xi);
            var fprimex = equationDerivative(xi);
            if (fprimex == 0)
                return console.log("fprima es igual a 0");
            var xi_1 = this.newtonRaphson(xi, fx, fprimex);
            if (xi == xi_1)
                return document.getElementById(id).innerHTML = "El resultado es: " + xi + " cantidad de vueltas " + i;
            xi = xi_1;
            i++;
        }
        console.log(id);
        document.getElementById(id).innerHTML = "El resultado es: " + xi + " cantidad de vueltas " + i;
    };
    T1Component.prototype.newtonRaphson = function (xn, fx, fprimex) {
        return xn - (fx / fprimex);
    };
    T1Component.prototype.bisectionRound = function (minInterval, maxInterval, equation, xPrevious) {
        var a = equation(minInterval);
        var b = equation(maxInterval);
        if (!this.isMaxMin0(a, b))
            return;
        var xi = a;
        var xu = b;
        var xr = this.xi(minInterval, maxInterval);
        var ea = this.errora(xr, xPrevious);
        var fxr = equation(xr);
        return { xi: xi, xu: xu, xr: xr, ea: ea, fxr: fxr };
    };
    T1Component.prototype.isMaxMin0 = function (a, b) {
        return (a < 0 && b > 0) || (a > 0 && b < 0);
    };
    T1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-t1',
            template: __webpack_require__("../../../../../src/app/components/numerical-methods/t1/t1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/numerical-methods/t1/t1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], T1Component);
    return T1Component;
}());



/***/ }),

/***/ "../../../../../src/app/components/numerical-methods/tutoringone/tutoringone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/numerical-methods/tutoringone/tutoringone.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tutoringone works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/numerical-methods/tutoringone/tutoringone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutoringoneComponent; });
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

var TutoringoneComponent = /** @class */ (function () {
    function TutoringoneComponent() {
    }
    TutoringoneComponent.prototype.ngOnInit = function () {
    };
    TutoringoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tutoringone',
            template: __webpack_require__("../../../../../src/app/components/numerical-methods/tutoringone/tutoringone.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/numerical-methods/tutoringone/tutoringone.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutoringoneComponent);
    return TutoringoneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/numerical-methods/numerical-methods.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericalMethodsModule", function() { return NumericalMethodsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_numerical_methods_tutoringone_tutoringone_component__ = __webpack_require__("../../../../../src/app/components/numerical-methods/tutoringone/tutoringone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_numerical_methods_t1_t1_component__ = __webpack_require__("../../../../../src/app/components/numerical-methods/t1/t1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__numerical_methods_routing__ = __webpack_require__("../../../../../src/app/modules/numerical-methods/numerical-methods.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_imports_common_imports_module__ = __webpack_require__("../../../../../src/app/modules/common-imports/common-imports.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NumericalMethodsModule = /** @class */ (function () {
    function NumericalMethodsModule() {
    }
    NumericalMethodsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__numerical_methods_routing__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_6__common_imports_common_imports_module__["a" /* CommonImportsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_numerical_methods_tutoringone_tutoringone_component__["a" /* TutoringoneComponent */], __WEBPACK_IMPORTED_MODULE_3__components_numerical_methods_t1_t1_component__["a" /* T1Component */]]
        })
    ], NumericalMethodsModule);
    return NumericalMethodsModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/numerical-methods/numerical-methods.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_numerical_methods_t1_t1_component__ = __webpack_require__("../../../../../src/app/components/numerical-methods/t1/t1.component.ts");

var ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tutoria-1'
    },
    {
        path: 'tutoria-1',
        component: __WEBPACK_IMPORTED_MODULE_0__components_numerical_methods_t1_t1_component__["a" /* T1Component */]
    }
];


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__["a" /* debounceTime */])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map 


/***/ })

});
//# sourceMappingURL=numerical-methods.module.chunk.js.map