import { Chart } from 'primereact/chart';
import { calculateRevenueLastWeek, calculateRevenueCurrentWeek } from '~/helpers/sales';
import { useOutletContext, ContextType } from "remix";

export default function RevenueChart() {
    const { salesSummary } = useOutletContext<ContextType>()
    const revenueLastWeek = calculateRevenueLastWeek(salesSummary)
    const revenueCurrentWeek = calculateRevenueCurrentWeek(salesSummary)

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: '#2f4860',
                borderColor: '#2f4860',
                tension: .4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: '#00bb7e',
                borderColor: '#00bb7e',
                tension: .4
            }
        ]
    };

    const lineOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef',
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef',
                }
            },
        }
    };

    return <div className="card">
        <h5>Revenue</h5>
        <div className="grid mb-2">
            <div className="col-6 text-center">
                <p>Current Week</p>
                <b>{revenueCurrentWeek}</b>
            </div>
            <div className="col-6 text-center">
                <p>Previous Week</p>
                <b>{revenueLastWeek}</b>
            </div>
        </div>

        <Chart type="line" data={lineData} options={lineOptions} />
    </div>

}