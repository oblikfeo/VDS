export enum ToastStatusEnum {
  'DEFAULT',
  'SUCCESS',
  'WARNING',
  'ERROR',
}

export type ToastType = {
  id: string;
  message: string;
  status?: ToastStatusEnum;
  time?: number;
  closeable?: boolean;
};

export type ToastsContextType = {
  toasts: ToastType[];
  addToast: (toast: ToastType) => void;
  removeToast: (id: string) => void;
};
