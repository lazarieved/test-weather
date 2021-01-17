import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_STARTED,
} from './types';

import axios from 'axios';

const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de';

export const fetchWeather = city => {
  return dispatch => {
    dispatch(fetchStarted());

    axios
      .post(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
      .then(res => {
        if (res && res.data.cod != 200) {
          dispatch(fetchFailure(res.data.message));
        } else {
          dispatch(fetchSucces(res.data));
        }
      })
      .catch(err => {
        dispatch(fetchFailure(err.message));
      });
  };
};

const fetchSucces = payload => ({
  type: FETCH_SUCCESS,
  payload,
});

const fetchStarted = () => ({
  type: FETCH_STARTED
});

const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: {
    error
  }
});
