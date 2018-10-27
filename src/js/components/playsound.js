/**
 * Created by Joseph Tan on 23/10/2018.
 */
import React, { Component } from "react";
import * as d3 from "d3";
import {axiosInstance} from "../../axiosOptions";

export default class PlaySound extends Component{
    constructor(props){
        super(props);
        this.state = {soundata:[]};
        this.noteWhite = 52;
        this.noteBlack = 36;
    }
    componentDidMount(){
        axiosInstance.get("sounddata.json").then((res)=> {
            this.setState({
                soundata : res.data
            });
        }).catch((err)=>{
            console.log(err);
        });
        this.audioList();
    }
    audioList = () => {
        let audioTag = document.createElement("audio");
        audioTag.src ="./audio/note1o.mp3";
        audioTag.type="audio/mpeg";
           for (let i =0; i < this.noteWhite; i++){
               /** Somehow the on. is d3's global even listener and will conflict if used in another component in React **/
               d3.select("#note-white-"+i).on("mousedown", function(){
                   audioTag.play();
                   d3.select("#note-white-"+i).attr("fill","#e3e1d4");
               });
               d3.select("#note-white-"+i).on("mouseup",function(){
                   d3.select("#note-white-"+i).attr("fill","#fffff0");
                   audioTag.currentTime=0;
               });
            }
       };
    render(){
        return(<div>
            <div className="play-sound">
                {this.audioList()}
            </div>
        </div>);
    }
}