async function fetchRandomImage() {
  // Make a request to the Met Museum API to search for paintings that have images, with the department ID set to 11 (paintings).
  const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Paintings&departmentId=11&q=Painting';
  const response = await fetch(url);
  const res = await response.json();

  // Generate a random number between 0 and the total number of results minus 1.
  const max = res.total - 1;
  const min = 0;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  // Use the random number to select an object ID from the list of object IDs in the response.
  const picked = res.objectIDs[random];

  // Make another request to the API using the selected object ID to retrieve more information about the object.
  const url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${picked}`;
  const response2 = await fetch(url2);
  const res2 = await response2.json();

  // Retrieve the image URL from the response.
  const imgUrl = res2.primaryImageSmall;

  // Fetch the image and create an object URL for it.
  const imageResponse = await fetch(imgUrl);
  const imageBlob = await imageResponse.blob();
  const imageUrl = URL.createObjectURL(imageBlob);

  // Create an image element and set its src to the object URL.
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;

  // Add the image element to the document.
  document.body.appendChild(imgElement); 

  // Create a link to the object's page on the Met Museum website.
  const anchorElement = document.createElement('a');
  anchorElement.href = res2.objectURL;
  anchorElement.textContent = 'View on Met Museum website';

  // Add the link to the document.
  document.body.appendChild(anchorElement);

  // Create an element to display the title of the painting.
  const titleElement = document.createElement('p');
  titleElement.textContent = `Title: ${res2.title}`;
  document.body.appendChild(titleElement);

  // Create an element to display the artist's name.
  const artistElement = document.createElement('p');
  artistElement.textContent = `Artist: ${res2.artistDisplayName}`;
  document.body.appendChild(artistElement);

  // Date
  const date = res2.objectDate;
  const dateElement = document.createElement('p');
  dateElement.textContent = `Date: ${date}`;
  document.body.appendChild(dateElement);

  // Medium
  const medium = res2.medium;
  const mediumElement = document.createElement('p');
  mediumElement.textContent = `Medium: ${medium}`;
  document.body.appendChild(mediumElement);

  // Dimensions
  const dimensions = res2.dimensions;
  const dimensionsElement = document.createElement('p');
  dimensionsElement.textContent = `Dimensions: ${dimensions}`;
  document.body.appendChild(dimensionsElement);

  // Credit Line
  const creditLine = res2.creditLine;
  const creditLineElement = document.createElement('p');
  creditLineElement.textContent = `Credit Line: ${creditLine}`;
  document.body.appendChild(creditLineElement);


  // Create a button to generate a new painting image.
  const button = document.createElement('button');
  button.textContent = 'New Painting';
  button.addEventListener('click', fetchRandomImage);
  document.body.appendChild(button);

  imgElement.onerror = () => {
    // When the image fails to load, remove the elements from the page and call the `fetchRandomImage` function to try again.
    document.body.removeChild(imgElement);
    document.body.removeChild(anchorElement);
    document.body.removeChild(titleElement);
    document.body.removeChild(artistElement);
    document.body.removeChild(dateElement);
    document.body.removeChild(mediumElement);
    document.body.removeChild(dimensionsElement);
    document.body.removeChild(creditLineElement);
    document.body.removeChild(button);
    fetchRandomImage();
  };     

}

// Call the function to fetch and display a random image.
fetchRandomImage();