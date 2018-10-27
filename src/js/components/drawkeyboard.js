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
            this.state = {active:this.props.active}
        }
        componentDidMount(){
            this.drawKeys(this.keyboard,this.state.active);
        }
        clickEvent = () =>{
       //     this.setState({active:active})
           // console.log("clickEvent function");
            //console.log(this.state);
        };
        /**------------------------------------**\
          Draw keys method
        \**------------------------------------**/
        drawKeys = (polygonClassName,active) => {
            let that = this;
            let keyboard = d3.select(polygonClassName);
            let wk,bk,keyCount = 1, blackKeyCount = 1;
            let xPlot,xPlotB,xPlotC,xPlotD;
            /**------------------------------------**\
             Define white keyboard structure function
            \**------------------------------------**/
          const  defineWhiteKeyboard = (keyboard,keyClass,keyWidth,keyHeight,keyType,svgID,gClass) => {
                keyboard.append("div").attr("class",keyClass)
                    .attr("width",keyWidth * (keyType/2))
                    .attr("height",keyHeight + 2)
                    .append("svg")
                    .attr("id",svgID)
                    .attr("width",keyWidth * (keyType/2) + 2)
                    .attr("height",keyHeight + 2)
                    .attr("preserveAspectRatio","none")
                    .append("g").attr("class",gClass);
            };
            /**------------------------------------**\
             Define black keyboard structure function
            \**------------------------------------**/
          const defineBlackKeyboard =(idSelector,gClass,translate) =>{
              d3.select(idSelector)
                  .append("g").attr("class",gClass)
                  .attr("transform",translate);
          };
             /**------------------------------------**\
                 Draw white keys function
             \**------------------------------------**/
          const createWhiteKeys = (idSelector,keyType,keyCount,keyClass,keyWidth,keyHeight) =>{
                d3.select(idSelector)
                    .append("rect")
                    .attr("id","note-white-"+keyType)
                    .attr("class",keyClass)
                    .attr("width",keyWidth)
                    .attr("height",keyHeight)
                    .attr("fill","#fffff0")
                    .attr("stroke","#000");
                    if(keyCount === 0){
                        d3.select("#note-white-"+keyType).attr("x",(keyType * keyWidth) - keyWidth).attr("y",0);
                    }else{
                        d3.select("#note-white-"+keyType).attr("x",(keyCount * keyWidth) - keyWidth).attr("y",0);
                    }
            };
             /**------------------------------------**\
               Draw black keys function
             \**------------------------------------**/
            const createBlackKeys = (selectorID,noteClass,keyType,keyWidth,keyHeight) =>{
                d3.select(selectorID)
                    .append("rect")
                    .on("mousedown", function() {
                        that.clickEvent(); /** execute clickEvent **/
                        d3.select("#note-black-"+keyType).attr("fill","#000");
                     }).on("mouseup",function(){
                         d3.select("#note-black-"+keyType).attr("fill","#444");
                     })
                    .attr("id","note-black-"+ keyType)
                    .attr("class",noteClass)
                    .attr("stroke","#000")
                    .attr("fill","#444")
                    .attr("width", keyWidth)
                    .attr("height",keyHeight/2);
            };
            /**------------------------------------**\
                Draw white keys loop
             \**------------------------------------**/
            for (wk =1; wk <= this.noteWhite; wk++){
                    if(wk === 1){
                        defineWhiteKeyboard(keyboard,"keyboard-top",this.keyWidth,this.keyHeight,this.noteWhite,"svg-keyboard-top","white-keys");
                    }

                    if( wk <= (this.noteWhite/2)){
                        createWhiteKeys("#svg-keyboard-top .white-keys",wk,0,"note white",this.keyWidth,this.keyHeight);
                    }
                    if(wk === (this.noteWhite/2)){
                        defineWhiteKeyboard(keyboard,"keyboard-bottom",this.keyWidth,this.keyHeight,this.noteWhite,"svg-keyboard-btm","white-keys");
                    }
                    if(wk > (this.noteWhite/2)){
                        createWhiteKeys("#svg-keyboard-btm .white-keys",wk,keyCount,"note white", this.keyWidth,this.keyHeight);
                        keyCount ++;
                    }
            }
            /**------------------------------------**\
                 Draw black keys loop
             \**------------------------------------**/
            for (bk = 1; bk <= this.noteBlack; bk++){
                    if(bk === 1){
                        defineBlackKeyboard(".keyboard-top #svg-keyboard-top","black-keys","translate(28,0.0)");
                    }
                    if(bk <= 18){
                         xPlot = ( bk * this.blackKeyW);
                         xPlotB = ((bk * this.blackKeyW) - 10);
                        createBlackKeys("#svg-keyboard-top .black-keys","note black",bk,this.blackKeyW,this.keyHeight);
                        /**------------------------------------**\
                            Add horizontal black key spacing according to key number
                         \**------------------------------------**/
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
                        defineBlackKeyboard(".keyboard-bottom #svg-keyboard-btm","black-keys","translate(28,0.0)");
                    }
                    if(bk > 18){
                        xPlotC = (blackKeyCount * this.blackKeyW);
                        xPlotD = ((blackKeyCount * this.blackKeyW) - 10);

                        createBlackKeys("#svg-keyboard-btm .black-keys","note black",bk,this.blackKeyW,this.keyHeight);

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
                    }
            }
        };

        render(){
          return(
              <div className="holder-keyboard">
                  <p>Click on the respective keys to play notes. Note: Currently the piano is not responsive as its difficult to implement an 88 keyboard to small screens and due to the x positioning within the draw loop.</p>
              </div>
          );
        }
}