
/**
 * create REDUX store
 * { getState(), dispatch(), subscribe() }
 */
export function createStore(reducer, initialState, storeEnhancers) {
  var state = initialState;
  var subscribers = [];

  return {
    /**
     * return internal state
     */
    getState(){
      return state;
    },

    /**
     * change state using reducer
     * notify subscribers about state change
     */
    dispatch(action){
      state = reducer(state, action);
      subscribers.forEach(fn => fn());
    },

    /**
     * Add subscriber to subscribers
     * activated when dispatch activates
     * @param {function} function to subscribe
     * @returns {function} unsbuscriber
     */
    subscribe(fn) {
      subscribers.push(fn)
      return () => subscribers = subscribers.filter(func => func !== fn)
    }
  }

}

const initialState = {
  name: 'hello word',
  innerHTML: '<span>hello world</span>'
};

// immer
function reducer(state = initialState, action) {
  if (action.type === 'change') {
    return {
      ...state,
      innerHTML: action.payload
    }
  }
  return state;
}

const store = createStore(reducer)
store.dispatch({type: '@@INIT.v.5.c.4.s'})

var counter = 0;
function render() {
  console.log('counter', counter++);
  document.querySelector('#redux').innerHTML = store.getState().innerHTML
}

render()

console.log('store', store)
console.log('store state', store.getState())


var unsbuscribe = store.subscribe(render);

store.dispatch({ type: 'change', payload: '<div>HELLO</div>'});

unsbuscribe();

store.dispatch({ type: 'change', payload: '<div>HALO</div>'});


export { store }



/**
 * 
 * ACTION => STORE / DISPATCHER => VIEW
 * 
 * Store = {
 *  getState(){},
 *  dispatch(action){},
 *  subscribe(){}
 * }
 * 
 * unsubscribe
 * 
 * 
 */

// logger middleware

var oldDispatch = store.dispatch;
store.dispatch = function newDispatch(action) {
  console.log('action', action)
  console.log('prev state', store.getState())

  if (action.type != 'BAD_TYPE') {
    oldDispatch(action);
  }

  console.log('next state', store.getState())

}








