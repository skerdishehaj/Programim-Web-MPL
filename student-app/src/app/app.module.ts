import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/students.component';
import {HttpClientModule} from "@angular/common/http";
import {EditStudentComponent} from './edit-student/edit-student.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
