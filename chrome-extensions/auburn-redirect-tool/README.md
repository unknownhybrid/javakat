ART (Auburn Redirect Tool)
=
Author/Copyright: Jake Harris (javakatdesign@gmail.com)

ART allows for use of simple, shorthand pseudo-domains in frequent
use by the CWS team. It makes visiting the web apps we develop much more intuitive, since now we can type their
names the same way we speak them.


Table of Contents:
-
1. Use and Features
2. Known Errors and Bugs
3. Todo List


1. Use and Features
-
ART is an extension to make our lives just that little bit easier here at CWS. Now, visiting sites on our most
frequented domains is simple and intuitive. We can type them much like we speak them!
If you want someone to visit a site, for debugging purposes or what-have-you, you might say something like,
"Go to domain, containing folder, project name," or, "Go to domain, project name."
Now they can visit that site the same way!

Example:
Say we had a subdomain "cats" that demanded the secure HTTP protocol. Say this subdomain was a part of the
"internet" domain, and imagine for a moment we had a project named "flying" on this subdomain. 

The full URL for this hypothetical project would be:

```` cats.internet.com/flying ````

and, if ART handled that subdomain properly, you could type:

```` cats/flying ````

to get redirected to the right place! Now, wasn't that easy?

NOTE: List of properly-handled subdomains can be found on the team site announcements under "ART-handled subdomains".

2. Known Errors and Bugs
-
ART frequently breaks on a person's first attempt to visit a particular project. To work around this, for now,
add "http://" to the front of your shorthand attempts THE FIRST TIME. After that, everything should run fine.

3. Todo List
-
* Make this modular and customizable for external use!
* Fix the error everyone but me is getting. o.o
