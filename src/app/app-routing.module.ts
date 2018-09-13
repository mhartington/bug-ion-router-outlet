import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTabsPageComponent } from './pages/first-tabs-page/first-tabs-page.component';
import { SecondTabsPageComponent } from './pages/second-tabs-page/second-tabs-page.component';
import { Tab1Component } from './pages/tab1/tab1.component';
import { Tab2Component } from './pages/tab2/tab2.component';
import { Tab3Component } from './pages/tab3/tab3.component';
import { Tab4Component } from './pages/tab4/tab4.component';
import { Tab5Component } from './pages/tab5/tab5.component';
import { Tab6Component } from './pages/tab6/tab6.component';

const routes: Routes = [
  {
    path: 'first', component: FirstTabsPageComponent, children: [
      { path: 'tab1', component: Tab1Component, outlet:"first"},
      { path: 'tab2', component: Tab2Component, outlet:"first"},
      { path: 'tab3', component: Tab3Component, outlet:"first"},
      { path: '', redirectTo: '/first/(first:tab1)', pathMatch: 'full' },
    ]
  },
  {
    path: 'second', component: SecondTabsPageComponent, children: [
      { path: 'tab4', component: Tab4Component, outlet: "second"},
      { path: 'tab5', component: Tab5Component, outlet: "second"},
      { path: 'tab6', component: Tab6Component, outlet: "second"},
      { path: '', redirectTo: 'tab4', pathMatch: 'full' },
      { path: '', redirectTo: '/second/(second:tab4)', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'first', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
