import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  techs: string;
  description: string;
  previewLink: string;
  githubLink: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private projects: Project[] = [
    {  
      name: 'Simple Adventure (Game-Demo)',
      techs: 'Python • Pygame',
      description: 'Demo de jogo 2D desenvolvido com foco em arquitetura limpa, escalabilidade e organização de código.',
      previewLink: 'https://www.youtube.com/watch?v=EO-JeRfT8K0',
      githubLink: 'https://github.com/Marcelo-Augustovs/gameDemo'
    },
    { 
      name: 'MaNotes API',
      techs: 'Java • Spring Boot • JWT',
      description: 'API REST completa com autenticação JWT, controle financeiro, anotações e eventos.',
      previewLink: '#',
      githubLink: 'https://github.com/Marcelo-Augustovs/maNotes'
    },
    { 
      name: 'Sistema de Doações',
      techs: 'Java • MySQL • Hibernate',
      description: 'Sistema para cadastro de famílias, voluntários e controle de doações.',
      previewLink: '#',
      githubLink: '#' 
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}
