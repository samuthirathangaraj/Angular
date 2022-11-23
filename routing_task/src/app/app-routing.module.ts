import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { JobRoleComponent } from './job-role/job-role.component';


const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'jobrole',component: JobRoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeComponent,JobRoleComponent]