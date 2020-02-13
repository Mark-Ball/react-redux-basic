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

The store is the part of Redux which uses al our actions and reducers and combines them into global state. Create a file called ```store.js``` in the src folder. To allow viewing of the store through the browser, we must add ```window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()```. We must also install Redux devtools in the browser.
```Javascript
import { createStore } from 'redux';
import reducers from './reducers';

export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
```

### 4. Integrating into React

To give our entire application access to the store, we must wrap our entire application (i.e. our <App /> component) inside a Provider. In index.js, import the Provider component and the store, wrap App in Provider, passing the store to Provider.
```Javascript
import { Provider } from 'react-redux';
import store from './store';
// other imports

// reactDOM render
<Provider store={store}>
    <App />
</Provider>
```

## Saving into global state

To save into global state, we must use the ```connect``` function to allow access to the Redux store. We call connect in the export line, where we pass null as the first argument and the name of our action creator as the second argument. 

We want to save name into the store in ```nameForm.js```.
```Javascript
import { connect } from 'react-redux';
import { setName } from './../actions';

// nameForm class

export default connect(null, { setName })(nameForm);
```

This puts the ```setName()``` function in props, so it can be called with ```this.props.setName()```.

## Pulling from global state

To use the variable saved into global state, we use the first argument of the connect() function. To do this we create a function called mapStateToProps and pass it as the first argument of connect.

We want to access the store in ```nameDisplay.js```.
```Javascript
import { connect } from 'react-redux';

// nameDisplay class

const mapStateToProps = (state) => {
    return {
        name: state.name.name
    };
};

export default connect(mapStateToProps)(nameDisplay);
```