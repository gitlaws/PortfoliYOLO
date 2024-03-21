import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  @Input() title: string = '';
  @Input() numLayers: number = 1;
  active: boolean = false;

  constructor() {}

  isLayerActive(layerIndex: number): boolean {
    return this.active && this.numLayers > 1 && layerIndex === 0;
  }
}
