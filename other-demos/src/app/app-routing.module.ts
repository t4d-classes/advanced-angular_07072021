import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentProjectionComponent } from './pages/content-projection/content-projection.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { ContentSanitationComponent } from './pages/content-sanitation/content-sanitation.component';
import { ViewChildComponent } from './pages/view-child/view-child.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "content-projection", component: ContentProjectionComponent },
  { path: "change-detection", component: ChangeDetectionComponent },
  { path: "content-sanitation", component: ContentSanitationComponent },
  { path: "view-child", component: ViewChildComponent },
  { path: "", pathMatch: "full", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
