import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card'; 
import { Footer } from './footer/footer';
import { Carousel } from './carousel/carousel';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Card, Footer, Carousel ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-primeiro-app');
}
