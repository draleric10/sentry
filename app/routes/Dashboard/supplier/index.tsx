import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useOutletContext, ContextType } from "remix";

export default function Supplier() {
    const { suppliers } = useOutletContext<ContextType>()
   
    return <div>
        <div className="grid table-demo">
            <div className="col-12">
                <div className="card">
                    <h5>Suppliers </h5>
                    <DataTable value={suppliers} scrollable scrollHeight="400px" loading={false} scrollDirection="both" className="mt-3">
                        <Column field="ref_cd" header="Code" style={{ minWidth: '12rem' }} />
                        <Column field="ref_nm" header="Name" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
}