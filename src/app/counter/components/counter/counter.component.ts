import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter }}</h3>
    <button (click)="increaseBy(true)"> + 1</button>
    <button (click)="increaseBy(false)"> - 1</button>
    <button (click)="resetCounter()">Reset</button>
    `
})

export class CounterComponent  {
    constructor() { }

    public counter:number = 10;

    increaseBy (tipo:boolean):void {
        tipo ? this.counter += 1 : this.counter -= 1
    }

    resetCounter ():void 
    {
        this.counter = 10;
    }
    
}