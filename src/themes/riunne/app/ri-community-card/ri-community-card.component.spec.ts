import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiCommunityCardComponent } from './ri-community-card.component';

describe('RiCommunityCardComponent', () => {
  let component: RiCommunityCardComponent;
  let fixture: ComponentFixture<RiCommunityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiCommunityCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiCommunityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
