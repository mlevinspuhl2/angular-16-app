import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComponentCategory } from './show.component';

describe('ShowComponent', () => {
  let component: ShowComponentCategory;
  let fixture: ComponentFixture<ShowComponentCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowComponentCategory]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowComponentCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
