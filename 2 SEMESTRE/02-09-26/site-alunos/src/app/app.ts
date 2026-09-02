import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import { Product } from './product/product';
import { HeroBanner } from './hero-banner/hero-banner';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Footer, Sidebar, Product, HeroBanner, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('site-alunos');
}
