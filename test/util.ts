import * as chai from 'chai';
let expect = chai.expect;

import {Util} from '../src/util';
let add = Util.add;

describe("Add two values", () => {
   it("When I add 2 and 4, I get 6", ()=> {
      // When i Add 2 + 4
      let result = add(2,4);
      // Then
      expect(result).to.equal(6);
   });
});
