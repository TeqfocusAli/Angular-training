import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { NopageComponent } from './nopage/nopage.component';
import { SublistComponent } from './sublist/sublist.component';
import { SubpageComponent } from './subpage/subpage.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FatherComponent } from './father/father.component';
import { HooksComponent } from './hooks/hooks.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  // { path: '', redirectTo: '/about', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./admin/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'about',
    component: AboutComponent,
    // children: [
    //   { path: 'subpage', component: SubpageComponent },
    //   { path: 'sublist', component: SublistComponent },
    // ],
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'service/:id',
    component: FirstComponentComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: 'template-driven-form',
    component: FormsComponent,
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormComponent,
  },
  {
    path: 'parent',
    component: FatherComponent,
  },
  {
    path: 'hooks',
    component: HooksComponent,
  },
  {
    path: 'features',
    component: FeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
