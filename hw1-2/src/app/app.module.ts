import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './core/services/data.service';
import {FormsModule} from '@angular/forms';
import { MainModule } from './shared/main/main.module';
import { DurationPipe } from './utils/duration.pipe';




@NgModule({
  declarations: [
    AppComponent,
    //DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    MainModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
