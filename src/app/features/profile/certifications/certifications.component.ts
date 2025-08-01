import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  standalone: true,
})
export class CertificationsComponent {
  certifications = [
    {
      name: 'Certified Web Developer',
      issuer: 'FreeCodeCamp',
      date: '2023-05-10',
    },
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon',
      date: '2022-11-15',
    },
  ];
}
