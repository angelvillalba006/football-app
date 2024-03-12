import React from "react";

const NavigationContext = React.createContext({
  index: 0,
  setIndex: (index: number) => {},
});

export default NavigationContext;
