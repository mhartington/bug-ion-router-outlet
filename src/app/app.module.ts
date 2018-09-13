import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTabsPageComponent } from './pages/first-tabs-page/first-tabs-page.component';
import { Tab1Component } from './pages/tab1/tab1.component';
import { Tab2Component } from './pages/tab2/tab2.component';
import { Tab3Component } from './pages/tab3/tab3.component';
import { Tab4Component } from './pages/tab4/tab4.component';
import { Tab5Component } from './pages/tab5/tab5.component';
import { Tab6Component } from './pages/tab6/tab6.component';
import { SecondTabsPageComponent } from './pages/second-tabs-page/second-tabs-page.component';

@NgModule({
  declarations: [AppComponent, FirstTabsPageComponent, Tab1Component, Tab2Component, Tab3Component, Tab4Component, Tab5Component, Tab6Component, SecondTabsPageComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }