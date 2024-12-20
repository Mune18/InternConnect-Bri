import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageInternComponent } from './homepage.intern.component';

describe('HomepageInternComponent', () => {
  let component: HomepageInternComponent;
  let fixture: ComponentFixture<HomepageInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageInternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
