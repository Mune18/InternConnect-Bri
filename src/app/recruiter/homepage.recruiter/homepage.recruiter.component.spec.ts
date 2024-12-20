import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageRecruiterComponent } from './homepage.recruiter.component';

describe('HomepageRecruiterComponent', () => {
  let component: HomepageRecruiterComponent;
  let fixture: ComponentFixture<HomepageRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageRecruiterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
