import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { MynewcomponentComponent } from './mynewcomponent/mynewcomponent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { HttpClientModule } from '@angular/common/http';
import { SubpageComponent } from './subpage/subpage.component';
import { SublistComponent } from './sublist/sublist.component';
import { NopageComponent } from './nopage/nopage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { Font25Directive } from './font25.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPipe } from './add.pipe';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { HooksComponent } from './hooks/hooks.component';
import { FeatureComponent } from './feature/feature.component';
import { ObsSubComponent } from './obs-sub/obs-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    MynewcomponentComponent,
    ViewChildComponent,
    SubpageComponent,
    SublistComponent,
    NopageComponent,
    DashboardComponent,
    AboutComponent,
    ServiceComponent,
    HomeComponent,
    Font25Directive,
    AddPipe,
    FormsComponent,
    ReactiveFormComponent,
    FatherComponent,
    SonComponent,
    HooksComponent,
    FeatureComponent,
    ObsSubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
