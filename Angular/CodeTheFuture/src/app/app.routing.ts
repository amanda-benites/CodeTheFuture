import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { Tela1Component } from './components/tela1/tela1.component';
import { TesteComponent } from './components/teste/teste.component';


const routes: Routes = [
    { path: 'teste', component: TesteComponent },
    { path: '', component: Tela1Component}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);