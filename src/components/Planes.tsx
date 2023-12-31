
import TarjetaPlanes from './TarjetaPlanes'
import freePlan from '../../public/free-plan.svg';
import standardPlan from '../../public/standard-plan.svg';
import premiumPlan from '../../public/premium-plan.svg'
export const Planes = () => {
    return (
        <div className=' lg:px-24 2xl:px-[350px] bg-blue-300 py-8 mt-16 ' id='precios'>
            <div className="text-center place-items-center ">
                <div className="w-[80%] m-auto">
                    <h2 className="text-[30px] lg:text-[36px]"><b>Choose Your Plan</b></h2>
                </div>
                <div className="w-[80%]  m-auto">
                    <p className='text-[20px] lg:text-[20px]'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>
            </div>
            <div className=' hidden lg:flex  mt-8 place-content-around'>

                <TarjetaPlanes imagen={freePlan} nombree='Free Plan' item1='Unlimited Bandwitch' item2='Encrypted Connection' item3='Yes Traffic Logs' item4='Works on All Divices' />
                <TarjetaPlanes imagen={standardPlan} nombree='Standard Plan' item1='Unlimited Bandwitch' item2='Encrypted Connection' item3='Yes Traffic Logs' item4='Works on All Divices' item5='Connect Anywhere' precio={9} />
                <TarjetaPlanes imagen={premiumPlan} nombree='Premium Plan' item1='Unlimited Bandwitch' item2='Encrypted Connection' item3='Yes Traffic Logs' item4='Works on All Divices' item5='Connect Anywhere' item6='Get New Features' precio={12} />

            </div>
            <div className="flex flex-row lg:hidden  mt-8 ">
                <div className="basis-1/10 "></div>
                <div className="basis-8/10 place-content-around">
                    <TarjetaPlanes imagen={freePlan} nombree='Free Plan' item1='Unlimited Bandwitch' item2='Encrypted Connection' item3='Yes Traffic Logs' item4='Works on All Divices' />
                    <TarjetaPlanes imagen={standardPlan} nombree='Standard Plan' item1='Unlimited Bandwitch' item2='Encrypted Connection' item3='Yes Traffic Logs' item4='Works on All Divices' item5='Connect Anywhere' precio={9} />
                    <TarjetaPlanes imagen={premiumPlan} nombree='Premium Plan' item1='Unlimited Bandwitch' item2='Encrypted Connection' item3='Yes Traffic Logs' item4='Works on All Divices' item5='Connect Anywhere' item6='Get New Features' precio={12} />
                </div>
                <div className="basis-1/10 "></div>
            </div>
        </div>
    )
}
