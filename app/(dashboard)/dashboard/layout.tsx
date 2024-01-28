import './css/dashboard.min.css' //dashboard css file

import NavBar from "@/components/navbar/navbar"
import BorrowersNavbar from "@/components/side-navbar/side-navbar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main>
          <NavBar />
          <div className="dashboard-layout">
            <BorrowersNavbar />
            <main>
              {children}
            </main>
          </div>
        </main>
    )
  }