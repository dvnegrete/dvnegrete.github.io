import { createContext } from "react";
import { GlobalType } from "../shared/Types/Global";

export const GlobalContext = createContext<GlobalType | null>(null);