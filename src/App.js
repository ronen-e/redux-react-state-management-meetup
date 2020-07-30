import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hello from './Hello';

function App(props) {
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();

    // const action = {type: 'CHANGE_NAME', payload: 'hi'}

    const action = async function changeName(dispatch) {
      dispatch({ type: 'CHANGE_NAME_STARTED'})

      try {
        var result = await Promise.reject('name from server')
        dispatch({ type: 'CHANGE_NAME_SUCCESS', payload: result })
      } catch(e) {
        dispatch({ type: 'CHANGE_NAME_FAILED', payload: e.message })
      }

    }

    return (
      <div>
        <Hello name={name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        
        <button onClick={() => dispatch(action)}>change name</button>
      </div>
    );
}

export { App }