import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoItemsReducer from './reducers/todo-items-reducer';
import TodoList from './TodoList';

const store = createStore(todoItemsReducer);
const appElement = document.createElement('div');
appElement.id = 'app';

store.dispatch({ type: 'ADD_TODO', text: 'Do stuff' });
store.dispatch({ type: 'ADD_TODO', text: 'Do more stuff' });
store.dispatch({ type: 'TOGGLE_TODO', index: 0 });

document.body.appendChild(appElement);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  appElement,
);
