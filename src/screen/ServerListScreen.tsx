import { useState } from "react";
import Navbar from "../components/Navbar";
import Server from "../components/Server";
import '../assets/css/servers-screen.css'

export default function ServerListScreen(){

    const [servers, setServers] = useState(["https://media.discordapp.net/attachments/1124550037997887498/1125671400758333491/max4.jpg","https://media.discordapp.net/attachments/1124550037997887498/1125891744366612621/solo-duo.jpg"]);

    return (
        <div className="serverListScreen"> 
            <Navbar />
            <section className="sectionContainer">
                <div className="welcomeContainer">
                    <h1>NUESTROS SERVIDORES</h1>
                </div>
                <div className="serverList">
                <Server image={servers[0]} name="VANILLA SQUAD" serverip="steam://connect/127.0.0.1:22222" wipe="WIPE SEMANAL" lastwipe="24 HORAS" players={100} maxplayers={150} />
                <Server image={servers[1]} name="VANILLA SOLO-DUO" serverip="steam://connect/127.0.0.1:22222" wipe="WIPE SEMANAL" lastwipe="30 MIN" players={60} maxplayers={100} />
                <Server image={servers[1]} name="VANILLA SOLO-DUO" serverip="steam://connect/127.0.0.1:22222" wipe="WIPE SEMANAL" lastwipe="30 MIN" players={60} maxplayers={100} />
                <Server image={servers[1]} name="VANILLA SOLO-DUO" serverip="steam://connect/127.0.0.1:22222" wipe="WIPE SEMANAL" lastwipe="30 MIN" players={60} maxplayers={100} />
                </div>
            </section>
        </div>
    )
}