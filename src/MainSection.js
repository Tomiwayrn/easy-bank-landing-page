import online from './images/icon-online.svg';
import onboarding from './images/icon-onboarding.svg';
import budgeting from './images/icon-budgeting.svg'; import api from './images/icon-api.svg';
// import online from './images/icon-online.svg';

export default function MainSection(){

    return (
        <main>
            <section className='first'>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. 
                    Your Easybank account will be a one-stop-shop 
                     for spending, saving, budgeting, 
                     investing, and much more.
                </p>
                <button className='body-btn'>Request Invite</button>
            </section>

           
                <div className='choose-container'>

                <section className='second'>
                <h1>
Why choose Easybank?
                </h1>
                <p>
                We leverage Open Banking to turn your bank account into your financial hub. Control 
                      your finances like never before.

                </p>
                </section>

                    <section>
                    <img src={online} alt="online-icon" />
                        <h2>Online Banking</h2>
                        <p> Our modern web and mobile applications allow you to keep track of your finances 
                        wherever you are in the world.
                        </p>
                    </section>

                    <section>
                        <img src={budgeting}        alt="budjet-icon" />

                        <h2>Simple Budgeting</h2>
                        <p>
                            See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                        </p>
                    </section>

                    <section>
                    <img src={onboarding} alt="onboarding-icon" />

                        <h2> Fast Onboarding</h2>
                        <p>
                         We don’t do branches. Open your account in minutes online and start taking control 
                          of your finances right away.
                        </p>
                    </section>

                    <section>
                    <img src={api} alt="api-icon" />
                        <h2>Open API</h2>
                        <p>
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                            your money has never been easier.
                         </p>
                    </section>
                    <div>
                        <h2></h2>
                        <p></p>
                    </div>
                              
                </div>
            
 
        </main>
    )
}