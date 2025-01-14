import { Component, Input } from '@angular/core';
import { Tarea } from '../classes/tarea';

@Component({
  selector: 'app-ficha-tarea',
  imports: [],
  templateUrl: './ficha-tarea.component.html',
  styleUrl: './ficha-tarea.component.css'
})
export class FichaTareaComponent {
  @Input()  tarea: Tarea | undefined;
}