**`Hooks`

```js
// Custom Hook -- to share logic between Components
function useRepos(id) {
  const [repos, setRepos] = React.useState([]); // Local State
  const [loading, setLoading] = React.useState(true); // Local State

  React.useEffect(() => { // componentDidMount & componentDidUpdate
    
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
