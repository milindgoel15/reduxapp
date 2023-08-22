import { RootState } from "@/store/todoStore";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
