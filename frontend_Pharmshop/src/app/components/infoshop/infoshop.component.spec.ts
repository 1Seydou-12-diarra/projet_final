import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoshopComponent } from './infoshop.component';

describe('InfoshopComponent', () => {
  let component: InfoshopComponent;
  let fixture: ComponentFixture<InfoshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
