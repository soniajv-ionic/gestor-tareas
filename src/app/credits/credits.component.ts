import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credits',
  imports: [],
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.css'
})
export class CreditsComponent {
  @Input() nombre: string = "";
  @Input() anyo: number = 1900;

}
