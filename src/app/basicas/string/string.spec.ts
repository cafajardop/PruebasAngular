import { mensaje } from "./string";


describe('Pruebas se Strings', () => {
    
    it('Debe regresar un string', () => 
    {

        const resp = mensaje('Carlos');
        expect(typeof resp).toBe('string');
    });

    it('Debe retornar un saludo con el nombre enviado', () => 
    {
        const nombre = 'Andres';
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    });
});
