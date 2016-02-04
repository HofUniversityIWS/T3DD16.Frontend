import {Component, OnInit, OnChanges, Input, ElementRef, SimpleChange} from 'angular2/core';

declare var Shariff: Function;

@Component({
    selector: 'shariff',
    styleUrls: ['assets/external/shariff/shariff.complete.css'],
    template: `
        <div class="shariff" [attr.data-services]="_shariffServices"></div>
    `,
    inputs: ['orientation', 'services']
})

// Alternative mit templateUrl
// @Component({
//  selector: 'shariff-widget',
//  styleUrls: ['src/components/shariff/shariff.complete.css'],
//  templateUrl:'src/components/shariff/shariff.html'
// })

export class ShariffComponent implements OnInit, OnChanges
{
    @Input()
    orientation: String;
    @Input()
    services: String;

    protected _shariffServices: String = '';
    protected _shariffElement: HTMLElement;

    // Import von javascript-File laut Googlesuche...
    // ##
    // constructor(){
    //     System.import('path/to/your/file').then(refToLoadedScript => {
    //             refToLoadedScript.someFunction();
    //         }
    //    );
    // ##

    constructor(protected _elementRef: ElementRef)
    {
    }

    getServicesJson(): String
    {
        console.log('json');
        return JSON.stringify(this.services.split(',').map(Function.prototype.call, String.prototype.trim));
    }

    ngOnInit()
    {
    }
    ngOnChanges(changes: {[key: string]: SimpleChange})
    {
        this._shariffElement = this._elementRef.nativeElement.querySelector('.shariff');
        if (changes['services']) {
            this._shariffServices = JSON.stringify(this.services.split(',').map(Function.prototype.call, String.prototype.trim));
            var x = new Shariff(this._shariffElement);
            console.log(x);
        }

        // Some Code here....

        // Neues Shariff-Obj anlegen
        // var bcont = $('shariff');
        // var Shariff = require('shariff');
        // new Shariff(bcont, {services: 'twitter'});
    }
}