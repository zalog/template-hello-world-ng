import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

/*
The @Component decorator contains metadata describing how to create and present the component. Here are some of the configuration options:
    selector - a CSS selector that tells Angular to create and insert an instance of this component where it finds the selector in parent component's template.
    template - A visual tree that represents the component view. Here you can use all NativeScript UI elements and custom defined UI components.
    templateUrl - The address of a file where the component template is located.
    styles - CSS directives that define the component style.
    styleUrls - An array containing URLs of CSS files that define the component style.
    animations - The animations associated with this component.
    providers - an array of dependency injection providers for services that the component requires.
*/
@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    /*
    Using our injectible service to load the data in the component
    */
    constructor(private itemService: ItemService) { }

    /*
    The component lifecycle is controlled by the Angular application. It creates, updates and destroys components. 
    Lifecycle hooks are used to handle different events from the component lifecycle. 
    Each hook method starts with the ng prefix. The following are some the component lifecycle methods:
        ngOnInit - Called after all data-bound input methods are initialized.
        ngOnChanges - Callled after a data-bound property has been changed.
        ngDoCheck - Detect and act upon changes that Angular can or won't detect on its own. Called every change detection run.
        ngOnDestroy - Called just before Angular destroys the component.
    https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html    
    */
    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
