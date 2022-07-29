import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhetherCComponent } from './whether-c.component';

describe('WhetherCComponent', () => {
  let component: WhetherCComponent;
  let fixture: ComponentFixture<WhetherCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhetherCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhetherCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
