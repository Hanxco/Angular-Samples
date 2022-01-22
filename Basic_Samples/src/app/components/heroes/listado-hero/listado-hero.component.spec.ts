import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHeroComponent } from './listado-hero.component';

describe('ListadoHeroComponent', () => {
  let component: ListadoHeroComponent;
  let fixture: ComponentFixture<ListadoHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
