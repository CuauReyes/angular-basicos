import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['spiderman','thor','hulk','she hulk'];
  public deletedHero?:string;

  removeLastHero ():void
  {
    this.deletedHero = this.heroNames.pop();
  }
}
