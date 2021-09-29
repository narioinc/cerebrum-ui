import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerebrumRootComponent } from './cerebrum-root.component';

describe('CerebrumRootComponent', () => {
  let component: CerebrumRootComponent;
  let fixture: ComponentFixture<CerebrumRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerebrumRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerebrumRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
