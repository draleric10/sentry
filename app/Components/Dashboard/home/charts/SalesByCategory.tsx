import { Chart } from 'primereact/chart';

export default function SalesByCategory() {
    const doughnutData = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };

    const pieOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    return <div className="card">
        <h5>Total Sales by Category</h5>
        <Chart type="doughnut" data={doughnutData} options={pieOptions} style={{ width: '100%' }} />
    </div>

}