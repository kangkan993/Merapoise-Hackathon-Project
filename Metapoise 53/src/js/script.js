// navbar
lucide.createIcons();

const slider = document.getElementById("slider");
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideInterval = 5000; // 5 seconds

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

  
    //sidebar
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('cta-button-sidebar');
  const toggleButton = document.querySelector('[data-drawer-toggle="cta-button-sidebar"]');
  
  toggleButton.addEventListener('click', function() {
      sidebar.classList.toggle('-translate-x-full');
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', function(event) {
      const isClickInsideSidebar = sidebar.contains(event.target);
      const isClickOnToggleButton = toggleButton.contains(event.target);
      
      if (!isClickInsideSidebar && !isClickOnToggleButton && !sidebar.classList.contains('-translate-x-full')) {
          sidebar.classList.add('-translate-x-full');
      }
  });
});


setInterval(showNextSlide, slideInterval);

// Initial setup
slider.style.transform = "translateX(0)";



// Toggle mobile menu
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


//kangkan slider shoes

function swipeCards() {
  return {
      cards: [
          {
              id: 1,
              image: 'https://sslimages.shoppersstop.com/sys-master/images/h26/h6e/33037443432478/S24M-TRTSHK600_PINK.jpg_2000Wx3000H',
              title: 'Cocktail',
              description: 'Tropical mix of flavors, perfect for parties.',
              price: 1899,
              link: 'https://lqrs.com'
          },
          {
              id: 2,
              image: 'https://sslimages.shoppersstop.com/sys-master/images/h70/h0e/28966891257886/A22MSH1185_BLUE.jpg_2000Wx3000H',
              title: 'Smoothie',
              description: 'Refreshing blend of fruits and yogurt.',
              price: 1549,
              link: 'https://lqrs.com'
          },
          {
              id: 3,
              image: 'https://sslimages.shoppersstop.com/sys-master/images/h3c/h16/30752346144798/A23LDINDGO143NV_NAVY.jpg_2000Wx3000H',
              title: 'Iced Coffee',
              description: 'Cold brewed coffee with a hint of vanilla.',
              price: 1499,
              link: 'https://lqrs.com'
          },
          {
              id: 4,
              image: 'https://cdn.pixabay.com/photo/2024/08/24/09/04/ai-generated-8993705_1280.png',
              title: 'Mojito',
              description: 'Classic Cuban cocktail with mint and lime.',
              price: 1799,
              link: 'https://lqrs.com'
          },
          {
              id: 5,
              image: 'https://sslimages.shoppersstop.com/sys-master/images/hef/h2f/28219931918366/A22FLXWSTSHSE_COBALT.jpg_2000Wx3000H',
              title: 'Matcha Latte',
              description: 'Creamy green tea latte, rich in antioxidants.',
              price: 1649,
              link: 'https://lqrs.com'
          },
          {
              id: 6,
              image: 'https://cdn.pixabay.com/photo/2024/07/23/18/49/ai-generated-8916161_1280.png',
              title: 'Fruit Punch',
              description: 'Sweet and tangy punch, bursting with fruity flavors.',
              price: 1399,
              link: 'https://lqrs.com'
          },
          {
              id: 7,
              image: 'https://cdn.pixabay.com/photo/2024/08/04/15/44/ai-generated-8944726_1280.jpg',
              title: 'Bubble Tea',
              description: 'Chewy tapioca pearls in a sweet milk tea base.',
              price: 1499,
              link: 'https://lqrs.com'
          }
      ],
      addToCart(product) {
          // Implement your add to cart logic here
          console.log('Adding to cart:', product);
      }
  };
}


//ranjt part
var slideIndex = 0;
        showDivs(slideIndex);

        function plusDivs(n) {
          showDivs(slideIndex += n);
        }

        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n >= x.length) { slideIndex = 0 }
          if (n < 0) { slideIndex = x.length - 1 }
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          x[slideIndex].style.display = "block";
        }

        // Auto-slide every 3 seconds
        setInterval(function() {
          slideIndex++;
          showDivs(slideIndex);
        }, 3000);


