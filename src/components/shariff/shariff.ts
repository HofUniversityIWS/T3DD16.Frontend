import {Component} from 'angular2/core';

@Component({
    selector: 'shariff-widget',
    styleUrls: ['src/components/shariff/shariff.complete.css'],
    template: '<div class="shariff" data-services="[&quot;twitter&quot;]"></div>'
})


// @Component({
//  selector: 'shariff-widget',
//  styleUrls: ['src/components/shariff/shariff.complete.css'],
//  templateUrl:'<div class="shariff" data-services="[&quot;twitter&quot;]"></div>'
// })

export class Shariff {
    //value: string;
    //url: string

    //value = "twitter";
    //url = url;
    // Create all Links in <tag></tag>-Element


    // Import von javascript
    // constructor(){
    //     System.import('path/to/your/file').then(refToLoadedScript => {
    //             refToLoadedScript.someFunction();
    //         }
    //    );

    // my-app.js
    //var Shariff = require('shariff');
    //var $ = require('jquery');
    //var buttonsContainer = $('.some-selector');
    //new Shariff(buttonsContainer, {
    //orientation: 'vertical'
    //});



    onNGInit(){
        // Some Code here....
        // var bcont = $('shariff');
        // var Shariff = require('shariff');
        // new Shariff(bcont, {});
    }
}