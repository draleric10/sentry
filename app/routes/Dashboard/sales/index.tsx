import { useOutletContext } from "remix"


export default function Sales() {
    const data = useOutletContext<any>();
    console.log('debug est:', data);
    
    return <div>
        {data.test}
        <h1>Sales Page</h1>
    </div>
}