// src/@types/next-connect.d.ts
declare module 'next-connect' {
  import { NextApiRequest, NextApiResponse } from 'next';

  interface NextConnectOptions {
    onError?: (err: unknown, req: NextApiRequest, res: NextApiResponse, next: () => void) => void;
    onNoMatch?: (req: NextApiRequest, res: NextApiResponse) => void;
  }

  type NextHandler = (req: NextApiRequest, res: NextApiResponse, next: () => void) => void;

  interface NextConnect {
    (options?: NextConnectOptions): {
      use: (...handlers: NextHandler[]) => NextConnect;
      get: (path: string, ...handlers: NextHandler[]) => NextConnect;
      post: (path: string, ...handlers: NextHandler[]) => NextConnect;
      delete: (path: string, ...handlers: NextHandler[]) => NextConnect;
      patch: (path: string, ...handlers: NextHandler[]) => NextConnect;
      put: (path: string, ...handlers: NextHandler[]) => NextConnect;
    };
  }

  const nextConnect: NextConnect;
  export default nextConnect;
}
