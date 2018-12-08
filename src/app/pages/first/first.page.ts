import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import {List, ItemSliding} from '@ionic/angular';


@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  @ViewChild("theList") list: List;

  public readonly defaultItems = [
    {name: "List item 1", description: "Slide me if you can", hidden: false},
    {name: "List item 2", description: "Slide me if you can", hidden: false},
    {name: "List item 3", description: "I am hidden, so you won't see me", hidden: true},
  ];
  
  public listItems;
  
  public labelText:string ="";
  
  constructor() {
    this.resetItems();
  }
  ngOnInit() {

  }
  async hideItem( item: ItemSliding, idx:number){
    if (item) item.close();
    this.listItems[idx].hidden = true;
    //this.listItems = this.listItems.filter((item, index) => index !== idx);
  
    setTimeout(() => {
      this.listItems[idx].hidden = false;
    }, 1000);
  }
  
  resetItems() {
    this.listItems = this.defaultItems.map(o => ({...o}));
    if (this.list) this.list.closeSlidingItems();
  }


  }
  
