import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-icons',
  standalone: true,        
  imports: [CommonModule], 
  templateUrl: './tech-icons.component.html',
  styleUrl: './tech-icons.component.css'
})
export class TechIconsComponent {

   selectedTech: any = null;

  techDescriptions: any = {
    angular: {
      name: 'Angular',
      description: 'Framework front-end baseado em TypeScript para construção de SPAs robustas e escaláveis.'
    },
    java: {
      name: 'Java',
      description: 'Linguagem orientada a objetos amplamente utilizada no back-end e aplicações corporativas.'
    },
    typescript: {
      name: 'TypeScript',
      description: 'Superset do JavaScript com tipagem estática.'
    },
    javascript: {
      name: 'JavaScript',
      description: 'Linguagem base da web para interatividade.'
    },
     mysql: {
      name: 'MySQL',
      description: 'Sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado em aplicações web. Utiliza SQL para manipulação de dados e é conhecido por desempenho, confiabilidade e integração com back-end.'
    },
    spring: {
      name: 'Spring',
      description: 'Framework robusto para desenvolvimento de aplicações Java no back-end. Facilita a criação de APIs REST, integração com bancos de dados e aplicações escaláveis utilizando Spring Boot, injeção de dependência e arquitetura modular.'
    },
     css: {
      name: 'css',
      description: 'Linguagem de estilização responsável pelo design e layout de páginas web. Permite controle de cores, tipografia, responsividade, animações e posicionamento de elementos.'
    },
    html: {
      name: 'HTML',
      description: 'Linguagem de marcação utilizada para estruturar páginas web. Define a organização semântica do conteúdo como títulos, parágrafos, imagens, links e formulários.'
    },
    python: {
      name: 'Python',
      description: 'Linguagem de programação versátil e de sintaxe simples, utilizada em automação, back-end, análise de dados e scripts. Destaca-se pela legibilidade e ampla comunidade.'
    },
    docker: {
      name: 'Docker',
      description: 'Plataforma de containerização que permite empacotar aplicações e suas dependências em containers isolados, garantindo consistência entre ambientes de desenvolvimento, teste e produção.'
    },
     kubernetes: {
      name: 'kubernetes',
      description: 'Sistema de orquestração de containers que automatiza implantação, escalabilidade e gerenciamento de aplicações em containers, especialmente em ambientes de cloud.'
    },
     git: {
      name: 'Git',
      description: 'Sistema de controle de versão distribuído utilizado para rastrear alterações em código-fonte, facilitar colaboração em equipe e gerenciar versões de projetos.'
    }
    
  };

  openTech(key: string) {
    this.selectedTech = this.techDescriptions[key];
  }

  closeModal() {
    this.selectedTech = null;
  }
}