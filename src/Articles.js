import currency from './images/image-currency.jpg';
import confetti from './images/image-confetti.jpg';
import plane from './images/image-plane.jpg';
import resturant from './images/image-restaurant.jpg';

export default function Articles(){
    return(
        <>        <div className="articles-container">
            <h1>Latest Articles</h1>
            <article>
                <img src={currency} alt="currency" />
                <h5>By Claire Robinson</h5>
                <h2>
                    <a href='#'>
                    Receive money in any currency with nofees 
                
                    </a>
                
                </h2>
                    <p> 
                    The world is getting smaller and we’re becoming more mobile. So why should you be 
                forced to only receive money in a single …
                </p>
            </article>

            <article>
                <img src={resturant} alt="resturant" />
                <h5>By Wilson Hutton</h5>
                
                 <h2>
                     <a href='#'>
                           Treat yourself without worrying about money
                      </a>
                </h2>
                    
                <p>    
                    Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …
                </p>
            </article>

            <article>
                <img src={plane} alt="plane" />
                <h5>By Wilson Hutton</h5>
                
                    <h2>
                        <a href='#'>
                        Take your Easybank card wherever you go
                        </a>
                        
                    </h2>               
                    <p>
                         We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                         while you’re abroad. We’ll even show you …
                    </p>
            </article>

            <article>
                <img src={confetti} alt="confetti" />
                <h5>By Claire Robinson</h5>
              
                        <h2>
                            <a href='#'>
                            Our invite-only Beta accounts are  now live!

                            </a>
                                                                       </h2>
                   <p>
                         After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                     It’s easy to request an invite through the site ...
                </p>
            </article>
        </div>
        </>

    )
} 