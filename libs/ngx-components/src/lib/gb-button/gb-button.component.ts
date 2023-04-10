import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-nx-storybook-monorepo-gb-button',
  templateUrl: './gb-button.component.html',
  styleUrls: ['./gb-button.component.scss'],
})
export class GbButtonComponent {
  text = 'Button';
}

@NgModule({
  imports: [CommonModule],
  declarations: [GbButtonComponent],
  exports: [GbButtonComponent],
})
export class GbButtonComponentModule {}
