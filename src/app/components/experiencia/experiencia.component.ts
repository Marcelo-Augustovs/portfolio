import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VideoContainerComponent } from "../video-container/videoContainer.component";
import { ExperienciaService, Project } from '../../services/experiencia.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, VideoContainerComponent, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class ExperienciaComponent implements OnInit {
  projectList: Project[] = [];
  currentIndex = 0;

  constructor(private experienciaService: ExperienciaService) {}

  ngOnInit() {
    this.projectList = this.experienciaService.getProjects();
  }

  proximoProjeto() {
    if (this.currentIndex < this.projectList.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  projetoAnterior() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.projectList.length - 1;
    }
  }
}
