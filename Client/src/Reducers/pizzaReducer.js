export const getAllPizzaReducer=(state={},action) => {
    switch(action.type){
        case 'Get_pizzas_request':
            return {
                ...state,
            };

            case "Get_pizzas_sucess":
                return{
                    pizzas:action.payload,
                };


            case "Get_pizzas_fail":
                return{
                    error:action.payload,
                };

                default:
                    return state;
    }
};