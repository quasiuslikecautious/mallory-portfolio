import { base } from '$app/paths';

import { faBuildingShield, faFire, faGears, faHouseLaptop, faTooth } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const works = [
  { 
    title: 'The Hose Monster Company', 
    faIcon: faFire, 
    faIconColor: 'orange', 
    responsibilities: [
      { text: 'Organic social', icons: [ faFacebook, faInstagram, faLinkedin ] },
      { text: 'Google Ads', icons: [] },
      { text: 'Paid ads', icons: [ faFacebook, faLinkedin ] },
      { text: 'Print and digital publication ads', icons: [] },
      { text: 'Email marketing', icons: [] },
      { text: 'Website updates', icons: [] },
      { text: 'Campaign strategy', icons: [] },
      { text: 'Photo shoots', icons: [] },
    ],
    samples: [
      { src: base + '/img/hosemonster/portfolio-1.jpg', alt: 'The Hose Monster Company 30 years of excellence ad' },
      { src: base + '/img/hosemonster/portfolio-2.jpg', alt: 'The Hose Monster Company 4th of July ad' },
      { src: base + '/img/hosemonster/portfolio-3.jpg', alt: 'The Hose Monster Company Smart Monster ad' },
      { src: base + '/img/hosemonster/portfolio-4.jpg', alt: 'The Hose Monster Company St. Patrick\'s day ad' },
      { src: base + '/img/hosemonster/portfolio-5.jpg', alt: 'The Hose Monster Company Fred Grenning quote' },
      { src: base + '/img/hosemonster/portfolio-6.jpg', alt: 'The Hose Monster Company bundle ad' },
    ]
  },

  {
    title: 'Inspire Automation',
    faIcon: faGears,
    faIconColor: 'teal',
    responsibilities: [
      { text: 'Organic social', icons: [faLinkedin] },
      { text: 'Email marketing', icons: [] },
      { text: 'Blogs', icons: [] },
      { text: 'Case studies', icons: [] },
      { text: 'Website updates', icons: [] },
      { text: 'Recruitment and retention strategy', icons: [] },
      { text: 'Templates for publications', icons: [] },
      { text: 'Video', icons: [] },
      { text: 'Tradeshow marketing', icons: [] }
    ],
    samples: [
      { src: base + '/img/inspireautomation/portfolio-1.jpg', alt: 'Inspire Automation LPD Load Palelletizing Device & Fast PAL ad' },
      { src: base + '/img/inspireautomation/portfolio-2.jpg', alt: 'Inspire Automation April Fools\' ad' },
      { src: base + '/img/inspireautomation/portfolio-3.jpg', alt: 'Inspire Automation Shaun Morrison ad' },
      { src: base + '/img/inspireautomation/portfolio-4.jpg', alt: 'Inspire Automation Online Requests ad' },
      { src: base + '/img/inspireautomation/portfolio-5.jpg', alt: 'Inspire Automation hiring ad' },
      { src: base + '/img/inspireautomation/portfolio-6.jpg', alt: 'Inspire Automation Optimize your line ad' },
    ]
  },

  {
    title: 'SafeCare',
    faIcon: faBuildingShield,
    faIconColor: 'navy',
    responsibilities: [
      { text: 'Organic social', icons: [faFacebook, faLinkedin] },
      { text: 'Email marketing', icons: [] },
      { text: 'Paid ads', icons: [faFacebook, faLinkedin] },
      { text: 'Print and digital publication ads', icons: [] },
      { text: 'Blogs', icons: [] },
      { text: 'Recruitment and retention strategy', icons: [] }
    ],
    samples: [
      { src: base + '/img/safecare/portfolio-1.jpg', alt: 'Safe Care original SafeCare superhero ad' },
      { src: base + '/img/safecare/portfolio-2.jpg', alt: 'Safe Care HVAC is the lungs of your facility ad' },
      { src: base + '/img/safecare/portfolio-3.jpg', alt: 'Safe Care Mr.January employee calendar' },
      { src: base + '/img/safecare/portfolio-4.jpg', alt: 'Safe Care Carb Day 2023 collage' },
      { src: base + '/img/safecare/portfolio-5.jpg', alt: 'Safe Care website update ad' },
    ]
  },

  {
    title: 'LifeWorking',
    faIcon: faHouseLaptop,
    faIconColor: 'mediumblue',
    responsibilities: [
      { text: 'Organic social', icons: [faFacebook, faInstagram, faLinkedin] },
      { text: 'Blogs', icons: [] },
      { text: 'E-newsletter creation', icons: [] },
      { text: 'Business strategy', icons: [] }
    ],
    samples: [
      { src: base + '/img/lifeworking/portfolio-1.jpg', alt: 'Life Working Father\'s day ad' },
      { src: base + '/img/lifeworking/portfolio-2.jpg', alt: 'Life Working Collaborative blog' },
      { src: base + '/img/lifeworking/portfolio-3.jpg', alt: 'Life Working Women ad' },
      { src: base + '/img/lifeworking/portfolio-4.jpg', alt: 'Life Working Goals blog' },
      { src: base + '/img/lifeworking/portfolio-5.jpg', alt: 'Life Working Summer Events flyer' },
      { src: base + '/img/lifeworking/portfolio-6.jpg', alt: 'Life Working AbbVie Training event spotlight' },
    ]
  },

  {
    title: 'Renfert USA',
    faIcon: faTooth,
    faIconColor: 'firebrick',
    responsibilities: [
      { text: 'Organic social', icons: [faFacebook, faLinkedin] },
      { text: 'Paid ads', icons: [faFacebook, faLinkedin] },
      { text: 'Influencer marketing strategy', icons: [] },
      { text: 'Print and digital publication ads', icons: [] },
      { text: 'Email marketing', icons: [] },
      { text: 'Blogs', icons: [] }
    ],
    samples: [
      { src: base + '/img/renfert/portfolio-1.jpg', alt: 'Renfert USA LMT Lab Day Chicago flyer' },
      { src: base + '/img/renfert/portfolio-2.jpg', alt: 'Renfert USA Earth Day ad' },
      { src: base + '/img/renfert/portfolio-3.jpg', alt: 'Renfert USA New Year ad' },
    ]
  },
]

export default works;
