import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystAdminDashboardComponent } from './analyst-admin-dashboard.component';

describe('AnalystAdminDashboardComponent', () => {
  let component: AnalystAdminDashboardComponent;
  let fixture: ComponentFixture<AnalystAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystAdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
