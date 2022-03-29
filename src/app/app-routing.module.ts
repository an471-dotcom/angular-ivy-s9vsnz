import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'netflix',
        pathMatch: 'full',
      },
      {
        path: 'netflix',
        loadChildren: () =>
          import('./netflix/netflix.module').then((m) => m.NetflixModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./form/form.module').then((m) => m.FormModule),
      },
      {
        path: '**',
        redirectTo: 'netflix',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
