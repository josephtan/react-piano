/**
 * Created by Joseph Tan on 23/10/2018.
 */
import React, {Component} from "react";
import * as d3 from "d3";
import ReactDOM from "react-dom";

export default class DrawKeyboard extends Component {
        constructor(props){
            super(props);
            this.whiteNote = ".note";
            this.rectX = 0;
            this.rectY = 0;
            this.rectWidth = 80;
            this.rectHeight = 400;
        }
        componentDidMount(){
            let keyboardDivs = ReactDOM.findDOMNode(this.refs.keyboardW);
            this.drawRect(this.whiteNote, keyboardDivs,this.rectX,this.rectY,this.rectWidth,this.rectHeight);
        }
        drawRect(polygonClassName,keyboardDivs){
            let rectSelector = d3.selectAll(polygonClassName).append("svg")
                .attr("width", this.rectWidth)
                .attr("height", this.rectHeight);
            let elementNodes = keyboardDivs.childNodes;
            let elementLength = elementNodes.length, i;
            rectSelector.attr("preserveAspectRatio","none");
            rectSelector.append("defs");
            for(i = 0; i< elementLength; i++){
                elementNodes[i].id = "note-" + i;
            }
            rectSelector.append("g")
                .append("rect")
                .attr("width",this.rectWidth)
                .attr("height",this.rectHeight);
        }
        render(){
          return(
              <div className="holder-keyboard" ref="keyboardW">
                  <div className="note white">
                  </div>
                  <div className="note white">
                  </div>
                  <div className="note white">
                  </div>
                  <div className="note white">
                  </div>
              </div>
          );
        }
}