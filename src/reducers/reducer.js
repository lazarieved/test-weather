import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_STARTED,
} from '../actions/types';

const initialState = {
  city: '',
  loading: false,
  error: null,
  tempList: null,
};

export default function cityWeather(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        city: action.payload.city.name,
        tempList: action.payload.list,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
