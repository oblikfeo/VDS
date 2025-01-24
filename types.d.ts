// static files declarations

declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

/** Indicates we are in a server (node) environment. Injected via webpack's DefinePlugin. */
declare const __SERVER__: boolean;

/** Indicates we are in a production build. Injected via webpack's DefinePlugin. */
declare const __PRODUCTION__: boolean;

// server environment vars
declare namespace NodeJS {
  interface Process {
    env: {
      NODE_ENV: string;
      HOST?: string;
      HTTPS?: string;
      USE_REDIRECT_HTTPS?: string;
      /** The port the server will be listening to. */
      PORT?: number | string;
      /** Absolute path to the public directory where static the files will be served */
      PUBLIC_DIR_PATH?: string;
      /** Absolute path to the html template file witch will be used by the react ssr */
      HTML_TEMPLATE_PATH: string;
      USE_CLIENT_RENDER?: boolean;
      CRT_PATH?: string;
      KEY_PATH?: string;
      MOCK_SERVER?: string;
      PROXY_SERVER_URL?: string;
    };
  }
}
