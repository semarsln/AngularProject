import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittestsComponent } from './edittests.component';

describe('EdittestsComponent', () => {
  let component: EdittestsComponent;
  let fixture: ComponentFixture<EdittestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
