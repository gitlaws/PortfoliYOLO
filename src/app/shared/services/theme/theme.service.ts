import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../../models/theme.enum';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'theme';
  private themeSubject: BehaviorSubject<Theme>;

  constructor(private storageService: StorageService) {
    const storedTheme =
      (this.storageService.getItem(this.themeKey) as Theme) || Theme.Light;
    this.themeSubject = new BehaviorSubject<Theme>(storedTheme);
  }

  get currentTheme() {
    return this.themeSubject.asObservable();
  }

  toggleTheme(): void {
    const newTheme =
      this.themeSubject.value === Theme.Light ? Theme.Dark : Theme.Light;
    this.storageService.setItem(this.themeKey, newTheme);
    this.themeSubject.next(newTheme);
  }
}
