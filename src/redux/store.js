import { createStore } from "redux";
import reducer from "./basket/reducer";

const store = createStore(reducer);

export default store;
