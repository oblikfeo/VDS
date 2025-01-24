export * from './ajax';
export * from './data';
export * from './requests';
export * from './validation';

export const isClient = () => typeof window !== 'undefined';
