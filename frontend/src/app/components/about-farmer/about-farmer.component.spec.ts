import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFarmerComponent } from './about-farmer.component';

describe('AboutFarmerComponent', () => {
  let component: AboutFarmerComponent;
  let fixture: ComponentFixture<AboutFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
