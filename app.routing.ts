/*
In an NativeScript + Angular 2 application navigation is done using the NativeScriptRouterModule.
https://docs.nativescript.org/core-concepts/angular-navigation
*/
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

/*
Create a configuration object (Routes) which maps paths to components and parameters
*/
const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

/*
Use the NativeScriptRouterModule API to import your routes.
Then pass your AppRoutingModule to your application module (app.module.ts)
*/
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }