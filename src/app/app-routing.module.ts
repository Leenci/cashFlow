import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// COMPONETS
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', redirectTo:'/' , pathMatch: 'full'}
]

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes),
      CommonModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }