import { faEnvelopeOpenText, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';

const contact_methods = [
  { name: 'Phone', value: '715 439 5550', link: 'tel:715-439-5550', color: 'bg-cyan-100', faIcon: faMobileScreenButton, faIconColor: 'lightblue' },
  { name: 'Email', value: 'malloryellis24@gmail.com', link: 'mailto:malloryellis24@gmail.com', color: 'bg-sky-100', faIcon: faEnvelopeOpenText, faIconColor: 'cornflowerblue' },
  { name: 'Portfolio', value: 'malloryellis.com', link: '/', color: 'bg-teal-100', faIcon: faFolderOpen, faIconColor: 'lightseagreen' },
  { name: 'Location', value: 'Chicago, IL, USA', link: '', color: 'bg-blue-100', faIcon: faLocationDot, faIconColor: 'steelblue' }
]

export default contact_methods;
