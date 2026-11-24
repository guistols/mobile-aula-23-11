import { create } from 'zustand';

interface CounterProps {
    number: number,
    incease: () => void,
    decrement: () => void
}

export const useCounter = create<CounterProps>((set)=>({
    number: 0,
    decrement: () => set((state)=>({...state,number: state.number-1})),
    incease :() => set((state)=>({...state,number: state.number+1}))
}));

