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

        const audioNotes = this.state.soundata.map((notes) =>{
            let audioTag = document.createElement("audio");
            audioTag.setAttribute("id", "audio-" + notes.index);
            audioTag.type="audio/mpeg";
            audioTag.src = notes.src;
            return (audioTag);
        });

           for (let i=0; i < this.noteWhite; i++){
               /** Somehow the on. is d3's global even listener and will conflict if used in another component in React **/
               d3.select("#note-white-"+i).on("mousedown", function(){
                   d3.select("#note-white-"+i).attr("fill","#e3e1d4");
                   audioNotes[i].play();
                   console.log(audioNotes[i]);
               });
               d3.select("#note-white-"+i).on("mouseup",function(){
                   d3.select("#note-white-"+i).attr("fill","#fffff0");
                   audioNotes[i].currentTime=0;
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