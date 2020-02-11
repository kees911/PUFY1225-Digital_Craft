when counter hits whatever, mousex=this and mousey= that, make that the lineend
line(mouseX, mouseY, mouseX, mouseY);
https://p5js.org/reference/#/p5/mouseX
no bg
do a line without X or Y,
get a start position
have a counter
when counter = ??, change end X and Y
at the same time, beginning x and y for the next line will update
then the counter will add

drawing at a pace example: https://editor.p5js.org/hyershin/sketches/SkG_S5K3W

---

Look up classes + objects

function mouseClicked (){
if 

if mouseX is in the bounds of the message

listener ("click", function {

classes + objects

**Markdown Cheatsheet for GitHub:** https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Parameters= variables you can pass through the f'n
Variables can usually only be used by the f'n they're contained in
Global variables can be set outside and applied anywhere.

Blueprints

**transformations in p5.js:**
* translate: https://p5js.org/reference/#/p5/translate
> push(); pop();
* scale: https://p5js.org/reference/#/p5/scale
* rotate: https://p5js.org/reference/#/p5/rotate

* function myFunction (x,y,angle,itemWidth,itemHeight,r,g,b,a){}

**creating organic shapes by placing vertices**
* samples: https://p5js.org/reference/#/p5/beginShape
```javascript
beginShape();
vertex(0,0);
vertex (100, 100);
vertex (0,100);
vertex (100,0);
endShape();
```
**Using strings to build variables**
```javascript
var color = '"' + rColor + ',' + gColor + ',' + bColor + '"';
print (color)
//this didn't work in context, but something like this
```
---
**printing type**

```javascript
var font = 'comic sans MS';

typo(font, 10, 'hello', 100, 100);

function typo(font, size, message, startX, startY){
textFont(font);
textSize(size);
textAlign(left/right/center);
fill(r,g,b,a);
text('message', startX, startY, endX, endY);
}

function mouseClicked(){
  if (font == 'comic sans MS'){
    font == 'impact';
    } else{
    font = 'comic sans MS'}
}
```
* the space between lines is called leading, as opposed to space between letters which is kerning
