import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {EmployeeComponent} from './employee/employee.component';
import {PostComponent} from './post/post.component';
import {CreateComponent} from './post/create/create.component';
import {LoginComponent} from './login/login.component';



import {CustomErrorComponent} from './custom-error/custom-error.component';

const routes: Routes = [
{
  path:'', redirectTo:'employee', pathMatch:'full'
},
{
  path:'admin' , component:AdminComponent
},
{
  path:'employee' , component:EmployeeComponent
},
{
  path:'post' , component:PostComponent
},
{
  path:'createpost' , component:CreateComponent
},
{
  path:'login' , component:LoginComponent
},


{
  path:'**',component:CustomErrorComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
