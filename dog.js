// For dog html
console.log("start");

const url = "https://api.thedogapi.com/v1"; // Base URL of the API
const apiKey =
  "live_UNutObfJ3DE7dOPfCGAEpUjkVLNudpOlnBSD8Vb6TmzxKGye4fKAgVg7zFUQjSmJ"; // Replace with your actual API key

// Function to fetch dog breeds and populate the dropdown
const fetchDogBreeds = async () => {
  try {
    const response = await fetch(`${url}/breeds?api_key=${apiKey}`);
    const breeds = await response.json();
    populateBreedSelect(breeds);
  } catch (error) {
    console.error("Error fetching dog breeds:", error);
  }
};

// Function to populate the breed select dropdown
const populateBreedSelect = (breeds) => {
  const select = document.querySelector("#breed-select");
  breeds.forEach((breed) => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.textContent = breed.name;
    select.appendChild(option);
  });

  // Add an event listener to handle breed selection changes
  select.addEventListener("change", handleBreedChange);
};

// Function to handle changes in the breed selection
const handleBreedChange = async (event) => {
  const breedID = event.target.value;
  if (breedID) {
    try {
      const response = await fetch(
        `${url}/images/search?include_breeds=1&breed_id=${breedID}&api_key=${apiKey}`
      );
      const [data] = await response.json();
      if (data) {
        updateDogImage(data.url);
        updateDogDescription(data.breeds[0]);
      }
    } catch (error) {
      console.error("Error fetching breed details:", error);
    }
  }
};

// Function to update the dog image in the card
const updateDogImage = (imageUrl) => {
  const imageElement = document.querySelector("#dogImage");
  if (imageElement) {
    imageElement.src = imageUrl;
    imageElement.alt = "Selected dog breed image";
  } else {
    console.error("Image element not found.");
  }
};

// Function to update the description of the dog breed in the card
const updateDogDescription = (breed) => {
  const descriptionElement = document.querySelector("#dogDescription");
  if (descriptionElement) {
    descriptionElement.innerHTML = `
            <strong>Name:</strong> ${breed.name || "N/A"}<br>
            <strong>Bred for:</strong> ${breed.bred_for || "N/A"}<br>
            <strong>Breed Group:</strong> ${breed.breed_group || "N/A"}<br>
            <strong>Temperament:</strong> ${breed.temperament || "N/A"}<br>
            <strong>Life Span:</strong> ${breed.life_span || "N/A"}<br>
            <strong>Origin:</strong> ${breed.origin || "N/A"}<br>
            <strong>Height:</strong> ${
              breed.height ? breed.height.metric : "N/A"
            } cm<br>
            <strong>Weight:</strong> ${
              breed.weight ? breed.weight.metric : "N/A"
            } kg<br>
        `;
  } else {
    console.error("Description element not found.");
  }
};

// Initialize the application by fetching breeds
fetchDogBreeds();

// For cat HTML
console.log("start");
