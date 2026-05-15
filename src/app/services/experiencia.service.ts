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
      companyName: 'Giac: Sistema de autenticação - CurtiVendi',
      role: 'Desenvolvedor FullStack  Nest & Next',
      period: 'Duração: Abr-Mai(2026) • 1 mês',
      description: '',
      tasks: [
        'Desenvolvimento de API REST com NestJS e TypeScript.',
        'Integração com banco de dados SQL Server utilizando Prisma ORM.',
        'Desenvolvimento de aplicação web com Next.js App Router e React.',
        'Colaboração na construção de interfaces responsivas e micro-interações utilizando Framer Motion.',
        'Participação em otimizações de carregamento e gerenciamento de estado com React Query.',
        'Desenvolvimento de funcionalidades backend com NestJS, TypeScript e APIs REST.',
        'Integração com banco SQL Server utilizando Prisma ORM.',
        'Participação em práticas de qualidade e organização de código utilizando Clean Architecture e princípios SOLID.',
        'Contato prático com Azure AD, Azure Storage, CI/CD e Git Hooks durante o desenvolvimento do projeto.'
      ]
    },
    {
      companyLogo: 'assets/_imagens/icone-generico.png',
      companyName: 'Sistema de Gestão de Eventos e Recursos - GCrevelario Tech',
      role: 'Desenvolvedor FullStack Nest & Next',
      period: 'Duração: Mar-Abr(2026) • 1 mês',
      description: '',
      tasks: [
        'Participação no desenvolvimento de aplicação web utilizando arquitetura moderna com Next.js App Router e NestJS.',
        'Atuação no desenvolvimento de componentes reutilizáveis e organização de interface seguindo princípios de componentização.',
        'Colaboração na construção de interfaces responsivas e micro-interações utilizando Framer Motion.',
        'Participação em otimizações de carregamento e gerenciamento de estado com React Query.',
        'Desenvolvimento de funcionalidades backend com NestJS, TypeScript e APIs REST.',
        'Integração com banco SQL Server utilizando Prisma ORM.',
        'Participação em práticas de qualidade e organização de código utilizando Clean Architecture e princípios SOLID.',
        'Contato prático com Azure AD, Azure Storage, CI/CD e Git Hooks durante o desenvolvimento do projeto.'
      ]
    },
    {
      companyLogo: 'assets/_imagens/FAB.jpg',
      companyName: 'Força Aérea Brasileira',
      role: 'Setor Administrativo • EFM/GSD-GL',
      period: 'Duração: 2018 — 2022 • 4 anos',
      description: 'Responsável pela área administrativa do setor de recrutamento, apoiando processos internos e gestão de militares.',
      tasks: [
        'Gestão administrativa de 250–350 militares por semestre',
        'Processo de iniciação de novos militares',
        'Controle de dados pessoais, auxílios, transgressões e escalas',
        'Apoio em instruções militares e regulamentos',
        'Registro médico de novos militares',
        'Controle de entrada/saída de materiais e ordens de missão'
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
