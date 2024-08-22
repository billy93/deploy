import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-400">
      {children}
    </div>
  );
};

export default Layout;
