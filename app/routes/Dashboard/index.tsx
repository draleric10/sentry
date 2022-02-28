
import GrossProfit from "~/Components/Dashboard/home/GrossProfit"
import Growth from "~/Components/Dashboard/home/Growth"
import Revenue from "~/Components/Dashboard/home/Revenue"
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

          
            
        </div>
    </div>
}