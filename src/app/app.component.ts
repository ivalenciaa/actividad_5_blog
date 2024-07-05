import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './blog/blog.component';  // Importa tu componente de blog

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogComponent],  // Agrega el componente Blog aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Cambiado a styleUrls
})
export class AppComponent {
  title = 'actividad_5_blog';
}
