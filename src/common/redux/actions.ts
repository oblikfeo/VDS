import { createAction } from '@reduxjs/toolkit';

export const openModalAction = createAction<{ modalId: string; modalProps?: unknown }, 'OPEN_MODAL'>('OPEN_MODAL');
export const closeModalAction = createAction<{ modalId: string }, 'CLOSE_MODAL'>('CLOSE_MODAL');
