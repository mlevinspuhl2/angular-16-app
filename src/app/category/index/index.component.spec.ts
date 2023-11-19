import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentCategory } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentCategory;
  let fixture: ComponentFixture<IndexComponentCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexComponentCategory]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexComponentCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
