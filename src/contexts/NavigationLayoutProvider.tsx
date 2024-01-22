"use client";
import { ReactElement, createContext, useReducer } from "react";
import { InView } from "react-intersection-observer";

type Actions = { type: NAVIGATION_ACTIONS; payload?: any };
type States = {
  currentLink: string | null;
};

export interface NavigationLayoutContextProps {
  data: States;
  setActiveLink: (id: string) => void;
}

enum NAVIGATION_ACTIONS {
  SET_CURRENT_LINK = "SET_CURRENT_LINK",
}

export const NavigationLayoutContext =
  createContext<NavigationLayoutContextProps | null>(null);

const initialStates: States = {
  currentLink: null,
};

const reducer = (states: States, action: Actions): States => {
  switch (action.type) {
    case NAVIGATION_ACTIONS.SET_CURRENT_LINK:
      return { ...states, currentLink: action.payload };

    default:
      return { ...states };
  }
};

export default function NavigationLayoutProvider({
  children,
  initialStatesProps,
}: {
  children: ReactElement[];
  initialStatesProps?: Partial<States>;
}) {
  const [states, dispatch] = useReducer(reducer, {
    ...initialStates,
    ...initialStatesProps,
  });

  const setActiveLink = (payload: string) => {
    dispatch({ type: NAVIGATION_ACTIONS.SET_CURRENT_LINK, payload });
  };

  return (
    <NavigationLayoutContext.Provider value={{ data: states, setActiveLink }}>
      {children}
    </NavigationLayoutContext.Provider>
  );
}
