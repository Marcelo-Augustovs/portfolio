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
      icon: 'assets/_imagens/Angular-Dark.svg',
      description: 'Framework front-end baseado em TypeScript para construção de SPAs robustas e escaláveis.'
    },
    java: {
      name: 'Java',
      icon: 'assets/_imagens/Java.svg',
      description: 'Linguagem orientada a objetos amplamente utilizada no back-end e aplicações corporativas.'
    },
    typescript: {
      name: 'TypeScript',
      icon: 'assets/_imagens/TypeScript.svg',
      description: 'Superset do JavaScript com tipagem estática, garantindo código mais seguro e escalável.'
    },
    javascript: {
      name: 'JavaScript',
      icon: 'assets/_imagens/JavaScript.svg',
      description: 'Linguagem base da web, essencial para criar interatividade e dinamismo nas páginas.'
    },
    mysql: {
      name: 'MySQL',
      icon: 'assets/_imagens/MySQL-Light.svg',
      description: 'Sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado, conhecido por seu alto desempenho e confiabilidade.'
    },
    spring: {
      name: 'Spring',
      icon: 'assets/_imagens/Spring-Light.svg',
      description: 'Framework robusto para desenvolvimento de aplicações Java no back-end. Facilita a criação de APIs REST e arquiteturas de microsserviços.'
    },
    nextjs: {
      name: 'Next.js',
      icon: 'assets/_imagens/NextJS-Light.svg',
      description: 'Framework React focado em renderização híbrida (SSR e SSG), otimização de SEO e excelente performance de carregamento.'
    },
    nestjs: {
      name: 'NestJS',
      icon: 'assets/_imagens/NestJS-Light.svg',
      description: 'Framework Node.js progressivo para a construção de aplicações back-end eficientes e escaláveis, utilizando arquitetura modular e TypeScript.'
    },
    python: {
      name: 'Python',
      icon: 'assets/_imagens/Python-Dark.svg',
      description: 'Linguagem de programação versátil e de sintaxe clara, destacando-se em áreas como inteligência artificial, automação e análise de dados.'
    },
    docker: {
      name: 'Docker',
      icon: 'assets/_imagens/Docker.svg',
      description: 'Plataforma de containerização que empacota aplicações e suas dependências em containers isolados, unificando ambientes de desenvolvimento e produção.'
    },
    kubernetes: {
      name: 'Kubernetes',
      icon: 'assets/_imagens/Kubernetes.svg',
      description: 'Sistema de orquestração de containers que automatiza a implantação, escalabilidade e gerenciamento de aplicações complexas e baseadas em microsserviços.'
    },
    azure: {
      name: 'Azure',
      icon: 'assets/_imagens/Azure-Dark.svg',
      description: 'Plataforma de computação em nuvem da Microsoft, oferecendo diversos serviços para construir, implantar e gerenciar aplicações escaláveis.'
    }
  };

  openTech(key: string) {
    this.selectedTech = this.techDescriptions[key];
  }

  closeModal() {
    this.selectedTech = null;
  }
}