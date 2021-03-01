import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoGalleryComponent } from './photoGallery/photoGallery.component';

const routes: Routes = [
  { path: 'photo-gallery', component: PhotoGalleryComponent },
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }