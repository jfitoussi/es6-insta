// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!

describe('`let` restricts the scope of the variable to the current block', () => {

  describe('`let` vs. `var`', () => {

    it('`var` works as usual', () => {
      if (true) {
        var varX = true;
      }
      assert.equal(varX, true);
    });

    it('`let` restricts scope to inside the block', () => {
      if (true) {
        var letX = true;
      }
      else {
      assert.throws(() => console.log(letX));}
    });

  });

  describe('`let` usage', () => {

    it('`let` use in `for` loops', () => {
      if (true) {
      let obj = {x: 1};}
      else{
      for (var key in obj) {

      }
      assert.throws(() => console.log(key));}
    });

    it('create artifical scope, using curly braces', () => {

        if (true) {
        var letX = true;
      }
      else{
      assert.throws(() => console.log(letX));}
    });
    
  });
  
});
