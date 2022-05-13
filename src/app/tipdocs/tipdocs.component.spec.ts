import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipdocsComponent } from './tipdocs.component';

describe('TipdocsComponent', () => {
  let component: TipdocsComponent;
  let fixture: ComponentFixture<TipdocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipdocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
