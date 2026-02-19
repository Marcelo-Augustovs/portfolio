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
   /*projetos = [
    {
      nome: 'Simple Adventure (Game-Demo)',
      img: 'assets/_imagens/especificacoes-02.png',
      descricao: 'Desenvolvido uma demo de um jogo 2d, utilizando Python/pygame.',
      descricao2:`  Requisitada como uma atividade academica, porem contem muitas melhorias, pois foi desenvolvida pensando em escalabilidade e clean code para melhor suporte/manuntenção futuras.

      Animações criada dinamicamente a parti das sprites, possui um banco de dados para registrar o "score"(SqLite3), arquitetura contendo padrões de desing pattern, fiz tambem algumas modificações nas artes utilizando GIMP.

      Todas as artes, audios e músicas tem suas licensas e uso, respeitando e seguindo conforme orienta a LGPD ( Leis gerais de proteção de dados), o Download do executavel estará disponível em breve. `
    },
    {
      nome: 'MaNotes ( My Auxiliar Notes)',
      img:'assets/_imagens/especificacoes-02.png',
      descricao: 'Aplicação Java para controle de despesas e anotações pessoais.',
      descricao2: `  Um sotware para gerenciamento de anotações, controle financeiro e agendamento de eventos com notificações.

      Backend: Java, Spring Boot, Spring Security (autenticação JWT), MySQL (produção) e H2 (testes).

      Frontend: JavaFX. Destaques: API REST local, integração segura com JWT, armazenamento offline e interface intuitiva.`,
    },
    {
      nome: 'Demopark',
      img:'assets/_imagens/especificacoes-02.png',
      descricao: 'Aplicação Java para controle de despesas e anotações pessoais.',
      descricao2: ` Desenvolvendo uma API que fara o controle de um estacionamento.
      Ela tera um sistema de autenticação,gestão das vagas e clientes e tambem cuidara das regras de negocio, como calcular valor, desconto e etc.

      Backend: Java, Spring boot, Spring Security (autenticação JWT), MySQL (produção) e H2 (testes), Jasper reports para imprimir relatórios. `,
      link: 'https://github.com/Marcelo-Augustovs'
    },
    {
      nome: 'portfolio',
      img:'assets/_imagens/especificacoes-02.png',
      descricao: 'Desenvolvendo uma API Web, com fim de exibição de trabalhos concluidos ou em desenvolvimento, afim de promover curriculo profissional',
      descricao2: ` Sua implementação utiliza Angular, Html, Css e TypeScript.
      Utiliza arquitetura SPA (Simple page Aplication)`,
    }
  ];

  projetoSelecionado = 0;

  proximoProjeto() {
    this.projetoSelecionado = (this.projetoSelecionado + 1) % this.projetos.length;
  }

  projetoAnterior() {
    this.projetoSelecionado = 
      (this.projetoSelecionado - 1 + this.projetos.length) % this.projetos.length;
  } */
}
