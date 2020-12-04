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