import '../assets/css/server.css'
import ProgressBar from "@ramonak/react-progress-bar";

interface IServer {
    image:string,
    name:string,
    lastwipe:string,
    players:number,
    maxplayers:number,
    wipe:string,
    serverip:string,
}

export default function Server(props: IServer) {


    const handlePop = () => {
        const sum = (100 * props.players) / props.maxplayers
        return sum
    }

    return (
        <div className='serverContainer'>
            <img src={props.image} />
            <h3>{props.name}</h3>
            <p>{props.wipe}</p>
            <div className='infoContainer'>
                <p>LAST WIPE</p>
                <p>{props.lastwipe}</p>
            </div>

            <div className='infoContainer'>
                <p>PLAYERS</p>
                <p>{props.players}/{props.maxplayers}</p>
            </div>
            <ProgressBar
                className="wrapper"
                barContainerClassName="container"
                isLabelVisible={false}
                bgColor={"#F9B811"}
                width={handlePop() + "%"}
                completed={handlePop()} />
            <button><a href={props.serverip}>CONECTAR</a></button>
        </div>
    )
}