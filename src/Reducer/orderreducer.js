const intialState=[]

export default function orderreducer(state=intialState,action){
         const {type,payload}=action;
         switch(type){
            case "ADDORDER":
                return[...state,payload]
            default :
            return state    
         }
}