"use client";
import {
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { InView } from "react-intersection-observer";

type Actions = { type: NAVIGATION_ACTIONS; payload?: any };
type States = {
  currentLink: string;
  childComponents: ReactElement[];
};

interface NavigationContextsProps {
  data: States;
  setActiveLink: (id: string) => void;
}

enum NAVIGATION_ACTIONS {
  SET_CURRENT_LINK = "SET_CURRENT_LINK",
  SET_CHILD_COMPONENTS = "SET_CHILD_COMPONENTS",
}

const NavigationContexts = createContext<NavigationContextsProps | null>(null);

const initialStates: States = {
  currentLink: "",
  childComponents: [],
};

const reducer = (states: States, action: Actions): States => {
  switch (action.type) {
    case NAVIGATION_ACTIONS.SET_CURRENT_LINK:
      return { ...states, currentLink: action.payload };

    case NAVIGATION_ACTIONS.SET_CHILD_COMPONENTS:
      return { ...states, childComponents: action.payload };

    default:
      return { ...states };
  }
};

export default function NavigationProvider({
  children,
  initialStatesProps,
}: {
  children: ReactElement[];
  initialStatesProps?: States;
}) {
  const [states, dispatch] = useReducer(reducer, {
    ...initialStates,
    ...initialStatesProps,
  });

  const setActiveLink = (payload: string) =>
    dispatch({ type: NAVIGATION_ACTIONS.SET_CURRENT_LINK, payload });

  const setChildComponents = (payload: ReactNode[]) =>
    dispatch({
      type: NAVIGATION_ACTIONS.SET_CHILD_COMPONENTS,
      payload,
    });

  useEffect(() => {
    const components = children.map((child, index) => {
      if (typeof child === "string") return child;

      return cloneElement(child, {
        key: index,
        id: index,
      });
    });

    setChildComponents(components);
  }, [children]);

  return (
    <NavigationContexts.Provider value={{ data: states, setActiveLink }}>
      {states.childComponents.map((component, index) => {
        const { props } = component as ReactElement;
        return (
          <InView
            id={props.class}
            key={index}
            onChange={(inView, entry) => {
              console.log(entry);
            }}
          >
            {component}
          </InView>
        );
      })}
    </NavigationContexts.Provider>
  );
}
