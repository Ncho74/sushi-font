import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import {IndexComponent} from "./components/index/index.component"

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children:[
      {path:"",
      component:IndexComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
