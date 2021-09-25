//script.js
c=new Array(10);
for ( var i = 0; i < c.length; ++i )
	{   c[i]=window.prompt("enter  2 digit no to find largest " +i);  }


c.sort();

c.reverse();
for ( var i = 0; i < 2; ++i ) 
	{  document.write(c[i]+"<br>");}