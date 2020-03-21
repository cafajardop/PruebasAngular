import { obtenerRobots } from "./arreglos";

describe('Pruebas de arreglos',()=>{
   
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