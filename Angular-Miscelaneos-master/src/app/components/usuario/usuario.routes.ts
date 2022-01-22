import { Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';

import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditaroComponent } from './usuario-editaro.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditaroComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'editar' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
