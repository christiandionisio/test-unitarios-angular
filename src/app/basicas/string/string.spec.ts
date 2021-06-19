import { mensaje } from './string';
// describe('Pruebas de Strings');
// it('Debe retornar un string');

describe('Pruebas de  strings', () => {

  it('Debe retornar un string',  () => {
    const resp = mensaje('Christian');
    expect(typeof resp).toBe('string');
  });

  it('Debe retornar un saludo con el nombre enviado',  () => {
    const nombre = 'Christian';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });

});
