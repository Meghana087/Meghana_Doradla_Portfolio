import { TypeAnimation } from 'react-type-animation';

const Header = () => (
  <header data-aos="fade-down">
    <h1>Meghana Doradla</h1>
    <TypeAnimation
      sequence={[
        'Final Year CSE Student',
        2000,
        'Python Developer',
        2000,
        'Full Stack Web Developer',
        2000,
      ]}
      wrapper="p"
      speed={50}
      repeat={Infinity}
    />
  </header>
);

export default Header;
