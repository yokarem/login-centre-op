import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-center-selection',
  imports: [CommonModule],
  templateUrl: './center-selection.component.html',
  encapsulation: ViewEncapsulation.None, // on laisse agir tes CSS globales
})
export class CenterSelectionComponent {
  constructor(private router: Router) {}
  cancel() { this.router.navigate(['/login']); }
  validate() { /* branchement à venir */ }
}
