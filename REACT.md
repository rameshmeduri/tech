##### use of `Hooks`
- [x] State
- [x] Lifecycle Methods
- [x] Sharing Non-Visual Logic


##### Hooks Rules
- [x] Never call Hooks from inside a loop, condition or nested function
- [x] Hooks should sit at the top-level of your component
- [x] Only call Hooks from React functional components
- [x] Never call a Hook from a regular function
- [x] Hooks can call other Hooks


##### useState(lazy initialization)
- if we need initial state on the first render only, then we can pass a `callback` to `useState`
- `callback` returns the initial state
```js
const initState = () => Number(window.localStorage.getItem('count'));
```

##### setState(Callback)
- compute new state based on previous state
```js
setCount((prevCount) => prevCount + 1);
```

##### useEffect
- the hook that runs side-effects independently of rendering
- callback is executed right after changes were being pushed to DOM
- SideEffect Ex : API Calls, DOM Manipulation, setTimeout
- The component rendering and side-effect logic are independent
- https://dmitripavlutin.com/dbe428bafd5308bb2744d7c315c81d9a/react-useeffect-callback-cleanup-3.svg
```js
useEffect(() => { }) // Every Time
useEffect(() => { }, []) // On Mount
useEffect(() => { }, [id, authed]) // when deps change


// Custom Hook -- to share logic between Components
function useRepos(id) {
  const [repos, setRepos] = useState([]); // Local State
  const [loading, setLoading] = useState(true); // Local State

  useEffect(() => { // componentDidMount & componentDidUpdate
    
    setLoading(true);

    fetchRepos(id).then(repos => {
      setRepos(repos);
      setLoading(false);
    });
  }, [id]);

  return [loading, repos];
}
```

**`Mounting Stage` -- called in the following order**
> constructor()  
> static getDerivedStateFromProps()  
> render()  
> componentDidMount()  


**`Updating Stage` -- called in the following order**
> static getDerivedStateFromProps()  
> shouldComponentUpdate()  
> render()  
> getSnapshotBeforeUpdate()  
> componentDidUpdate()  

**`Unmounting Stage` -- called in the following order**
> componentWillUnmount()  

**Removed Methods**
 - componentWillUpdate()
 - componentWillReceiveProps()
 - componentWillMount()


# React Life Cycle Hooks
![](images/React_Life_Cycle.jpg)

**constructor**
- [x] initialize `state`
- [x] before `mounted`

**getDerivedStateFromProps**
- [x] called `before` `render` method
- [x] initial `mount` and on subsequent `updates`
- [x] return `object` to update the `state` or `null`

**shouldComponentUpdate**
 - [x] return `false` will prevent `re-rendering`

**componentDidMount**
- [x] after attached to the DOM
- [x] fetch API

**componentWillUnmount**
- [x] before dettached from the DOM
- [x] Perform any necessary cleanup

**componentDidUpdate**
- [x] after `update`
- [x] will not be invoked if shouldComponentUpdate() returns `false`

```js
this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
```

**PureComponent** performs a shallow comparison of `props` and `state`, and reduces the chance that you’ll skip a necessary update

compare `this.props` with `nextProps` and `this.state` with `nextState` and return `false` to tell React the update can be skipped


Life_Cycle : created, rendered, updated, removed

# Class Components

##### `componentWillMount()`
- Invoked once, both on the client and server, immediately before the initial rendering occurs

##### `componentWillReceiveProps(nextProps)` 
- Invoked when a component is receiving new props
- This method is not called for the initial render. 
- Calling this.setState() within this function will not trigger an additional render. 

##### `componentWillUnmount()` 
- Invoked immediately before a component is unmounted from the DOM
- Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount

##### `componentDidMount()`
- Invoked once, only on the client (not on the server), immediately after the initial rendering occurs
- At this point in the lifecycle, you can access any refs to your children
- The componentDidMount() method of child components is invoked before that of the parent component
  
##### `componentDidUpdate(prevProps, prevState)`
- Invoked immediately after the component's updates are flushed to the DOM
- This method is not called for the initial render
- Use this as an opportunity to operate on the DOM when the component has been updated.

##### `shouldComponentUpdate(nextState, nextProps)`
- Invoked before rendering when new props or state are being received
- This method is not called for the initial render or when forceUpdate() is used
- Use this as an opportunity to return false when you're certain that the transition to the new props and state will not require a component update

##### `VDOM`
- Changes are batched together
- Changes are made to the `VDOM` instead of `DOM` 
- React creates a diff between the current representation and the previous representation persisted to the `DOM`, then applies the diff to the `DOM`

##### `Keys`
- With keys, React would actually re-order the DOM elements

##### `HOC`
- function that takes a `component` and returns a new `component`
- wraps the `component` with additional props
- HOC takes another component as argument

##### `Render Prop`
- `function prop` that is called in a `render` method