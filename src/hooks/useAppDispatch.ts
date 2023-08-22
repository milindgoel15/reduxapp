import { AppDispatch } from "@/store/todoStore";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

export const useAppDispatch: () => AppDispatch = useDispatch;
