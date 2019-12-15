/**
 * Created by Joseph Tan on 23/10/2018.
 */
import React, { Component } from "react";
import * as d3 from "d3";
import axios from "axios";
import {axiosInstance} from "../../axiosOptions";

export default class PlaySound extends Component{
    constructor(props){
        super(props);
        this.state = {whitekeydata:[], blackkeydata:[]};
        this.noteWhite = 52;
        this.noteBlack = 36;
    }
    componentDidMount(){
        axios.all([axiosInstance.get("whitekeysound.json"), axiosInstance.get("blackkeysound.json")])
            .then(axios.spread((whitekeyres, blackkeyres) => {
            this.setState({
                whitekeydata : whitekeyres.data,
                blackkeydata : blackkeyres.data
            });

        })).catch((err)=>{
            console.log(err);
        });
        this.audioList();
    }
    audioList = () => {

        const whiteAudioNotes = this.state.whitekeydata.map((whitenotes) =>{
            let audioTag = document.createElement("audio");
            audioTag.setAttribute("id", "audiowhite-" + whitenotes.index);
            audioTag.type="audio/mpeg";
            audioTag.src = whitenotes.src;
            return (audioTag);
        });
        const blackAudioNotes = this.state.blackkeydata.map((blacknotes) =>{
            let audioElement = document.createElement("audio");
            audioElement.setAttribute("id", "audioblack-" + blacknotes.index);
            audioElement.type="audio/mpeg";
            audioElement.src = blacknotes.src;
            return (audioElement);
        });

           for (let i = 1; i < this.noteWhite +1; i++){
               /** Somehow the on. is d3's global even listener and will conflict if used in another component in React **/
               d3.select("#note-white-"+i).on("mousedown", function(){
                   d3.select("#note-white-"+i).attr("fill","#e3e1d4");
                   whiteAudioNotes[i-1].play();
                   console.log(whiteAudioNotes[i-1]);
               });
               d3.select("#note-white-"+i).on("mouseup",function(){
                   d3.select("#note-white-"+i).attr("fill","#fffff0");
                   whiteAudioNotes[i-1].currentTime=0;
               });

           }
          for (let j = 1; j <this.noteBlack + 1; j++){
               d3.select("#note-black-"+j).on("mousedown", function(){
                   d3.select("#note-black-"+j).attr("fill","#000000");
                   blackAudioNotes[j-1].play();
                   console.log(blackAudioNotes[j-1]);
               });
               d3.select("#note-black-"+j).on("mouseup",function(){
                   d3.select("#note-black-"+j).attr("fill","#222222");
                   blackAudioNotes[j-1].currentTime=0;
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