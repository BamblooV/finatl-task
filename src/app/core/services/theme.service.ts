import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = localStorage.getItem('theme') || 'lara-light';

  constructor(@Inject(DOCUMENT) private document: Document) {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `${this.currentTheme}.css`;
    }
  }

  switchTheme(theme: string) {
    this.currentTheme = theme;
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `${theme}.css`;
      localStorage.setItem('theme', theme);
    }
  }
}
