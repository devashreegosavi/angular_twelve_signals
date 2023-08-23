import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  //actions: string[] = [];
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(()=> this.counter() *2);

  constructor(){
    effect(() => console.log(this.counter()));
  }
  increment() {
    //this.counter.update((oldcounter) => oldcounter+1);
    this.counter.set(this.counter()+1);
    this.actions.mutate((oldAction) => oldAction.push('INCREMENT'));
    //this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldcounter) => oldcounter-1);
    //this.actions.push('DECREMENT');
    this.actions.mutate((oldAction) => oldAction.push('DECREMENT'));
    //this.actions.update((oldAction) => [...oldAction, 'DECREMENT']);

  }
}


