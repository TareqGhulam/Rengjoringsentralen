
import './App.css';
import React, {useEffect} from 'react'

import {Route, Switch, Redirect ,} from 'react-router-dom'

import {useHistory} from 'react-router-dom'



import landingpage from './pages/landingpage/home'
import Services from './pages/landingpage/services'
import Team from './pages/landingpage/Team'
import Footer from './pages/landingpage/footer'
import LandingPageLayout from './pages/Layout/LandingPageLayout'
import LandingReviews from './pages/landingpage/reviews'
import { useTranslation } from 'react-i18next';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
function App(props) {
  const { t, i18n } = useTranslation();
 

   
  let route =   (
    <div>

      <Switch>
        
        <LandingPageLayout>
        <Route path ="/team" exact component={Team}/>
         <Route path ="/service" exact component={LandingReviews}/>
          <Route path ="/services" exact component={Services}/>
          <Route path ="/" exact component={landingpage}/>
          <Redirect to="/" exact/>
         <Footer/>
      </LandingPageLayout>
      </Switch>
    </div>
  )


  return (
    <div className="App">
      
    
      {route}
{/* 
      <MessengerCustomerChat
      pageId="266957233998984"
      appId="824365124797356"
      // htmlRef="<REF_STRING>"
    /> */}
    </div>
  );
}


export default App;
