# metro-art

A typescript script to generate a random painting from the The Metropolitan Museum of Art Collection API (https://metmuseum.github.io/).

Sort of a "Daily Dose of Culture" idea.

The API is completely open to the public!

>To the extent possible under law, The Metropolitan Museum of Art has waived all copyright and related or neighboring rights to this dataset using the Creative Commons Zero license. 

![image](https://user-images.githubusercontent.com/12840619/211289192-88c4a898-1381-470f-984d-fdac50b38e7e.png)

This app does the following:

>Makes a request to the Met Museum API to search for paintings that have images.
>
>Generates a random number between 0 and the total number of results minus 1.
>
>Uses the random number to select an object ID from the list of object IDs in the response.
>
>Makes another request to the API using the selected object ID to retrieve more information about the object.
>
>Retrieves the image URL from the response.
>
>Fetches the image and creates an object URL for it.
>
>Creates an image element and sets its src to the object URL.
>
>Adds the image element to the document.
>
>Creates a link to the object's page on the Met Museum website and adds it to the document.    
>
>Creates elements to display the title, artist's name, date, medium, dimensions, and credit line of the painting, and adds them to the document.
>
>Creates a button to generate a new painting image, and adds it to the document.
>
>Sets the onerror event handler of the image element to remove the elements from the page and call the fetchRandomImage function again if the image fails to load.

Live at [mattt.net.au/paintings](https://mattt.net.au/paintings/)

