import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header />
      <main>
        <Outlet />
      </main>
      <footer />
    </>
  );
}

export default AppLayout;
