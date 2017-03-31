/*
Many aspects of Angular applications are configured through the dependency injection (DI) system. 
NgModule's are usually the tool that lets you configure DI providers and exposes them to all application objects. 
Multiple Angular libraries, such as the router and the http client come with their own modules that register providers. 
NativeScript provides wrappers for the built-in modules (router, forms, HTTP) that should be used in mobile apps:
    import { NativeScriptRouterModule } from "nativescript-angular/router";
    import { NativeScriptHttpModule } from "nativescript-angular/http";
    import { NativeScriptFormsModule } from "nativescript-angular/forms";
*/
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
