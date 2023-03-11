import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppButtonIconComponent } from './app-button-icon.component';

describe('AppButtonIconComponent', () => {
  let component: AppButtonIconComponent;
  let fixture: ComponentFixture<AppButtonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppButtonIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppButtonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
