import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecreateComponent } from './employeecreate.component';

describe('EmployeecreateComponent', () => {
  let component: EmployeecreateComponent;
  let fixture: ComponentFixture<EmployeecreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeecreateComponent]
    });
    fixture = TestBed.createComponent(EmployeecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
