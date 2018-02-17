import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieSummaryComponent } from './recepie-summary.component';

describe('RecepieSummaryComponent', () => {
  let component: RecepieSummaryComponent;
  let fixture: ComponentFixture<RecepieSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
