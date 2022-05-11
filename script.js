'use strict';
let inp1=$('.inp1');
let inp2=$('.inp2');

$(function(){
    inp1.on({
        'input':function(){
            inp1.css('text-transform','uppercase');        
        }      
    }),
    inp2.on({
        'input':function(){
            inp2.css('text-transform','lowercase');        
        }  
    })
})