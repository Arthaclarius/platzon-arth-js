const expect = require('chai').expect
const platzon = require('..').default;

describe('#platzon', function () {

  it('Si la palabra termina en ar, se quitan esos caracteres', function(){
    const translation = platzon("Programar")
    expect(translation).to.equal('Program')
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
    const translation = platzon("Zorro")
    expect(translation).to.equal('Zorrope')
  })

  it('Si la palabra traducida tiene 10 o más letras,se debe partir a la mitad y unir con un guión del medio',
   function(){
     const translation = platzon("abecedario")
     expect(translation).to.equal('abece-dario')
  })

  it('Si la palabra es un palindromo  ninguna regla anterior cuenta y devuelve la misma palabra pero intercalando mayusculas y minusculas', function(){
    const translation = platzon("sometemos")
    expect(translation).to.equal('SoMeTeMoS')
  })

})
