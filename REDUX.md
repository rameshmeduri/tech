**3 Principles**

> Single source of truth  
> State is read-only  
> Changes are made with pure functions  

**Work Flow**
> action creators create objects  
> objects are dispatched to the store  
> the store invokes reducers  
> reducers generate new state  
> listeners are notified of state updates  

```js
const { createStore } = require('redux');

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, action.payload]; // new Array
    }
    case 'REMOVE_TODO': {
      let filtered = state.filter((item) => item !== action.payload);
      return filtered; // new Array
    }
    default: return state;
  }
};

const store = createStore(reducer, []);

store.dispatch({ type: 'ADD_TODO', payload: 'item1' });
store.dispatch({ type: 'REMOVE_TODO', payload: 'item2' });
console.log(store.getState());



const  funk = text =>       console.log(text + '!')
const thunk = text => () => console.log(text + '!')


```


- whenever a value gets dispatched to the Redux store, it first passes through middleware
