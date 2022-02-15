import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/reducers/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingStore = useSelector((store) => store.greetingReducer);
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  const consoleThings = () => {
    console.log(greetingStore);
  };

  return (
    <div>
      <button type="button" className="getGreetingsBtn" onClick={() => consoleThings()}>Magic button</button>
      <p id="greeting">asd</p>
    </div>
  );
};

export default Greeting;
