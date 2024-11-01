// types/next-connect.d.ts
declare module 'next-connect' {
    import { IncomingMessage, ServerResponse } from 'http';
    import { NextApiRequest, NextApiResponse } from 'next';
    import { ParsedUrlQuery } from 'querystring';
  
    interface NextConnectOptions {
      onError?: (err: any, req: NextApiRequest, res: NextApiResponse, next: any) => void;
      onNoMatch?: (req: NextApiRequest, res: NextApiResponse) => void;
    }
  
    type NextHandler = (req: NextApiRequest, res: NextApiResponse, next: any) => void;
  
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
  