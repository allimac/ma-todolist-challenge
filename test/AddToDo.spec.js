describe('itemsController', function() {

  var ctrl;

  beforeEach(module('ToDoListApp'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('itemsController');
  }));

  it('should have a new todo as undefined', function() {
    expect(ctrl.newItem).toEqual(undefined);
  });

  describe('when items are added', function(){

    beforeEach(function(){
      ctrl.newItem = 'Buy milk';
      ctrl.addToDo();
    });

    it('should add the new todo to the items', function() {
      expect(ctrl.items['todo']).toContain('Buy milk');
    });

    it('should allow to delete a todo', function() {
      ctrl.deleteToDo('Buy milk');
      expect(ctrl.items['todo']).not.toContain('Buy milk');
      expect(ctrl.items['done']).not.toContain('Buy milk');
    });

    it('should allow to edit a todo', function() {
      ctrl.editToDo('Buy milk', 'Buy apples');
      expect(ctrl.items['todo']).not.toContain('Buy milk');
      expect(ctrl.items['todo']).toContain('Buy apples');
    });

    xit('should allow to mark as done a todo', function() {
      ctrl.markDone('Buy milk');
      expect(ctrl.items['todo']).not.toContain('Buy milk');
      expect(ctrl.items['done']).toContain('Buy apples');
    });
  })

});
