// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContatoComponent } from './components/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'contato', component: ContatoComponent },
];
