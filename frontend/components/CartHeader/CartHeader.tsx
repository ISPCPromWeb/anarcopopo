import styles from "./CartHeader.module.css";


export const CartHeader = () => {
    return (
        <nav className={`${styles.navbar}  navbar-expand-lg bg-transparent`}>
            <div className="container">
                <h2 className={`${styles.h2Cart} align-middle`}> My Pet Tienda</h2>
            </div>
        </nav>
       
);
};