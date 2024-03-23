import React from 'react';
import { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { AppFallback } from './routes/Layout';
import { DashboardRoutes } from './routes/DashboardRoutes';



export interface IModuleRouter {
    routes: RouteObject[];
    layout?: () => JSX.Element;
    key: string;
  }
  


  const AppRouter = () => {

    const router = DashboardRoutes;
    
      const Layout = router?.layout ?? AppFallback;
    
      const routerView = useRoutes([
        {
          element: <Layout />,
          children: router?.routes ?? [],
        },
      ]);
    
      return <Suspense fallback={<AppFallback screen />}>{routerView}</Suspense>;
    };
    
    export default AppRouter;  