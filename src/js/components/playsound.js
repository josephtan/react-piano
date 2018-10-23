/**
 * Created by Joseph Tan on 23/10/2018.
 */
import React, { Component } from "react";
import {axiosInstance} from "../../axiosOptions";

export default class PlaySound extends Component{
    constructor(props){
        super(props);
        this.state = {soundata:[]};
    }
    componentDidMount(){
        axiosInstance.get("sounddata.json").then((res)=> {
            this.setState({
                soundata : res.data
            });
        }).catch((err)=>{
            console.log(err);
        });
    }
    render(){
        const audioList = this.state.soundata.map((items) => {
            return( <audio key={items.index} id={"note"+items.index} controls ref={items.index} src={items.src}>
                Your browser does not support the <code>audio</code> element.
            </audio>);
        });
        return(<div>
            <div className="play-sound">
                <h2>sound test</h2>
                {audioList}
            </div>
        </div>);
    }
}