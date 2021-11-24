
function Gradient(t,r,i){this.ctx=t,this.width=r,this.height=i,this.colorStops=[],this.currentStop=0}function lerp(t,r,i){return(1-i)*t+i*r}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var Anim={duration:4e3,interval:10,stepUnit:1,currUnit:0};Gradient.prototype.addStop=function(t,r){var i={pos:t,colors:r,currColor:null};this.colorStops.push(i)},Gradient.prototype.updateStops=function(){var t=Anim.duration/Anim.interval,r=Anim.stepUnit/t;stopsLength=this.colorStops[0].colors.length-1;for(var i=0;i<this.colorStops.length;i++){var o,n,e,s,h=this.colorStops[i],a=h.colors[this.currentStop];o=this.currentStop<stopsLength?h.colors[this.currentStop+1]:h.colors[0],n=Math.floor(lerp(a.r,o.r,Anim.currUnit)),e=Math.floor(lerp(a.g,o.g,Anim.currUnit)),s=Math.floor(lerp(a.b,o.b,Anim.currUnit)),h.currColor="rgb("+n+","+e+","+s+")"}Anim.currUnit>=1&&(Anim.currUnit=0,this.currentStop<stopsLength?this.currentStop++:this.currentStop=0),Anim.currUnit+=r},Gradient.prototype.draw=function(){for(var t=ctx.createLinearGradient(0,this.width,this.height,0),r=0;r<this.colorStops.length;r++){var i=this.colorStops[r],o=i.pos,n=i.currColor;t.addColorStop(o,n)}this.ctx.clearRect(0,0,this.width,this.height),this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.width,this.height)};var $width,$height,gradient,canvas=document.getElementById("gradient-overlay"),ctx=canvas.getContext("2d"),stopAColor=[{r:"255",g:"0",b:"0"},{r:"0",g:"0",b:"255"},{r:"0",g:"255",b:"255"},{r:"255",g:"255",b:"0"},{r:"255",g:"0",b:"255"}],stopBColor=[{r:"255",g:"0",b:"255"},{r:"255",g:"0",b:"0"},{r:"0",g:"0",b:"255"},{r:"0",g:"255",b:"255"},{r:"255",g:"255",b:"0"}],updateUI=function(){$width=$(window).width(),$height=$(window).height(),canvas.width=$width,canvas.height=$height,gradient=new Gradient(ctx,canvas.width,canvas.height),gradient.addStop(0,stopAColor),gradient.addStop(1,stopBColor)};$(function(){updateUI(),$(window).resize(function(){updateUI()}),function t(){requestAnimFrame(t),gradient.updateStops(),gradient.draw()}()});