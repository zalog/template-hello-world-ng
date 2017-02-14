import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular"
import { ItemEventData } from "ui/list-view";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService, private routerExtensions:RouterExtensions) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onItemTap(args:ItemEventData){
        let itemID = this.items[args.index].id;
        this.routerExtensions.navigate(['/item', itemID] )
    }
}