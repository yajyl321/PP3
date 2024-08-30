// const url = "https://api.thecatapi.com/v1"; // Base URL of the API
// const apiKey =
//   "live_Ej05sMHSM0OGeTfWMD1jmNAfrFlBEHqLNn3OVB6MLRf5obkI6KR9fUXaGCcdUzll"; // Replace with your actual API key

// // Function to fetch dog breeds and populate the dropdown
// const fetchCatBreeds = async () => {
//   try {
//     const response = await fetch(`${url}/breeds?api_key=${apiKey}`);
//     const breeds = await response.json();
//     populateBreedSelect(breeds);
//   } catch (error) {
//     console.error("Error fetching cat breeds:", error);
//   }
// };

// // Function to populate the breed select dropdown
// const populateBreedSelect = (breeds) => {
//   const select = document.querySelector("#breed-select");
//   breeds.forEach((breed) => {
//     const option = document.createElement("option");
//     option.value = breed.id;
//     option.textContent = breed.name;
//     select.appendChild(option);
//   });

//   // Add an event listener to handle breed selection changes
//   select.addEventListener("change", handleBreedChange);
// };

// // Function to handle changes in the breed selection
// const handleBreedChange = async (event) => {
//   const breedID = event.target.value;
//   if (breedID) {
//     try {
//       const response = await fetch(
//         `${url}/images/search?include_breeds=1&breed_id=${breedID}&api_key=${apiKey}`
//       );
//       const [data] = await response.json();
//       if (data) {
//         updateCatImage(data.url);
//         updateCatDescription(data.breeds[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching breed details:", error);
//     }
//   }
// };

// // Function to update the dog image in the card
// const updatecatImage = (imageUrl) => {
//   const imageElement = document.querySelector("#dogImage");
//   if (imageElement) {
//     imageElement.src = imageUrl;
//     imageElement.alt = "Selected dog breed image";
//   } else {
//     console.error("Image element not found.");
//   }
// };

// // Function to update the description of the dog breed in the card
// const updateCatDescription = (breed) => {
//   const descriptionElement = document.querySelector("#dogDescription");
//   if (descriptionElement) {
//     descriptionElement.innerHTML = `
//             <strong>Name:</strong> ${breed.name || "N/A"}<br>
//             <strong>Bred for:</strong> ${breed.bred_for || "N/A"}<br>
//             <strong>Breed Group:</strong> ${breed.breed_group || "N/A"}<br>
//             <strong>Temperament:</strong> ${breed.temperament || "N/A"}<br>
//             <strong>Life Span:</strong> ${breed.life_span || "N/A"}<br>
//             <strong>Origin:</strong> ${breed.origin || "N/A"}<br>
//             <strong>Height:</strong> ${
//               breed.height ? breed.height.metric : "N/A"
//             } cm<br>
//             <strong>Weight:</strong> ${
//               breed.weight ? breed.weight.metric : "N/A"
//             } kg<br>
//         `;
//   } else {
//     console.error("Description element not found.");
//   }
// };

// // Initialize the application by fetching breeds
// fetchCatBreeds();
