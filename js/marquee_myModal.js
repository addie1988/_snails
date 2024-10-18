function marquee_myModal() {
  const marquees = document.querySelectorAll("[name='marquee_myModal']");
  marquees.forEach((marquee) => {
      let speed = 1; // Control scrolling speed
      let marqueeWidth = marquee.offsetWidth;
      let position = 0;

      function scrollMarquee() {
          position -= speed;

          // Reset to the right side if it scrolls out of view
          if (position <= -marqueeWidth) {
              position = position + marqueeWidth;
          }
          // Update the position of the marquee text
          marquee.style.transform = `translateX(${position}px)`;

          // Use requestAnimationFrame for smooth scrolling
          requestAnimationFrame(scrollMarquee);
      }

      // Start the marquee effect
      scrollMarquee();
  });
}

marquee_myModal();

