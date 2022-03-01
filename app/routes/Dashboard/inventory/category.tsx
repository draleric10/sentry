import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useOutletContext, ContextType } from "remix";

export default function Category() {
   
    return <div>
        <div className="grid table-demo">
            <div className="col-12">
                <div className="card">
                    <h5>Categories </h5>
                  
                </div>
            </div>
        </div>
    </div>
}