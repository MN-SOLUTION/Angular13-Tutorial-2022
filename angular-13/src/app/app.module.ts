import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { AdminComponent } from './admin/admin.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeFilterComponent,
    AdminComponent,
    CustomErrorComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
    
  ]
})
export class AppModule { }
