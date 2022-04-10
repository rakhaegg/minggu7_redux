const redux = require("redux");
const createStore = redux.createStore;


// Initial State
// Bisa berupa objek atau value

const initialState = {
    value :  0,
    age : 17 
}


//Reducer 
//state adalah global action
//state menyimpan objek besar
const rootReducer = (state = initialState , action) => {
    

    //ketika action type 
    if(action.type === 'ADD_AGE'){
        return{
            ...state,
            age : state.age + 1
        }
    }
    if(action.type === 'CHANGE_VALUE'){
        return{
            ...state,
            value : state.value + action.newValue
        }
    }
    return state;
}

const store = createStore(rootReducer);    
console.log(store.getState());

//dispatch
// objek dibawah harus memiliki tipe
// action apa yang harus dilkaukan oleh reducers

// memberikan intruksi ke reducer 
// tolong lakukan action ADD_AGE
// memberikan intruksi untuk merubah 

// Dispatch sebuah action pada list list di reducer
store.dispatch({ type :  'ADD_AGE'  })
store.dispatch({ type :  'CHANGE_VALUE', newValue : 12  });
console.log(store.getState());
//disptch memanggil reducer


// Fungsi subcription 
// Setiap kali perubahan pada store dia akan terpanggil subscription

store.subscribe(() => {
    console.log("store change" , store.getState());
})