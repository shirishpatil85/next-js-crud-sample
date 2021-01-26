## 1. Folder Structures

```bash
+---components
+---icons
+---models
+---pages
|   \---api
|       \---employees
+---store
|   +---actions
|   +---reducers
|   \---sagas
+---styles
\---utils
```

<br/>

## 2. DB layer Code
-------------------

Utilities --> mongoose.connect

Model --> mongoose.schema - mongoose.model

<br/>

## 3. Next JS Code 
-------------------

pages/api --> Middleware req,res

createWrapper(makeStore)  --> Use next-redux-wrapper to wrap the store

hydrate from next-redux-wrapper--> add to reducer file , intial action with no specific action

<br/>

## 4. React Component JS Code
-------------------

index.js - add all components to this SPA

dispatch(action)

useSelector  // map subset of data

Modal is prompt type screen

<br/>

## 5. React Web Hooks
--------------------

useEffect - dispatch(fetchEmployees());

<br/>

## 6. Redux State Management
-------------------

actions ->  
    
        lambda - export const fn(payload){type: string; payload: Payload;}

reducers -> 

        const mainReducer = (state = initialState, action) => {

        three Dot operator ->

            <Modal {...this.props} title='Modal heading' animation={false}>

            <Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}>

store ->  

        createStore - reducer, intialvalue, enhancer-applyMiddleware(sagaMiddleware)

types -> 

        constants used for type checking etc


index.js to export all modules


Saga - add to store.js    

    applyMiddleware(sagaMiddleware)

    sagaMiddleware.run(helloSaga)

    async generator -> export function* helloSaga() { Use yield method inside this }


<br/>



