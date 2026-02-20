import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoContainerComponent } from "../video-container/videoContainer.component";

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, VideoContainerComponent],
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
   projectList =[
      {  name: 'Simple Adventure (Game-Demo)',
          techs: 'Python • Pygame',
          description: 'Demo de jogo 2D desenvolvido com foco em arquitetura limpa, escalabilidade e organização de código.',
          previewLink: 'https://www.youtube.com/watch?v=EO-JeRfT8K0',
          githubLink: 'https://github.com/Marcelo-Augustovs/gameDemo'},

      { name: 'MaNotes API',
        techs: 'Java • Spring Boot • JWT',
        description: 'API REST completa com autenticação JWT, controle financeiro, anotações e eventos.',
        previewLink: '#',
        githubLink: 'https://github.com/Marcelo-Augustovs/maNotes'},
        
      { name: 'Sistema de Doações',
        techs: 'Java • MySQL • Hibernate',
        description: 'Sistema para cadastro de famílias, voluntários e controle de doações.',
        previewLink: '#',
        githubLink: '#' }
   ]

  currentIndex = 0;

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
