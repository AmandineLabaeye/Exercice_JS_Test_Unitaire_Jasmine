import { maFonction } from './exercice1.js';

describe('maFonction', function() {

   it('should return true if param1 is defined', function() {
        expect(maFonction("anything")).toBe(true);
   });

    it('should return 5 ( string ) if param1==5', function() {
        expect(maFonction(5)).toBe('5');
    });

    /* Ecrire le reste des tests ci dessous */

});