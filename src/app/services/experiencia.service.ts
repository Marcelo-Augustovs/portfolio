import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  techs: string;
  description: string;
  previewLink: string;
  githubLink: string;
}

export interface Experience {
  companyLogo: string;
  companyName: string;
  role: string;
  period: string;
  description: string;
  tasks: string[];
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

  private experiences: Experience[] = [
    {
      companyLogo: 'assets/_imagens/icone-generico.png',
      companyName: 'GCrevelario Tech / CurtiVendi',
      role: 'Desenvolvedor Full Stack Jr',
      period: 'Duração: Mar/2026 – Mai/2026 • 3 meses',
      description: '',
      tasks: [
        'Participação no desenvolvimento e manutenção de aplicações web utilizando Next.js, NestJS eTypeScript;',
        'Desenvolvimento de funcionalidades frontend e backend com integração de APIs REST e banco de dados SQL Server;',
        'Criação e manutenção de interfaces administrativas responsivas e componentes reutilizáveis;',
        'Apoio em organização de código, versionamento com Git e acompanhamento de demandas da equipe;',
        'Participação no desenvolvimento de sistema de autenticação e gerenciamento de acessos para aplicações web;',
        'Atuação em funcionalidades relacionadas ao controle de usuários, permissões e organização de ambientes do sistema;',
        'Contato prático com autenticação de usuários, gerenciamento de credenciais e integração entre sistemas corporativos.'
      ]
    },
    {
      companyLogo: 'assets/_imagens/icone-generico.png',
      companyName: 'Desenvolvimento Técnico e Projetos Pessoais',
      role: 'Desenvolvedor Full Stack',
      period: 'Duração: Mar/2023 – Out/2024 • 1 ano e 8 meses',
      description: '',
      tasks: [
        'Desenvolvimento de aplicações pessoais com foco em organização de informações, notificações e controle de dados;',
        'Criação de API’s REST utilizando Java, Spring Boot e bancos de dados relacionais;',
        'Desenvolvimento de funcionalidades CRUD, autenticação e controle de acesso com Spring Security;',
        'Implementação de recursos relacionados a auditoria de dados, gerenciamento de informações e organização de sistemas;',
        'Desenvolvimento de interfaces web e integração entre frontend e backend;',
        'Utilização de Git/GitHub para versionamento e manutenção dos projetos.'
      ]
    },
    {
      companyLogo: 'assets/_imagens/Rogerlane.jpg',
      companyName: 'Rogerlane Fashion',
      role: 'Administrativo / Operacional',
      period: 'Duração: Set/2022 - Out/2023 • 1 ano e 2 meses',
      description: '',
      tasks: [
        'Apoio em rotinas administrativas, financeiras e controle operacional;',
        'Acompanhamento de despesas, lucros e reposição de materiais;',
        'Auxílio em processos relacionados ao MEI e organização financeira básica;',
        'Controle, organização e conferência física de estoque;',
        'Elaboração de relatórios de movimentação de produtos e materiais;',
        'Suporte em vendas, atendimento e atividades de informática.'
      ]
    },
    {
      companyLogo: 'assets/_imagens/FAB.jpg',
      companyName: 'Força Aérea Brasileira',
      role: 'Setor Administrativo • EFM/GSD-GL',
      period: 'Duração: 2018 — 2022 • 4 anos',
      description: 'Atuação em setores administrativos e operacionais, com foco em controle de informações, organização de processos internos e suporte administrativo para grande volume de militares e demandas operacionais.',
      tasks: [
        'Gestão administrativa de aproximadamente 250–350 militares por semestre;',
        'Processo de iniciação e acompanhamento administrativo de novos militares;',
        'Controle de dados pessoais, auxílios, transgressões e escalas;',
        'Organização de documentação e processos internos;',
        'Controle de entrada e saída de materiais e ordens de missão;',
        'Registro e atualização de informações médicas e administrativas;',
        'Apoio em instruções internas e cumprimento de regulamentos;',
        'Suporte operacional e administrativo em atividades do setor;',
        'Atuação em dois setores administrativos distintos, incluindo elaboração de documentos internos e controle operacional;',
        'Apoio em controle físico de estoque e organização de materiais.'
      ]
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }
}
