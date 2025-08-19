import { initialState } from "./intialState";

export const fetchApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FURNITURE_REQUEST:
      return { loading: true, ...state };

    case FETCH_FURNITURE_SUCCESS:
      return { loading: false, furniture: action.payload, ...state };

    case FETCH_FURNITURE_ERORR:
      return { loading: true, error: action.payload, ...state };
  }
};
