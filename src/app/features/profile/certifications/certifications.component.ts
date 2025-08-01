import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  standalone: true,
})
export class CertificationsComponent {
  certifications = [
    { name: 'Certification 1' },
    { name: 'Certification 2' },
    { name: 'Certification 3' },
  ];

  draggedIndex: number | null = null;

  onDragStart(index: number) {
    this.draggedIndex = index;
  }

  onDrop(index: number) {
    if (this.draggedIndex === null || this.draggedIndex === index) return;
    const movedItem = this.certifications.splice(this.draggedIndex, 1)[0];
    this.certifications.splice(index, 0, movedItem);
    this.draggedIndex = null;
  }
}
