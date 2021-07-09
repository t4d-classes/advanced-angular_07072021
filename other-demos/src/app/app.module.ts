import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './pages/content-projection/content-projection.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleSlotBoxComponent } from './components/single-slot-box/single-slot-box.component';
import { MultipleSlotBoxComponent } from './components/multiple-slot-box/multiple-slot-box.component';
import { ContentSanitationComponent } from './pages/content-sanitation/content-sanitation.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ViewChildComponent } from './pages/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
    ChangeDetectionComponent,
    HomeComponent,
    SingleSlotBoxComponent,
    MultipleSlotBoxComponent,
    ContentSanitationComponent,
    ItemListComponent,
    ViewChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
