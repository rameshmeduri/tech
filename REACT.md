
useState
--------
- declares a state variable that you can update directly


useReducer
----------
declares a state variable with the update logic inside a reducer function


useRef
------
- reference a value that's not needed for rendering
- `DOM node`, `Timeout ID`
- updating a ref does not re-render your Component


useCallback
-----------
- cache a function definition between re-renders


useContext
----------
- read and subscribe to context from your component


useDeferredValue
----------------
- defer updating a part of the UI


useEffect
---------
- lets you synchronize a component with an external system


useLayoutEffect
---------------
- fires before the browser repaints the screen


useMemo
-------
cache the result of a calculation between re-renders


useTransition
-------------
- update the state without blocking the UI


## Class Components
-------------------
- Each `Component` has a lifecycle which you can monitor and manipulate during its three main phases[`Mounting`, `Updating`, `Unmounting`]


**`Mounting Stage` -- Mounting means putting elements into the `DOM`
> `constructor()` -- this will initiate the parent's constructor  
> `static getDerivedStateFromProps()` -- is called right before the `render` method  
> `render()` -- outputs the HTML to the DOM  
> `componentDidMount()` -- is called after the component is rendered


**`Updating Stage` -- `props/state` changed
> `static getDerivedStateFromProps()`  
> `shouldComponentUpdate()` -- should continue with the rendering or not  
> `render()`  
> `getSnapshotBeforeUpdate()`  
> `componentDidUpdate()`  

**`Unmounting Stage` -- when a component is removed from the DOM  
> `componentWillUnmount()` 



#### use of `Hooks`
- [x] State
- [x] Lifecycle Methods
- [x] Sharing Non-Visual Logic


#### Hooks Rules
- [x] Never call Hooks from inside a loop, condition or nested function
- [x] Hooks should sit at the top-level of your component
- [x] Only call Hooks from React functional components
- [x] Never call a Hook from a regular function
- [x] Hooks can call other Hooks


keys
----
Keys help React identify which items have changed (added/removed/re-ordered)


Performance
-----------
- `useMemo` returns a memoized `value`
- `useCallback` returns a memoized `function`
- `React.memo` memoizes a `Component`
- `React.lazy` imports a `Component` while instructing the bundler to create a separate chunk
- `<Suspense>` takes one prop named `fallback`, Component that shown while its lazily loaded children are unavailable
- `useTransition` lets you update the state without blocking the UI


useReducer
----------
```js
const [todos, dispatch] = useReducer(reducer, initialTodos);
```


#### useState(lazy initialization)
- if we need initial state on the first render only, then we can pass a `callback` to `useState`
- `callback` returns the initial state
```js
const initState = () => Number(window.localStorage.getItem('count'));
```

#### setState(Callback)
- compute new state based on previous state
```js
setCount((prevCount) => prevCount + 1);
```

super(props)
------------
- to access `this` first we need to call parent class constructor
- super() will calls the constructor of its parent class
- This is required when you need to access some variables from the parent class
- `this.props` will be undefined in the constructor

```js
class Checkbox extends React.Component {
  constructor(props) {    
    super(props); // 🔴 Can’t use `this` yet    
    this.state = { isOn: true }; // ✅ Now it’s okay though
  }
}
```

HOC
---
- a higher-order component is a function 
- that takes a component and returns a new component


useEffect
---------
```js
// On Mount and every render
useEffect(() => {
  dosomething();
});

// Only on Mount
useEffect(() => {
  dosomething();
}, []);

// On Mount/every time [count] change
useEffect(() => {
  dosomething();
}, [count]);

// UseEffect with cleanup
useEffect(() => {
  dosomething();
  return () => { } // cleanup
});
```

#### useRef
- allows you to persist values between renders
- takes the initial value and returns a reference
- reference.current accesses the reference value, and reference.current = newValue updates the reference value
- The value of the reference is persisted (stays the same) between component re-renderings
- Updating a reference doesn't trigger a component re-rendering
- The reference update is synchronous
- the state update is asynchronous


useCallback
-----------
- useCallback returns a memoized callback
- What this means is that any function you create with useCallback won't be re-created on subsequent re-renders
- It takes two arguments, a function and an array of values that the function depends on
- The memoized function it returns will only change if one of the values in the dependency array change


React.memo
----------
- is a Higher-order component
- that lets you skip re-rendering a component if its props haven't changed


#### Render Props
- sharing code between React components using a `prop` whose value is a `function`
- Child component takes render prop and calls it

- we pass a function from the parent component to the child component as a render prop
- child component calls that function instead of implementing its own logic

```js
import React, { Component } from 'react';

class Wrapper extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    const { increment, decrement } = this;
    const { count } = this.state;
    return (
      <div>
        {
          this.props.render({ count, increment, decrement })
        }
      </div>
    );
  }
}

const Counter = () => (
  <Wrapper
    render={({ count, increment, decrement }) => (
      <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )}
  />
);

export default Counter;
```

Custom Hooks
------------
```js
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const usePrevious = (value) => {
  const ref = useRef(); // The ref object is a generic container whose current property is mutable ...
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  return ref.current; // Return previous value (happens before update in useEffect above)
};

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
};
```

forwardRef
----------
> allows parent components pass down `refs` to their children

```js
import React, { useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => (<input ref={ref} {...props} />));

const App = () => {
  const ref = useRef();
  const onFocus = () => {
    ref.current.focus();
  };
  return (
    <div className="App">
      <Input ref={ref} />
      <button onClick={onFocus}>Focus</button>
    </div>
  );
}

export default App;
```

#### useContext
- allow your components to access some global data and re-render when that global data is changed
- Context solves the props drilling problem

```js
// 1. Creating the context instance
const Context = createContext('Default Value'); // creates a context instance

// 2. Providing the value to context instance
<Context.Provider value="test" /> // Context.Provider component available on the context instance

// 3. Consuming the value from context instance
const value = useContext(Context);
```

React.lazy
----------
```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

REDUX SAGA
----------
```js
// takeEvery
// Use this when: You want to watch for EVERY time a specific redux action was dispatched.

function* watchGetUsersRequest() {
  yield takeEvery(action.Types.GET_USERS_REQUEST, getUsers);
}

// call
// Use this when: You want to call a function or a promise but want to wait for that function or promise to finish running before executing the next line of code.


function* deleteUser({userId}) {
  try{
    const result = yield call(api.deleteUser, userId);
  } catch(e) {
    // handle error
  }
}

// put
// Use this when: You want to dispatch a redux action from within a redux saga

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({
      users: result.data.users
    }));
  } catch(e) {
  // handler error
  }
}
```



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

# Event Loop
------------

- Everything in a `Node Applications` runs through the `event loop`
- There is only one `thread` that executes `JavaScript code`
- this is the `thread` where the `event loop` is running
- The execution of callbacks is done by the event loop
- The `event loop` as a `process` is a `set of phases` with specific tasks that are processed in a `round-robin` manner

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```
- `timers`: this phase executes callbacks scheduled by `setTimeout` & `setInterval`
- `pending callbacks`: executes I/O callbacks deferred to the next loop iteration
- `idle, prepare`: only used internally
- `poll`: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
- `check`: setImmediate() callbacks are invoked here
- `close callbacks`: some close callbacks, e.g. socket.on('close', ...)
- `process.nextTick` fires immediately on the same phase
- `setImmediate` fires on the following `iteration` or `tick` of the `event loop`






Middleware
----------
- list of functions that execute, in order, before your controllers

Controller
----------
- Controller is just a middleware but with the intent on returning some data

GraphQL
-------
- The GraphQL schema is at the center of every GraphQL server
- It defines the server's API
- allowing clients to know which operations can be performed
- schema is written in SDL
- root types that define the group of operations that the API allows
- root types -- "query / mutation / subscription"
- The "query" type is compulsory for any GraphQL schema
- we can define custom types in the schema
- scalar types -- Int, Float, Boolean, String, ID