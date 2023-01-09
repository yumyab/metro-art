# metro-art

A typescript script to generate a random painting from the The Metropolitan Museum of Art Collection API (https://metmuseum.github.io/).

Sort of a "Daily Dose of Culture" idea.

The API is completely open to the public!

>To the extent possible under law, The Metropolitan Museum of Art has waived all copyright and related or neighboring rights to this dataset using the Creative Commons Zero license. 


I think a source of inspiration for this project was Chromecast’s painting screensaver option, which I found out later actually uses this same art collection API.

The main functions of the program:
Generate a random image from the Metropolitan Museum of Art Collection (https://www.metmuseum.org/art/the-collection), in this case the European Classical Collection, which is department #11. (https://www.metmuseum.org/art/collection/search?showOnly=withImage&department=11)

Credit and link back to the Metropolitan Museum of Art URL.
Display title, artist, date, medium, dimensions and credit line of the painting
Add a button to generate a new image etc.
If the painting errors and doesnt generate (usually a licencing issue of the original painting, and it's agreements on reproductions etc) delete info and regenerate.

