
        AOS.init({
            duration: 1000,
            once: true,
        });

        window.onload = function () {
            const loader = document.getElementById('loader');
            const mainContent = document.querySelector('body');

            // Hide the loader and show the content hhhh
            loader.style.display = 'none';
            mainContent.style.display = 'block';
        };


        document.addEventListener("DOMContentLoaded", function () {
            const links = document.querySelectorAll('.tabLink');
            const contents = document.querySelectorAll('.mapContainer');

            links.forEach(function (link, index) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();

                    contents.forEach(function (content) {
                        content.style.display = 'none';
                    });

                    links.forEach(function (link) {
                        link.classList.remove('selectedTabLink');
                    });

                    contents[index].style.display = 'flex';

                    link.classList.add('selectedTabLink');
                });
            });


            document.querySelector('.maps').style.display = 'flex';


            links[0].click();
        });


