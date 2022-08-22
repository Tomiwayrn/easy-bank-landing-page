import mockup from './images/image-mockups.png';
import MainSection  from './MainSection';
import Articles from './Articles';

export default function Body (){
    return (
        <>
            <div className="intro">
                <img src={mockup} alt="mockups" className='mockups' />
            </div>
            <MainSection />
            <Articles />
                   </>
    )
}