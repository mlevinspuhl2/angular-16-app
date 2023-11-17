import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentCategory } from './edit.component';

describe('EditComponentCategory', () => {
  let component: EditComponentCategory;
  let fixture: ComponentFixture<EditComponentCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponentCategory]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditComponentCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
