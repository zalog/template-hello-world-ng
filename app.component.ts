import { Component } from "@angular/core";

/*
Components are the main building block of Angular 2 applications. 
They define the application UI and the logic that controls it.
The component class defines the application logic of the component - its behavior.
The component template defines the UI of the component - also called a view.
*/
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { }
