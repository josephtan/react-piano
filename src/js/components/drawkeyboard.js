/**
 * Created by Joseph Tan on 23/10/2018.
 */
import React, {Component} from "react";
import * as d3 from "d3";

export default class DrawKeyboard extends Component {
        constructor(props){
            super(props);
            this.keyboard = ".holder-keyboard";
            this.noteWhite = 52;
            this.noteBlack = 36;
        }
        componentDidMount(){
            this.drawRect(this.keyboard);
        }
        drawRect(polygonClassName){
            let keyboard = d3.select(polygonClassName);
            let i;

            /** #### Draw white keys #### **/
            for (i =1; i <= this.noteWhite; i++){
                /** #### On first count add div keyboard-top #### **/
                    if(i === 1){
                        keyboard.append("div").attr("class","keyboard-top")
                    }
                    if( i <= (this.noteWhite/2)){
                        d3.select(".keyboard-top").append("svg")
                            .attr("id","note-white-"+ i)
                            .attr("preserveAspectRatio","none")
                            .append("rect")
                            .attr("class","note white");
                    }
                    /** #### On 26th count add div keyboard-bottom #### **/
                    if(i === (this.noteWhite/2)){
                        keyboard.append("div").attr("class","keyboard-bottom")
                    }
                    if(i > (this.noteWhite/2)){
                        d3.select(".keyboard-bottom").append("svg")
                            .attr("id","note-white-"+ i)
                            .attr("preserveAspectRatio","none")
                            .append("rect")
                            .attr("class","note white");
                    }
            }
        }
        render(){
          return(
              <div className="holder-keyboard" ref="keyboardW">
              </div>
          );
        }
}