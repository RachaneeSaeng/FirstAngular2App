import {Component, enableProdMode} from 'angular2/core' //import module Component from core angular
import {CourseComponent} from './courses.component' // start form current folder and file name with out .ts
import {AuthorComponent} from './authors.component'

enableProdMode();
// call class Component
@Component({
    selector: 'my-app',
    template: `
    <h1>Hello world</h1>
    <course></course>
    <author></author>`,
    directives: [CourseComponent, AuthorComponent] //specififed component or directive required for this component
})
export class AppComponent { } // just a plain typescript class. Name for the created component in th above line