import { requireNotNull } from "@enymo/ts-nullsafe";
import React, { useContext } from "react";

export function createContext<T>(defaultValue: T) {
    const Context = React.createContext<T>(defaultValue);
    return [Context.Provider, () => useContext(Context)] as const;
}

export function createRequiredContext<T>(reason?: string) {
    const Context = React.createContext<T | null>(null);
    return [Context.Provider, () => requireNotNull(useContext(Context), reason)] as const;
}