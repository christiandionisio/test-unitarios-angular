import { usuarioLogeado } from './booleanos';



describe('Pruebas de booleanos', () => {

  it('Debe retornar true', () => {
    const resp = usuarioLogeado();
    expect(resp).toBeTruthy();
  });

});
