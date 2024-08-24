import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 px-8 py-16">
      <Outlet />
    </div>
  );
};

export default Dashboard;
