import { Outlet } from "react-router-dom"
import AdminHeader from "./header"
import AdminSidebar from "./sidebar"


export default function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
<AdminSidebar/>
<div className="flex flex-1 flex-col">
<AdminHeader/>
    <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
        <Outlet/>
    </main>

</div>

    </div>
  )
}
