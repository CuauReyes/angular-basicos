import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  //TODO CREATE EMITTER onDeleteId Index Value

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterlist: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteCharacter(id: string | undefined): void {
    this.onDelete.emit(id);
  }
}
