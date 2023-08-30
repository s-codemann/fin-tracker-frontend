import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObligationBackdropComponent } from './obligation-backdrop/obligation-backdrop.component';
import { ObligationCardComponent } from './obligation-card/obligation-card.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { InfoContainerComponent } from './info-container/info-container.component';
import { AddObligationFormComponent } from './add-obligation-form/add-obligation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StatusBarComponent } from './status-bar/status-bar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObligationBackdropComponent,
    ObligationCardComponent,
    CardContainerComponent,
    InfoContainerComponent,
    BrowserAnimationsModule,
    AddObligationFormComponent,
    HttpClientModule,
    StatusBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
