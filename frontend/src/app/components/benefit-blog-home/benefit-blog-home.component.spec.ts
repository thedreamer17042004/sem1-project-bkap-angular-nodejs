import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitBlogHomeComponent } from './benefit-blog-home.component';

describe('BenefitBlogHomeComponent', () => {
  let component: BenefitBlogHomeComponent;
  let fixture: ComponentFixture<BenefitBlogHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitBlogHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitBlogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
