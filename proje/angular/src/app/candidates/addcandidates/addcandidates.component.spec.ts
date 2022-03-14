import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcandidatesComponent } from './addcandidates.component';

describe('AddcandidatesComponent', () => {
  let component: AddcandidatesComponent;
  let fixture: ComponentFixture<AddcandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
