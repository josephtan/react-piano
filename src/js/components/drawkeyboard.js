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
            this.keyWidth = 38;
            this.blackKeyW = 20;
            this.keyHeight = 298;
        }
        componentDidMount(){
            this.drawKeys(this.keyboard);
        }
        drawKeys(polygonClassName){
            let keyboard = d3.select(polygonClassName);
            let wk,bk,keyCount = 1, blackKeyCount = 1;
            let xPlot,xPlotB,xPlotC,xPlotD;
            /** #### Draw white keys #### **/
            for (wk =1; wk <= this.noteWhite; wk++){
                /** #### On first count add div keyboard-top #### **/
                    if(wk === 1){
                        keyboard.append("div").attr("class","keyboard-top")
                            .attr("width",this.keyWidth * (this.noteWhite/2))
                            .attr("height",this.keyHeight + 2)
                            .append("svg")
                            .attr("id","ReactPiano")
                            .attr("width",this.keyWidth * (this.noteWhite/2) + 2)
                            .attr("height",this.keyHeight + 2)
                            .attr("preserveAspectRatio","none")
                            .append("g").attr("class","white-keys");
                    }
                    if( wk <= (this.noteWhite/2)){
                        d3.select("#ReactPiano .white-keys")
                            .append("rect").attr("id","note-white-"+ wk)
                            .attr("class","note white")
                            .attr("width",this.keyWidth)
                            .attr("height",this.keyHeight)
                            .attr("x",(wk * this.keyWidth) - this.keyWidth).attr("y",0);
                    }
                    /** #### On 26th count add div keyboard-bottom #### **/
                    if(wk === (this.noteWhite/2)){
                        keyboard.append("div")
                            .attr("class","keyboard-bottom")
                            .attr("height",this.keyHeight)
                            .append("svg")
                            .attr("id","ReactPiano2")
                            .attr("width",this.keyWidth * (this.noteWhite/2) + 2)
                            .attr("height",this.keyHeight + 2)
                            .attr("preserveAspectRatio","none")
                            .append("g").attr("class","white-keys");
                    }
                     /** #### If white keys more than 31 draw white keys to keyboard-bottom #### **/
                    if(wk > (this.noteWhite/2)){

                        d3.select("#ReactPiano2 .white-keys")
                            .append("rect")
                            .attr("id","note-white-"+ wk)
                            .attr("class","note white")
                            .attr("width",this.keyWidth)
                            .attr("height",this.keyHeight)
                            .attr("x",(keyCount * this.keyWidth) - this.keyWidth).attr("y",0);
                        keyCount ++;
                    }
            }

            for(bk = 1; bk <= this.noteBlack; bk++){
                    if(bk === 1){
                        d3.select(".keyboard-top #ReactPiano")
                            .append("g").attr("class","black-keys")
                            .attr("transform","translate(28,0.0)");
                    }
                    if(bk <= 18){
                         xPlot = ( bk * this.blackKeyW);
                         xPlotB = ((bk * this.blackKeyW) - 10);

                        d3.select("#ReactPiano .black-keys")
                            .append("rect")
                            .attr("id","note-black-"+ bk)
                            .attr("class","note black")
                            .attr("stroke","#000000")
                            .attr("width", this.blackKeyW)
                            .attr("height",this.keyHeight/2);
                            if(bk === 1){
                            d3.select("#note-black-1").attr("x", 0).attr("y",0);
                            }
                            if(bk === 2){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 36).attr("y",0);
                            }
                            if(bk === 3){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 56).attr("y",0);
                            }
                            if(bk > 3 && bk < 7){
                                d3.select("#note-black-"+bk).attr("x",(xPlot + xPlotB) + 38).attr("y",0);
                            }
                            if(bk === 7){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 200).attr("y",0);
                            }
                            if(bk === 8){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 220).attr("y",0);
                            }
                            if(bk === 9){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 276).attr("y",0);
                            }
                            if(bk > 9){
                                d3.select("#note-black-"+bk).attr("x",(xPlot+ xPlot) + 94).attr("y",0);
                            }
                            if(bk === 12){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 366).attr("y",0);
                            }
                            if(bk === 13){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 386).attr("y",0);
                            }
                            if(bk === 14){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 442).attr("y",0);
                            }
                            if(bk >14){
                                d3.select("#note-black-"+bk).attr("x",(xPlot+ xPlot) + 160).attr("y",0);
                            }
                            if(bk === 17){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 534).attr("y",0);
                            }
                            if(bk === 18){
                                d3.select("#note-black-"+bk).attr("x",xPlot + 552).attr("y",0);
                            }
                    }
                    if(bk === 19){
                        d3.select(".keyboard-bottom #ReactPiano2")
                            .append("g").attr("class","black-keys")
                            .attr("transform","translate(28,0.0)");
                    }
                    if(bk > 18){
                        xPlotC = (blackKeyCount * this.blackKeyW);
                        xPlotD = ((blackKeyCount * this.blackKeyW) - 10);
                        d3.select("#ReactPiano2 .black-keys")
                            .append("rect")
                            .attr("id","note-black-"+ bk)
                            .attr("class","note black")
                            .attr("width", this.blackKeyW)
                            .attr("height", this.keyHeight/2);

                        if(bk === 19){
                            d3.select("#note-black-1").attr("x", "0").attr("y","0");
                        }
                        if(bk === 20){
                            d3.select("#note-black-"+bk).attr("x",xPlotC).attr("y",0);
                        }
                        if(bk === 21){
                            d3.select("#note-black-"+bk).attr("x",xPlotC + 16).attr("y",0);
                        }
                        if(bk > 21 && bk < 24){
                            d3.select("#note-black-"+bk).attr("x",(xPlotC + xPlotD) + 2).attr("y",0);
                        }
                        if(bk === 24){
                            d3.select("#note-black-"+bk).attr("x",xPlotC + 146).attr("y",0);
                        }
                        if(bk === 25){
                            d3.select("#note-black-"+bk).attr("x",xPlotC + 164).attr("y",0);
                        }
                        if(bk === 26){
                            d3.select("#note-black-"+bk).attr("x",xPlotC + 180).attr("y",0);
                        }
                        if(bk > 26){
                            d3.select("#note-black-"+bk).attr("x",(xPlotC + xPlotC) + 58).attr("y",0);
                        }
                        if(bk === 29){
                            d3.select("#note-black-"+bk).attr("x",xPlotC + 310).attr("y",0);
                        }
                        if(bk > 29){
                           // d3.select("#note-black-"+bk).attr("x",xPlotC + 330).attr("y",0);
                           d3.select("#note-black-"+bk).attr("x",(xPlotC + xPlotD) + 98).attr("y",0);
                        }
                        if(bk === 32){
                            d3.select("#note-black-"+bk).attr("x",xPlotC + 406).attr("y",0);
                        }
                        if(bk === 33){
                            d3.select("#note-black-"+bk).attr("x",xPlotC + 422).attr("y",0);
                        }
                        if(bk > 33){
                            d3.select("#note-black-"+bk).attr("x",(xPlotC + xPlotD) + 184).attr("y",0);
                        }

                        if(bk === 34){
                            d3.select("#note-black-"+bk).attr("x",xPlotC + 476).attr("y",0);
                        }
                        if(bk > 34){
                            d3.select("#note-black-"+bk).attr("x",(xPlotC + xPlotD) + 164).attr("y",0);
                        }
                        blackKeyCount ++;
                        console.log(blackKeyCount);
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