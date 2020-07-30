const constants = {
  CHANGE_NAME: 'CHANGE_NAME'
}

const actions = {
  changeName: {
    type: constants.CHANGE_NAME
  }
}

const actionCreators = {
  changeName(name) {
    return {
      ...actions.changeName,
      name
    }
  }
}

// dispatch(actions.actionCreators.changeName('new name'))

// dispatch({ type: 'CHANGE_NAME', payload: 'new name'})

const initialState = {
  name: 'hello word'
}

export default function reducer(state = initialState, action) {

  console.log('prev state', state)
  console.log('action', action)

  if (action.type === 'CHANGE_NAME_SUCCESS') {
    return {
      ...state,
      name: action.payload
    }
  }

  switch(action.type) {
    case constants.CHANGE_NAME:
      return {}
    case constants.CHANGE_NAME_STARTED:
      return {
        ...state,
        loading: true
      }
    case constants.CHANGE_NAME_FAILED:
      return {}
    case constants.CHANGE_NAME_SUCCESS:
      return {}


  }


  console.log('next state', state)

  return state;
}