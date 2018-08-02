const assert = require('chai').assert;
global.window = global;
require('../src/js/añadirTarjeta'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar añadir list', ()=>{ //Describe lo que habrá dentro de cada función
    describe('Debería verificar si ', ()=>{
        it('Debería el correo tener solo un arroba', ()=>{ //Caso de prueba
            assert.equal(validateEmail("asdf@asdf.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validateEmail("asdf@@asdf.com"), false);
            assert.equal(validateEmail("asdf.com"), false);
        });
        it('Debería el correo tener un arroba antes del dominio', ()=>{
            assert.equal(validateEmail(".com@asdf"), false);
            assert.equal(validateEmail("fabian@laboratoria.la"), true);
        });
    });
  
});