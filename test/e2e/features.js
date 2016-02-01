describe('Todo list app', function() {

  var inputBox = element(by.name('todo'));
  var item = element(by.id('toDo'));

  beforeEach(function() {
    browser.get('http://localhost:5000');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('To do list');
  });

  xit('should allow to enter the next todo item', function() {
    inputBox.sendKeys('Buy milk and apples');
    element(by.id('Add')).click();
    expect(item.getText()).toEqual('Buy milk and apples');
  });

  xit('should allow to edit the item', function() {
    inputBox.sendKeys('Buy milk and apples');
    element(by.id('Add')).click();
    expect(item.getText()).toEqual('Buy milk and apples');
  });
});
