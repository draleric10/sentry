
import { useOutletContext, ContextType } from "remix";
import { calculateRevenueSinceLastMonth } from '~/helpers/sales';

export default function Revenue() {
    const { salesSummary } = useOutletContext<ContextType>()
    const revenueSinceLastMonth = calculateRevenueSinceLastMonth(salesSummary)

    return (<div className="card mb-0">
        <div className="flex justify-content-between mb-3">
            <div>
                <span className="block text-500 font-medium mb-3">Revenue</span>
                <div className="text-900 font-medium text-xl">{revenueSinceLastMonth}</div>
            </div>
            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-money-bill text-orange-500 text-xl" />
            </div>
        </div>
        <span className="text-500">since last month</span>
    </div>)
}