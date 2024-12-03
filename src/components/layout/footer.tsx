import { FC } from 'react';
import { Container } from '../layout';
import { navData } from './header';
import { Link } from 'react-router-dom';
import { Logo, Socials } from '../shared';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({}) => {
  return (
    <motion.footer
      // initial={{ y: 200, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // viewport={{ once: true }}
      // transition={{
      //   ease: [0.1, 0, 0.6, 1],
      //   duration: 0.2,
      // }}
      className={'bg-SURFACE_CONTAINER pt-8 pb-7'}>
      <Container>
        <div className="flex justify-between items-center">
          <nav className="flex text-[14px] items-center gap-4 font-semibold">
            {navData.map(({ link, title }) => (
              <Link key={title} to={link}>
                {title}
              </Link>
            ))}
          </nav>

          <Logo />
        </div>

        <hr className="border-OUTLINE_VAR mt-4 mb-2" />

        <div className="flex justify-between items-center">
          <h6 className="h5">2024 © Все права защищены</h6>
          <Socials />
        </div>
      </Container>
    </motion.footer>
  );
};
