import { obtenerRobots } from "./arreglos";

describe('Pruebas de arreglos',()=>{
   
    it('Debe retornar al menos 3 robots', ()=>{

        const res = obtenerRobots();
        expect(res.length).toBe(3);
    });
});