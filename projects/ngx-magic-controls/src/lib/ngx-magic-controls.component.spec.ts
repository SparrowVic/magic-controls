import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMagicControlsComponent } from './ngx-magic-controls.component';

describe('NgxMagicControlsComponent', () => {
  let component: NgxMagicControlsComponent;
  let fixture: ComponentFixture<NgxMagicControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMagicControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMagicControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
