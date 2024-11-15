const urlParams = new URLSearchParams(window.location.search);
const titanId = urlParams.get('titanId');

const displayTitanDetails = async () => {
    if (!titanId) {
        document.getElementById('titanName').textContent = 'Titan ID not found in URL.';
        return;
    }

    try {
        const response = await fetch(`https://api.attackontitanapi.com/titans/${titanId}`);
        const titan = await response.json();

        // Trim the titan image URL if it exists
        let titanImageUrl = titan.img || 'default-image-url.jpg';
        if (titanImageUrl.includes('.png')) {
            titanImageUrl = titanImageUrl.split('.png')[0] + '.png';
        }

        document.getElementById('titanImage').src = titanImageUrl;
        document.getElementById('titanName').textContent = titan.name || 'No name available';
        document.getElementById('titanDescription').textContent = titan.description || 'No description available';
        document.getElementById('titanHeight').textContent = titan.height || 'No height information available';
        document.getElementById('titanAbilities').textContent = titan.abilities || 'No abilities information available';
        document.getElementById('titanAllegiance').textContent = titan.allegiance || 'No allegiance information available';
        document.getElementById('titanCurrentInheritor').textContent = titan.currentInheritor || 'No current inheritor';
        document.getElementById('titanFormerInheritors').textContent = titan.formerInheritors || 'No former inheritors';
    } catch (error) {
        console.error(error);
        alert('Error fetching titan details');
    }
};

displayTitanDetails();
