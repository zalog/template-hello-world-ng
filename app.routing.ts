/*
In an Angular 2 application navigation is done using the Angular Component Router.
https://angular.io/docs/ts/latest/guide/router.html
*/
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

/*
Create a RouterConfig object which maps paths to components and parameters:
*/
const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

/*
Use the NativeScriptRouterModule API to import your routes.
The pass your AppRoutingModule to your application module (app.module.ts)
*/
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }