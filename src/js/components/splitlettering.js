/**
 * Created by Joseph Tan on 26/10/2018.
 */
import React, {Component} from "react";
import Anime from "react-anime";

export default class SplitLettering extends Component{
         constructor(props){
             super(props);
             this.title = "React Piano";
             this.aniOpacity = [0,1];
             this.scaleX = [4,1];
         }

        spanLettering = (string) =>{
            let stringArray = string.split("");
            const letters = stringArray.map((text,i)=>{
                if(text.match(/\s+/g) != null){
                    return (<span key={i} className="letter">&nbsp;</span>);
                }else{
                    return (<span key={i} className="letter">{text}</span>);
                }

            });
            return letters;
        };

        render(){
             return(
                 <div>
                     <Anime loop={true} scaleX={this.scaleX} opacity={this.aniOpacity} easing={"easeOutExpo"} duration={950} direction="alternate" delay={(el, index) => index * 80} >
                     {this.spanLettering(this.title)}
                     </Anime>
                 </div>
             )
        }
}
