System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent() {
                    this.lat = "46.2250178";
                    this.long = "6.0817449";
                    this.title = 'Smartwave';
                }
                MapComponent.prototype.switch = function () {
                    if (this.title == 'Smartwave') {
                        this.lat = "46.2000";
                        this.long = "6.1500";
                        this.title = 'Geneve centre';
                    }
                    else {
                        this.lat = "46.2250178";
                        this.long = "6.0817449";
                        this.title = 'Smartwave';
                    }
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'my-google-map',
                        template: "\n    <div>\n        <button class=\"btn btn-primary\" style=\"margin: 20px\" (click)=\"switch()\">Switch</button>\n        <span>{{title}}</span>\n\n        <div class=\"map-container\">\n            <google-map latitude=\"{{lat}}\" longitude=\"{{long}}\" zoom=\"15\" disabledDefaultUI>\n                <google-map-marker latitude=\"{{lat}}\" longitude=\"{{long}}\" title=\"{{title}}\"></google-map-marker>\n            </google-map>\n        </div>\n    </div>\n    ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map