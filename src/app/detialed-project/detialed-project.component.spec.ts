import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialedProjectComponent } from './detialed-project.component';

describe('DetialedProjectComponent', () => {
  let component: DetialedProjectComponent;
  let fixture: ComponentFixture<DetialedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetialedProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetialedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
