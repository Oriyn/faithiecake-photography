import { Component } from '@angular/core';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photoGallery.html',
  styleUrls: ['./photoGallery.css']
})
export class PhotoGalleryComponent {
  photoNumber: number = 0;  
  selectedPhoto: string = `assets/photos/photo_${this.photoNumber}.jpg`;
    

  changePhoto = (direction) => {
    console.log('i was called with: ', direction);  
    if (direction === 'next') {
      this.photoNumber += 1;
    } else if (direction === 'previous') {
      this.photoNumber -= 1;
    }
  }


}
