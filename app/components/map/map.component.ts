import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'my-google-map',
    template: `
    <div>
        <button class="btn btn-primary" style="margin: 20px" (click)="switch()">Switch</button>
        <span>{{title}}</span>

        <div class="map-container">
            <google-map latitude="{{lat}}" longitude="{{long}}" zoom="15" disabledDefaultUI>
                <google-map-marker latitude="{{lat}}" longitude="{{long}}" title="{{title}}"></google-map-marker>
            </google-map>
        </div>
    </div>
    `,
    directives:[]
})

export class MapComponent{
    lat:string;
    long:string;
    title:string;

    constructor() {
        this.lat="46.2250178";
        this.long="6.0817449";
        this.title = 'Smartwave';
    }

    switch() {
        if(this.title == 'Smartwave'){
            this.lat="46.2000";
            this.long="6.1500";
            this.title = 'Geneve centre';
        }else{
            this.lat="46.2250178";
            this.long="6.0817449";
            this.title = 'Smartwave';
        }

    }
}