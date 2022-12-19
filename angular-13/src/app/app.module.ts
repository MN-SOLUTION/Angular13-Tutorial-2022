import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { AdminComponent } from './admin/admin.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CreateComponent } from './post/create/create.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeFilterComponent,
    AdminComponent,
    CustomErrorComponent,
    PostComponent,
    CreateComponent,
    LoginComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [
    AppComponent
    
  ]
})
export class AppModule { }
