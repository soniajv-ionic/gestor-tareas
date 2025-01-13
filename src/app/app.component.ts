import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FichaTareaComponent } from './ficha-tarea/ficha-tarea.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FichaTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gestor-tareas';
}
