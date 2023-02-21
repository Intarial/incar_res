import React, { createContext } from "react";

export const ScreenModeContexts = createContext<{ value: 'dark' | 'light', update: (bool: 'dark' | 'light') => void }>({} as { value: 'dark' | 'light', update: (bool: 'dark' | 'light') => void })
