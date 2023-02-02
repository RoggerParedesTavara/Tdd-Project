import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe estar definido un id card', () => {
    const tagCard = fixture.debugElement.query(By.css('#card'));
    expect(tagCard).toBeTruthy();
  });

  it('debe estar definido un elemento con id nombre', () => {
    const tagCard = fixture.debugElement.query(By.css('#nombre'));
    expect(tagCard).toBeTruthy();
  });

  it('debe estar definido un elemento con id apellido', () => {
    const tagCard = fixture.debugElement.query(By.css('#apellido'));
    expect(tagCard).toBeTruthy();
  });

  it('debe estar definido un elemento con id eliminarCard', () => {
    const tagCard = fixture.debugElement.query(By.css('#eliminarCard'));
    expect(tagCard).toBeTruthy();
  });

  it('cuando se haga click sobre el elemento elimar card, entonces se debe emitir el metodo eliminarCard() ', () => {
    const tagCard = fixture.debugElement.query(By.css('#eliminarCard'));
    const spy = spyOn(component as any, 'eliminarCard');
    tagCard.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('debe estar definido un atributo', () => {
    const tagCard = fixture.debugElement.query(By.css('#eliminarCard'));
    expect(tagCard).toBeTruthy();
  });
});
