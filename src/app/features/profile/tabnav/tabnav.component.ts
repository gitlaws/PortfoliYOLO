import {
  Component,
  contentChildren,
  QueryList,
  AfterContentInit,
  ContentChildren,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabnav',
  standalone: true,
  imports: [],
  templateUrl: './tabnav.component.html',
  styleUrl: './tabnav.component.scss',
})
export class TabnavComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  selectedTab = 0;
  selectedLayer = 0;

  constructor() {}

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true;
  }

  selectTab(index: number) {
    this.tabs.forEach((tab) => (tab.active = false));
    this.tabs.toArray()[index].active = true;
    this.selectedTab = index;
    this.selectedLayer = 0; // Reset layer when switching tabs
  }

  navigate(direction: 'next' | 'previous') {
    const currentTab = this.tabs.toArray()[this.selectedTab];
    const numLayers = currentTab.numLayers;

    if (direction === 'next' && this.selectedLayer < numLayers - 1) {
      this.selectedLayer++;
    } else if (direction === 'previous' && this.selectedLayer > 0) {
      this.selectedLayer--;
    }
  }
}
