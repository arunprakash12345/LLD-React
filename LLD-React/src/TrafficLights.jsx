import { useEffect, useState } from "react"
import './CSS/traffic.css'
export default function TraffiLights() {
    const [color, setColor] = useState("red");
    const colorObj = {

    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setColor(colorObj[color].next)
        }, colorObj[color].time)
        return () => clearTimeout(timer)
    }, [color]);

    return (
        <>
            <div className="traffic-light-container">
                {
                    Object.keys(colorObj).map((light, index) => {
                        return (
                            <div key={index} className={light === color ? light + " active" : light}></div>
                        )
                    })
                }
            </div>
        </>
    );
}