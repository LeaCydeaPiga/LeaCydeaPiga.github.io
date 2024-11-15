(function () {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#home");
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
  }
})();
function scrollToSection() {
  document.querySelector("#content").scrollIntoView({
    behavior: "smooth"
  });
}

const displayCharacters = async () => {
const charactersContainer = document.getElementById('charactersContainer');

// Map of character IDs to custom images
const customImages = {
188: 'https://i1.wp.com/images.wikia.com/shingekinokyojin/images/4/48/Eren.png',
2: 'https://www.pngmart.com/files/19/Anime-Mikasa-PNG-Transparent-Image.png',
1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dej1e90-a3f80962-7d67-4e63-893d-6178548340cb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGVqMWU5MC1hM2Y4MDk2Mi03ZDY3LTRlNjMtODkzZC02MTc4NTQ4MzQwY2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yVYc_RmHtn7dAJ_z_CzDZSAc4DdHXIDAY2LXe_OXEoo',
};

// List of character IDs to fetch from the API
const characterIds = [188, 2, 1];

for (const id of characterIds) {
try {
  const response = await fetch(`https://api.attackontitanapi.com/characters/${id}`);
  const character = await response.json();

  // Create Bootstrap card element for each character
  const characterCard = document.createElement('div');
  characterCard.classList.add('col-md-4', 'mb-4', 'd-flex', 'justify-content-center');

  // Use custom image if available, otherwise fallback to API image
  const imageUrl = customImages[id] || character.img || '';

  characterCard.innerHTML = `
    <div class="card card-custom" style="width: 18rem;">
      <img src="${imageUrl}" class="card-img-top card-img-custom" alt="${character.name}">
      <div class="card-body text-center">
        <h5 class="card-title card-title-custom bebas-neue-regular font-24">${character.name || 'Name not available'}</h5>
        <p class="card-text card-text-custom poppins-thin"> <span class= "poppins-regular"> Alias : </span> ${character.alias || 'No description available'}</p>
        <p class="card-text card-text-species poppins-regular">${character.species || 'No description available'}</p>
      </div>
    </div>
  `;

  charactersContainer.appendChild(characterCard);
} catch (error) {
  console.error(`Error fetching character with ID ${id}:`, error);
}
}
};

// Load characters when the page is ready
window.onload = displayCharacters;


const displayTitans = async () => {
  const titansContainer = document.getElementById('titanContainer');

  // Map of titan IDs to custom images
  const customImages = {
      1: 'https://www.seekpng.com/png/full/234-2347840_titan-png.png',
      3: 'https://i.pinimg.com/originals/e3/96/64/e396646409d4b177719f6e11f252f68a.png',
      5: 'https://pnghq.com/wp-content/uploads/armored-titan-png-full-hd-35876.png',
  };

  const titanIds = [1, 3, 5];

  for (const id of titanIds) {
      // Fetch data from the API
      const response = await fetch(`https://api.attackontitanapi.com/titans/${id}`);
      const titan = await response.json();

      // Use the custom image if available
      const imageUrl = customImages[id] || titan.img || 'default-image-url.jpg';

      // card element for each titan
      const titanCard = document.createElement('div');
      titanCard.classList.add('col-md-4', 'mb-4', 'd-flex', 'justify-content-center');

      titanCard.innerHTML = `
          <div class="card card-custom" style="width: 18rem;">
              <img src="${imageUrl}" class="card-img-top card-img-custom" alt="${titan.name || 'Titan'}">
              <div class="card-body text-center">
                  <h5 class="card-title card-title-custom bebas-neue-regular font-24">${titan.name || 'Name not available'}</h5>
                  <button onclick="redirectToDetails(${id})" class ="button">View Details</button>
              </div>
          </div>
      `;

      titansContainer.appendChild(titanCard);
  }
};

// Function to redirect to the details page with the titan ID as a query parameter
const redirectToDetails = (titanId) => {
  window.location.href = `details.html?titanId=${titanId}`;
};

// Call the displayTitans function to load titans when the page is ready
displayTitans();



document.addEventListener('DOMContentLoaded', () => {
  toggleTab('linkCharacters', '.charactersBox', '.titanBox');
});

function toggleTab(activeLinkId, activeBoxSelector, inactiveBoxSelector) {
  document.querySelector(activeBoxSelector).style.display = 'block';
  document.querySelector(inactiveBoxSelector).style.display = 'none';
  
  document.getElementById(activeLinkId).classList.add('active');
  document.querySelectorAll(`#${activeLinkId === 'linkCharacters' ? 'linkTitans' : 'linkCharacters'}`).forEach(link => {
    link.classList.remove('active');
  });
}

document.getElementById('linkCharacters').addEventListener('click', function(event) {
  event.preventDefault();
  toggleTab('linkCharacters', '.charactersBox', '.titanBox');
});

document.getElementById('linkTitans').addEventListener('click', function(event) {
  event.preventDefault();
  toggleTab('linkTitans', '.titanBox', '.charactersBox');
});
