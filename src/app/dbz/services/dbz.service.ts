import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Nappa',
      power: 8900,
    },
  ];

  addCharacter(character: Character): void {
    console.log('main page');
    console.log(character);

    const newCharacter = {
      ...character,
      id: uuid(),
      //spread
    };
    //this.characters.unshift(character)
    this.characters.push(character);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
