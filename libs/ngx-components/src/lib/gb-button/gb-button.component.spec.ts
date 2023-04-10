import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbButtonComponent } from './gb-button.component';

describe('GbButtonComponent', () => {
  let component: GbButtonComponent;
  let fixture: ComponentFixture<GbButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GbButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
