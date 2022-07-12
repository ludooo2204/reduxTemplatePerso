import { createStore } from "redux";
import {reducerCount} from '../redux/reducerCount'
const store = createStore(reducerCount);

export default store;
