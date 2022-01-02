import { useReducer } from "react";

const signInReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL-INPUT":
      return {
        email: action.payload,
        password: state.password,
        ...(action.isSignUp && {
          displayName: state.displayName,
          confirmPassword: state.confirmPassword,
        }),
      };

    case "PASSWORD-INPUT":
      return {
        email: state.email,
        password: action.payload,
        ...(action.isSignUp && {
          displayName: state.displayName,
          confirmPassword: state.confirmPassword,
        }),
      };

    case "CONFIRMPASSWORD-INPUT":
      return {
        email: state.email,
        password: state.password,
        displayName: state.displayName,
        confirmPassword: action.payload,
      };

    case "DISPLAYNAME-INPUT":
      return {
        email: state.email,
        password: state.password,
        displayName: action.payload,
        confirmPassword: state.confirmPassword,
      };
    case "CLEAR":
      return {
        email: "",
        password: "",
        ...(action.isSignUp && { displayName: "", confirmPassword: "" }),
      };

    default:
      return state;
  }
};

const useFormInput = (isSignUp = false) => {
  const initialState = {
    email: "",
    password: "",
    ...(isSignUp && { displayName: "", confirmPassword: "" }),
  };

  const [state, dispatch] = useReducer(signInReducer, initialState);

  const inputChangeHandler = (value, name) => {
    dispatch({ type: `${name.toUpperCase()}-INPUT`, payload: value, isSignUp });
  };

  return { state, dispatch, inputChangeHandler };
};

export default useFormInput;
