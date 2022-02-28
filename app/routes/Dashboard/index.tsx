
import BranchesChart from "~/Components/Dashboard/home/charts/BranchesChart"
import SalesByCategory from "~/Components/Dashboard/home/charts/SalesByCategory"
import GrossProfit from "~/Components/Dashboard/home/GrossProfit"
import Growth from "~/Components/Dashboard/home/Growth"
import Revenue from "~/Components/Dashboard/home/Revenue"
import RevenueChart from "~/Components/Dashboard/home/charts/RevenueChart"
import RevenueYtd from "~/Components/Dashboard/home/RevenueYtd"
import TodaySales from "~/Components/Dashboard/home/TodaySales"

export default function Dashboard() {


    return <div>
        <h5>Dashboard</h5>

        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <TodaySales />
            </div>

            <div className="col-12 lg:col-6 xl:col-3">
                <Revenue />
            </div>


            <div className="col-12 lg:col-6 xl:col-3">
                <Growth />
            </div>

            <div className="col-12 lg:col-6 xl:col-3">
                <GrossProfit />
            </div>


            <div className="col-12 lg:col-6 xl:col-3">
                <RevenueYtd />
            </div>

        </div>



        {/* Branches Chart */}
        <div className="grid mt-3">
            <div className="col-12 xl:col-12">
                <BranchesChart />
            </div>
        </div>


        <div className="grid mt-3">

            {/* Revenue Chart */}
            <div className="col-12 xl:col-8">
                <RevenueChart />
            </div>

            {/* Sales by category Chart */}
            <div className="col-12 xl:col-4">
                <SalesByCategory />
            </div>
        </div>


        <div className="grid mt-3">

            {/* Revenue Chart */}
            <div className="col-12 xl:col-3">
                <div className="card">
                    <h5>Activities</h5>
                </div>
            </div>

            {/* Sales by category Chart */}
            <div className="col-12 xl:col-9">

                <div className="card">
                    <h5>Top Selling Products</h5>
                </div>
            </div>
        </div>
    </div>
}