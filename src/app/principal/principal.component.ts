import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../classes/tarea';
import { FichaTareaComponent } from "../ficha-tarea/ficha-tarea.component";
import { CreditsComponent } from "../credits/credits.component";

@Component({
  selector: 'app-principal',
  imports: [FormsModule, FichaTareaComponent, CreditsComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  nombreTarea : string = "";
  prioridadTarea : string = "baja";
  tareas: Array<Tarea> = new Array<Tarea>();
tareaActual: Tarea|undefined;
  crear() {
    let nuevaTarea = new Tarea(this.nombreTarea, this.prioridadTarea);
    this.tareas.push(nuevaTarea);
  }
}
