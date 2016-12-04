import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

// export to make is visible for other modules
@Component({
    selector: 'author', // whne ng found element 'course' it will replace create template at the element
    template: `<h2>Authors</h2>
    {{ title}}
    <ul>
        <li *ngFor="#a of authors">
        {{ a }}
        </li>
    </ul>
    `, 
    providers: [AuthorService] //Define dependcies
}) 
export class AuthorComponent { 
    title: string = "Author title"; // can be  title = "Course tile", title will also have type sting
    authors;

    // get object as parameter to be able to mock testing
    constructor(as: AuthorService) {
        this.authors = as.getAuthor();
    }
}