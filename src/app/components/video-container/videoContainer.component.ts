import { Component } from '@angular/core';

@Component({
  selector: 'app-videoContainer',
  imports: [],
  templateUrl: './videoContainer.component.html',
  styleUrl: './videoContainer.component.css'
})
export class VideoContainerComponent {

  toggleVideo(video: HTMLVideoElement) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


projetos: Projeto[] = [
  {
    titulo: 'Simple Adventure (Game-Demo)',
    tech: 'Python • Pygame',
    descricao: 'Demo de jogo 2D desenvolvido com foco em arquitetura limpa, escalabilidade e organização de código.',
    video: 'assets/videos/game.mp4',
    previewLink: '#',
    githubLink: '#'
  },
  {
    titulo: 'MaNotes API',
    tech: 'Java • Spring Boot • JWT',
    descricao: 'API REST completa com autenticação JWT, controle financeiro, anotações e eventos.',
    video: 'assets/videos/manotes.mp4',
    previewLink: '#',
    githubLink: '#'
  },
  {
    titulo: 'Sistema de Doações',
    tech: 'Java • MySQL • Hibernate',
    descricao: 'Sistema para cadastro de famílias, voluntários e controle de doações.',
    video: 'assets/videos/doacoes.mp4',
    previewLink: '#',
    githubLink: '#'
  }
];

indiceProjetoAtual = 0;

proximoProjeto() {
  if (this.indiceProjetoAtual < this.projetos.length - 1) {
    this.indiceProjetoAtual++;
  } else {
    this.indiceProjetoAtual = 0;
  }
}

projetoAnterior() {
  if (this.indiceProjetoAtual > 0) {
    this.indiceProjetoAtual--;
  } else {
    this.indiceProjetoAtual = this.projetos.length - 1;
  }
}

get projetoAtual() {
  return this.projetos[this.indiceProjetoAtual];
}


}

interface Projeto {
  titulo: string;
  tech: string;
  descricao: string;
  video: string;
  previewLink: string;
  githubLink: string;
}
