import { BUY_PIZZA } from "./PizzaHut.actiontype";

let intialstate ={
    count: 30
};

let pizzahutreducer = (state = intialstate, action) => {
switch (action.type) {
    case BUY_PIZZA:
        return{
            count: (state.count - 1> 0) ? state.count - 1 : 0
        }
        

    default: return state;
}
}
export {pizzahutreducer};