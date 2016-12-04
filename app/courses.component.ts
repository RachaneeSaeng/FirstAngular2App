import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowdirective} from './auto-grow.directive'

// export to make is visible for other modules
@Component({
    selector: 'course', // whne ng found element 'course' it will replace create template at the element
    template: `<h2>Courses</h2>
    {{ title}}<br>
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="#c of courses">
        {{ c }}
        </li>
    </ul>
    `, // model binding
    providers: [CourseService], //Define dependcies
    directives: [AutoGrowdirective]
}) // this tag similar to attribute in C#
export class CourseComponent { 
    title: string = "Course title"; // can be  title = "Course tile", title will also have type sting
    courses;

    // get object as parameter to be able to mock testing
    constructor(cs: CourseService) {
        this.courses = cs.getCourse();
    }
}