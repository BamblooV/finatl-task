import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ToggleButtonChangeEvent, ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonModule, ToggleButtonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  isDarkTheme = this.theme.currentTheme === 'lara-dark';

  changeTheme(event: ToggleButtonChangeEvent) {
    if (event.checked) {
      this.theme.switchTheme('lara-dark');
    } else {
      this.theme.switchTheme('lara-light');
    }
  }
  constructor(private readonly theme: ThemeService) {}
}
