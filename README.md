# Redux basics

We have two components: nameDisplay and nameForm. A name is set in nameForm, where it is saved into global state. It can then be pulled from global state in nameDisplay.

## Setting up Redux

We must first install Redux
```
npm i redux react-redux
```

Redux works by a system of actions and reducers.

- Actions are Javascript objects which are used to update global state.
- Action creators are functions which return actions.
- The actions are passed to Reducers, which update parts of state
- State is held in the store

### 1. Actions and actions creators

Create a directory called ```actions``` within ```src```. Create a file called ```index.js``` within actions.

Within index.js, we will now create an action creator for name.
```Javascript
export const setName = (name = '') => {
    return {
        type: 'NAME',
        payload: name
    };
};
```

### 2. Reducers

Create a directory called ```reducers``` within ```src```. 

Within reducers, create a file called ```name_reducer.js```. Within that file we will now write our reducer.
```Javascript
const defaultState = {
    name: ''
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'NAME':
            return {...state, name: action.payload};
        default:
            return state;
    };
};
```

Create a file called ```index.js``` within reducers. Within index.js, we will now create our reducer combiner.
```Javascript
import { combineReducers } from 'redux';
import nameReducer from './name_reducer';

export default combineReducers({
    name: nameReducer;
});
```

### 3. The store

## Saving into global state

## Pulling from global state