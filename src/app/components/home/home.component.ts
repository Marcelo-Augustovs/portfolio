import { Component } from '@angular/core';
import { TechIconsComponent } from "../tech-icons/tech-icons.component";
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    TechIconsComponent, 
    MatCardModule, 
    MatListModule, 
    MatIconModule,
    MatDividerModule
  ]
})
export class HomeComponent {

  cursos = [
    'Java Básico - Curso em vídeo',
    'Programação Orientada a Objeto - Udemy',
    'API REST e Spring Boot - Udemy',
    'MySQL - Udemy/Curso em vídeo',
    'HTML, CSS, JavaScript - Udemy/Dev Quest',
    'Angular - Uninter (Acadêmico)',
    'Python - Uninter (Acadêmico)',
    'Operador de computador (Pacote Office) - Prepara cursos',
    'Montagem e manutenção de computadores - Prepara',
    'Inglês - Curso Beway/Senac'
  ];
}
