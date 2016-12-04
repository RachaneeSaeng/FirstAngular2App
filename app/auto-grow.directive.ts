import {Directive, ElementRef, Renderer} from 'angular2/core'

// ElementRef to be able to access host element
// Renderer to be able to render element from directive 

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)' : 'onBlur()'
    } // subscripe for event from element event: our diective method
})
export class AutoGrowdirective {
  // private keyword auto create private fields for us, cool!
    constructor(private el: ElementRef, private render: Renderer) {

    }

    onFocus() {        
        this.render.setElementStyle(this.el.nativeElement, 'width', '300');
    }

    onBlur() {
        this.render.setElementStyle(this.el.nativeElement, 'width', '150');
    }
}