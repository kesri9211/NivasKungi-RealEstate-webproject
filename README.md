# RealEstate-webProject


- [ ] Vite
- [ ] Array of object
- [ ] How to structure a project
- [ ] Vs-code
- [ ] Swiper js library- you swiper hook
- [ ] Mapping
- [ ] Accordion
- [ ] Animation:  framer-motion library (initial, animate, transition)

## Section 
- [ ] Header
- [ ] Hero
      1: for orange circle in hero section make z-index=-1
      2: for counting number I have used react-count-up library (<CountUp start={8800} end={9000} duration={4}/>)
      3: for white gradient - filter: blur (100px)
- [ ] companies logo
- [ ] residency (carousal)
      1: I have used Swiper JS library {Swiper, SwiperSlide, useSwiper}
      2: common.js - to contain 4 slides in 1 swipe
      3: for sliding button -useSwiper <button onClick={()=> swiper.slidePrev}>&lt;</button>
- [ ] value (accordion)
      1: used react-accessible-accordion library
      2: Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState,
      3: AccordionItemState- keep track of whether it expanded or collapsed. 
- [ ] Contact
      1: for icon used react-icon library
- [ ] get start
- [ ] footer

## Responsive
- [ ] menu open close on mobile view. - used useState hook
      const getMenuStyle = (menuOpended) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpended && "-100%" };
    }
  };
- [ ] OutsideClickHandler- when clicked outside
 ## deployment 
  - [ ] cloud flare
  - [ ] yarn run build
