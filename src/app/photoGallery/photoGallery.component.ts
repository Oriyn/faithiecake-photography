import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photoGallery.html',
  styleUrls: ['./photoGallery.css']
})
export class PhotoGalleryComponent {
  photoNumber: number = 0;  
  selectedPhoto: string = `assets/photos/photo_${this.photoNumber}.jpg`;
  photoCap: number = 3;

  constructor(private cdRef: ChangeDetectorRef){}
    

  changePhoto = (direction) => {
    if (direction === 'next') {  
      this.photoNumber++;  
      if (this.photoNumber >= this.photoCap + 1) {this.photoNumber = 0;}
    } else if (direction === 'previous') {
      this.photoNumber--;
      if (this.photoNumber <= -1) {this.photoNumber = this.photoCap;}
    }
    this.selectedPhoto = `assets/photos/photo_${this.photoNumber}.jpg`;
  }


}
