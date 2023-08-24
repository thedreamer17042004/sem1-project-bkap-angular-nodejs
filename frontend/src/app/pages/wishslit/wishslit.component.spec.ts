import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishslitComponent } from './wishslit.component';

describe('WishslitComponent', () => {
  let component: WishslitComponent;
  let fixture: ComponentFixture<WishslitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishslitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishslitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
