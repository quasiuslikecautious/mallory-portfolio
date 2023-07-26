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
      { text: 'Photo shoots', icons: [] }
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
    ]
  },
]

export default works;
