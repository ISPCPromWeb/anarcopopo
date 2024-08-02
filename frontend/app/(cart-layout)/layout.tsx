// import { CartHeader } from "@/components/CartHeader";

const CartLayout = ({ children }: any) => {
  return (
    <>
      {/* <CartHeader /> */}
      <div className="container justify-content-md-center container-md my-5">
        {children}
      </div>
    </>
  );
};

export default CartLayout;
