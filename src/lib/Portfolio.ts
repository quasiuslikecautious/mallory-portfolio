import { base } from '$app/paths';

import { faBuildingShield, faFire, faGears, faHouseLaptop, faSuitcaseMedical, faTooth } from '@fortawesome/free-solid-svg-icons';
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
      { src: base + '/img/hosemonster/portfolio-1.jpg', alt: 'The Hose Monster Company 30 years of excellence' },
      { src: base + '/img/hosemonster/portfolio-2.jpg', alt: 'The Hose Monster Company Have a happy and safe Fourth of July' },
      { src: base + '/img/hosemonster/portfolio-3.jpg', alt: 'The Hose Monster Company Smart Monster ad' },
      { src: base + '/img/hosemonster/portfolio-4.jpg', alt: 'The Hose Monster Company Don\'t rely on luck for your fire protection' },
      { src: base + '/img/hosemonster/portfolio-5.jpg', alt: 'The Hose Monster Company Co-founder quote' },
      { src: base + '/img/hosemonster/portfolio-6.jpg', alt: 'The Hose Monster Company Time to budle up' },
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
      { src: base + '/img/inspireautomation/portfolio-1.jpg', alt: 'Inspire Introducing Automation LPD Load Palelletizing Device & Fast PAL' },
      { src: base + '/img/inspireautomation/portfolio-2.jpg', alt: 'Inspire Automation The right tools this April Fools\'' },
      { src: base + '/img/inspireautomation/portfolio-3.jpg', alt: 'Inspire Automation employee spotlight' },
      { src: base + '/img/inspireautomation/portfolio-4.jpg', alt: 'Inspire Automation Taking requests online' },
      { src: base + '/img/inspireautomation/portfolio-5.jpg', alt: 'Inspire Automation We\'re hiring' },
      { src: base + '/img/inspireautomation/portfolio-6.jpg', alt: 'Inspire Automation Optimize your line with Inspire Automation' },
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
      { src: base + '/img/safecare/portfolio-1.jpg', alt: 'Safe Care Congrats Stan Springer the original SafeCare superhero' },
      { src: base + '/img/safecare/portfolio-2.jpg', alt: 'Safe Care HVAC is the lungs of your facility' },
      { src: base + '/img/safecare/portfolio-3.jpg', alt: 'Safe Care Employee highlight' },
      { src: base + '/img/safecare/portfolio-4.jpg', alt: 'Safe Care Carb Day 2023 collage' },
      { src: base + '/img/safecare/portfolio-5.jpg', alt: 'Safe Care website launch' },
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
      { src: base + '/img/lifeworking/portfolio-1.jpg', alt: 'Life Working Gift dad a day away' },
      { src: base + '/img/lifeworking/portfolio-2.jpg', alt: 'Life Working Let\'s get collaborative!' },
      { src: base + '/img/lifeworking/portfolio-3.jpg', alt: 'Life Working Celebrating women around the world' },
      { src: base + '/img/lifeworking/portfolio-4.jpg', alt: 'Life Working Get your goals in shape!' },
      { src: base + '/img/lifeworking/portfolio-5.jpg', alt: 'Life Working Summer Events are heating up!' },
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
      { src: base + '/img/renfert/portfolio-1.jpg', alt: 'Renfert USA Join us at Lab Day Chicago.' },
      { src: base + '/img/renfert/portfolio-2.jpg', alt: 'Renfert USA Embrace Earth Day with sustainable 3D printing' },
      { src: base + '/img/renfert/portfolio-3.jpg', alt: 'Renfert USA Happy New Year from the Renfert team' },
    ]
  },

  {
    title: 'ClaimAid',
    faIcon: faSuitcaseMedical,
    faIconColor: 'olivedrab',
    responsibilities: [
      { text: 'Organic social', icons: [faLinkedin] },
      { text: 'Campaign strategy', icons: [] },
      { text: 'Email marketing', icons: [] },
      { text: 'Flyers/Leave-behinds', icons: [] },
    ],
    samples: [
      { src: base + '/img/claimaid/portfolio-1.jpg', alt: 'Claim Aid Sowing seeds of healthier communities. One hospital at a time.' },
      { src: base + '/img/claimaid/portfolio-2.jpg', alt: 'Claim Aid 2023: The Year of the Patient Experience.' },
      { src: base + '/img/claimaid/portfolio-3.jpg', alt: 'Claim Aid The more heartfelt approach to screening for health coverage.' },
      { src: base + '/img/claimaid/portfolio-4.jpg', alt: 'Claim Aid Make screening for coverage a painless procedure.' },
      { src: base + '/img/claimaid/portfolio-5.jpg', alt: 'Claim Aid You check their vitals. We\'ll answer the vital coverage questions.' },
    ]
  },
]

export default works;
