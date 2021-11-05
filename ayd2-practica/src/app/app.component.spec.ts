import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Deberia crear la app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Deberia tener de titulo 'ayd2-practica'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ayd2-practica');
  });

  it('Deberia decir mi carnet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content p')?.textContent).toContain('Mi carnet es 201404218!');
  });

  it('Deberia tener solo un punto', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content label')?.textContent).toContain('.');
  });

  //mi carnet es 201404218
  
  it('Deberia ser numero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let response = fixture.componentInstance.ValidarNumero('1a');
    expect(response).toBe('Es numero!');
  });

  it('No deberia ser numero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let response = fixture.componentInstance.ValidarNumero('a');
    expect(response).toBe('No es numero');
  });

});
