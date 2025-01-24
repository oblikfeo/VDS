'use client';

import { createContext } from 'react';

import { ToastsContextType } from '../types';

export const ToastsContext = createContext<ToastsContextType | null>(null);
