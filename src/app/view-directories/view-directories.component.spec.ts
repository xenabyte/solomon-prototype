import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDirectoriesComponent } from './view-directories.component';

describe('ViewDirectoriesComponent', () => {
  let component: ViewDirectoriesComponent;
  let fixture: ComponentFixture<ViewDirectoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDirectoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDirectoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
