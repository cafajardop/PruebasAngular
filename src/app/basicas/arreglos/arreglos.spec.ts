import { obtenerRobots } from "./arreglos";
//para ignorar todo se puede antes del describe
xdescribe('Pruebas de arreglos',()=>{
   ///Para omitir una prueba pongo al x antes del it
    it('Debe retornar al menos 3 robots', ()=>{

        const res = obtenerRobots();
        expect(res.length).toBe(3);
    });

    it('Debe existir MegaMan y Jarvis', ()=>{

        const res = obtenerRobots();
        expect(res).toContain('Megaman');
        expect(res).toContain('Jarvis');
    });
});