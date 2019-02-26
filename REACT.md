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