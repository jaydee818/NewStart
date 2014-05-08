Learning Plan
=============

1. Work through the first four chapters of [Eloquent Javascript](http://eloquentjavascript.net/contents.html)
  - basic syntax of the language
  - function declaration, function passing, local scope of functions, recursions
  - arrays, objects : objects are nothing more than JSON objects, akin to hashes in perl

2. Learn the basics of [Chrome devtools](http://discover-devtools.codeschool.com/)
  - you can actually test the code on interactive console, debug your clientside pages in real-time!
  - chrome devtool is probably worth learning for any web developer

3. Try out the [ChatBuilder](http://chatbuilder.hackreactor.com/)
  - it gives you very good intro to javascript
  - designed to give you hands-on experience with Chrome''s built-in devtools

4. Take the [online course](https://www.edx.org/course/mitx/mitx-6-00-1x-introduction-computer-1498#.U0yb03Wx22g)
  - the concepts covered here will really reinforce your understanding of programming
  - python would be my first choice in languages
  - even if you do web development, you will invariably come across projects in python


Chat Builder Hints : 2014.04.14
===============================

If you look at the source code of the chatbuilder link, you''ll notice that it loads
an external javascript library called `ChatBuilder.js`. That library provides some functions 
you are supposed to figure out how to use.

```{js}
Chat.display()
// This function seems like just a jQuery function to find 'messages' element in the .html file and
// update its contents. It can take either string or an array as an argument.

Chat.fetch()
// Looks like it requires a callback function as an argument. In order to inspect what kind of
// objects you get populated with, you can do the following:

out = undefined
Chat.fetch(function(x) { out = x })

// Notice that I am setting what''s passed into the callback function to a global variable called
// `out`. That way, I can inspect what the object looks like.
```

The challenge is around noticing the arrays that come back, and populate the DOM element 'messages',
with separate line item per item in the array of messages that come back from `Chat.fetch`.


```{js}
document.getElementsByClassName('messages')[0].children[1].innerHTML = "gay jd"

u = document.getElementsByClassName('messages')[0]
u.appendChild(document.createElement("li"))
l = document.createElement("li")
l.innerHTML = "jd stop making your hair gay"
u.appendChild(l)

u.removeChild(u.children[0])

// you need to create a new Element 
for(i=0; i<5; i++) { l = document.createElement("li"); l.innerHTML = "wake up " + i; u.appendChild(l); }

function (list) {
  u = document.getElementsByClassName('messages')[0]
  for(i=0; i<list.length; i++) { 
    l = document.createElement("li"); 
    l.innerHTML = list[i]; 
    u.appendChild(l); 
  }
}
```
