import {
  NavigationLayoutContext,
  NavigationLayoutContextProps,
} from "@/contexts/NavigationLayoutProvider";
import { useContext, useDebugValue } from "react";

export default function useNavigationLayout(): NavigationLayoutContextProps {
  const context = useContext(NavigationLayoutContext);
  useDebugValue(context);
  return context as NavigationLayoutContextProps;
}
