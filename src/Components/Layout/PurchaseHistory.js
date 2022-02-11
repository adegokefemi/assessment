import classes from './PurchaseHistory.module.css';

const PurchaseHistory = () => {
    return (
        <div class="container">
            <div className="flex flex-column pt-3">
                <div className={classes.purchase}>
                    <div className="flex">
                        <h4 className="m-0">Subtotal</h4>
                        <span><strong>#2,497.00</strong></span>
                    </div>
                    <div className="flex">
                        <h4 className="m-0">Estimated TAX</h4>
                        <span><strong>#119.64</strong></span>
                    </div>
                    <div className="flex">
                        <h4 className="m-0">Promotional Code:Z4KXLM94</h4>
                        <span><strong>#-60.00</strong></span>
                    </div>
            </div>

            <hr className="hr"/> 
        </div>
        </div>

    );
};

export default PurchaseHistory;