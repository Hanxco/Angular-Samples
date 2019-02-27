import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlesHeroComponent } from './controles-hero.component';

describe('ControlesHeroComponent', () => {
  let component: ControlesHeroComponent;
  let fixture: ComponentFixture<ControlesHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlesHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
