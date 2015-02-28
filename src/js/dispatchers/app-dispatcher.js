const Dispatcher = require('flux').Dispatcher;
const assign = require('object-assign');

const AppDispatcher = assign(new Dispatcher, {
    handleViewAction(action){
    console.log('action', action);
    this.dispatch({
      source: 'VIEW_POKEMON ',
      action:action
    })
  }
});

module.exports = AppDispatcher;