import { Link , Outlet} from "react-router-dom";

/**
 * This component renders a page with links to phone and laptop products.
 * It also renders an Outlet for the nested routes.
 */
export default function Products() {
    return (
        <>
            <h2>Products</h2>
            <nav>
                <Link to="phone">Phone</Link> | 
                <Link to="laptop">Laptop</Link> | 
            </nav>

            <Outlet />

            
        </>
    )
}