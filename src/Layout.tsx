import { Outlet } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function Layout() {
  return (
    <div>
      <div className="mt-8 mb-4 flex justify-end px-2">
        <TonConnectButton />
      </div>
      <Outlet />
    </div>
  );
}
