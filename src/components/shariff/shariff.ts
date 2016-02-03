import {Component} from 'angular2/core';

@Component({
    selector: 'shariff-widget',
    styleUrls: ['src/components/shariff/shariff.complete.css'],
    template: '<div class="shariff" data-services="[&quot;twitter&quot;]"></div>'
})


// Alternative mit templateUrl
// @Component({
//  selector: 'shariff-widget',
//  styleUrls: ['src/components/shariff/shariff.complete.css'],
//  templateUrl:'src/components/shariff/shariff.html'
// })

export class Shariff {
    // Import von javascript-File laut Googlesuche...
    // ##
    // constructor(){
    //     System.import('path/to/your/file').then(refToLoadedScript => {
    //             refToLoadedScript.someFunction();
    //         }
    //    );
    // ##


    onNGInit(){
        // Some Code here....

        // Neues Shariff-Obj anlegen
        // var bcont = $('shariff');
        // var Shariff = require('shariff');
        // new Shariff(bcont, {services: 'twitter'});
    }
}