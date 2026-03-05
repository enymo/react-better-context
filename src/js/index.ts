import { requireNotNull } from "@enymo/ts-nullsafe";
import { createContext as originalCreateContext, useContext } from "react";

export function createContext<T>(defaultValue: T) {
    const Context = originalCreateContext<T>(defaultValue);
    return [Context.Provider, () => useContext(Context)] as const;
}

export function createRequiredContext<T>(message?: string) {
    const Context = originalCreateContext<T | null>(null);
    return [Context.Provider, () => requireNotNull(useContext(Context), message)] as const;
}