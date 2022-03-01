import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useOutletContext, ContextType } from "remix";

export default function Inventory() {
    
    return <div>
        <div className="grid table-demo">
            <div className="col-12">
                <div className="card">
                    <h5>Items </h5>
                    <DataTable value={[]} scrollable scrollHeight="400px" loading={false} scrollDirection="both" className="mt-3">
                        <Column field="ref_cd" header="Code" style={{ minWidth: '12rem' }} />
                        <Column field="ref_nm" header="Name" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="Category" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="Supplier" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="Cost_AM" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="Cost_PM" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="SC_YN" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="Image" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="Created At" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="Created Id No." filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="Updated At" filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="ref_nm" header="Updated Id No." filter filterPlaceholder="Search by name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
}