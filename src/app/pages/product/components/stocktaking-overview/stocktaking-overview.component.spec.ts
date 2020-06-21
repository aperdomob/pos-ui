import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktakingOverviewComponent } from './stocktaking-overview.component';

describe('StocktakingOverviewComponent', () => {
  let component: StocktakingOverviewComponent;
  let fixture: ComponentFixture<StocktakingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocktakingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocktakingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
