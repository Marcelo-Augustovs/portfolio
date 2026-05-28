import { Injectable } from '@angular/core';

export interface Tech {
  id: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TechService {

  private techDescriptions: { [key: string]: Tech } = {
    angular: {
      id: 'angular',
      name: 'Angular',
      description: 'Framework front-end baseado em TypeScript para construção de SPAs robustas e escaláveis.'
    },
    java: {
      id: 'java',
      name: 'Java',
      description: 'Linguagem orientada a objetos amplamente utilizada no back-end e aplicações corporativas.'
    },
    typescript: {
      id: 'typescript',
      name: 'TypeScript',
      description: 'Superset do JavaScript com tipagem estática.'
    },
    javascript: {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Linguagem base da web para interatividade.'
    },
    mysql: {
      id: 'mysql',
      name: 'MySQL',
      description: 'Sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado em aplicações web.'
    },
    spring: {
      id: 'spring',
      name: 'Spring',
      description: 'Framework robusto para desenvolvimento de aplicações Java no back-end.'
    },
    css: {
      id: 'css',
      name: 'CSS',
      description: 'Linguagem de estilização responsável pelo design e layout de páginas web.'
    },
    html: {
      id: 'html',
      name: 'HTML',
      description: 'Linguagem de marcação utilizada para estruturar páginas web.'
    },
    python: {
      id: 'python',
      name: 'Python',
      description: 'Linguagem de programação versátil e de sintaxe simples.'
    },
    docker: {
      id: 'docker',
      name: 'Docker',
      description: 'Plataforma de containerização que permite empacotar aplicações e suas dependências.'
    },
    kubernetes: {
      id: 'kubernetes',
      name: 'Kubernetes',
      description: 'Sistema de orquestração de containers.'
    },
    git: {
      id: 'git',
      name: 'Git',
      description: 'Sistema de controle de versão distribuído.'
    }
  };

  constructor() { }

  getTechs(): Tech[] {
    return Object.values(this.techDescriptions);
  }

  getTechByKey(key: string): Tech | undefined {
    return this.techDescriptions[key];
  }
}
