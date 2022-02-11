import React, {Fragment} from 'react';
import Header from './Components/Header';
import CompletePayment from './Components/Layout/CompletePayment';
import PaymentInfo from './Components/Layout/PaymentInfo';
import PurchaseHistory from './Components/Layout/PurchaseHistory';


function App () {
  return ( 
    <Fragment>
      <Header/>
      <PaymentInfo/>
      <PurchaseHistory/>
      <CompletePayment/>
    </Fragment>
  );
}

export default App;