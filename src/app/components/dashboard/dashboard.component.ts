import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace/workspace.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WorkspaceComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
