describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(_.all([], function(){return true;}))
    	.toBe(true);
  });
});
