import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveemployeeComponent } from './retrieveemployee.component';

describe('RetrieveemployeeComponent', () => {
  let component: RetrieveemployeeComponent;
  let fixture: ComponentFixture<RetrieveemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrieveemployeeComponent]
    });
    fixture = TestBed.createComponent(RetrieveemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
