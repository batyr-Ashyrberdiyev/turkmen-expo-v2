import { Mail, MapPin, Phone } from 'lucide-react';
import { Container, PageHero } from '../layout';
import { Animate, ContactsForm, Socials } from '../shared';
import { Button } from '../ui/button';
import { scrollTop } from '@/lib/utils';

export const Contacts = () => {
  scrollTop();

  return (
    <div>
      <PageHero title="Свяжитесь с нами" img="/contacts-header.png" className="mb-16" />

      <Container>
        <Animate>
          <section className="flex flex-col gap-8">
            <div className="flex flex-col md:gap-0 gap-4 md:flex-row md:justify-between">
              <h2 className="h2 md:flex-[0_1_648px]">Давайте сотрудничать</h2>
              <p className="md:flex-[0_1_518px] text-base text-ON_SURFACE_VAR">
                Свяжитесь с нами прямо сейчас, чтобы обсудить возможности сотрудничества для
                повышения вашего авторитета в отрасли - будь то выступления, партнерство или участие
                в наших мероприятиях.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:gap-0 gap-20">
              <ContactsForm description={false} className="" />

              <div className="flex flex-col md:gap-16 gap-20 md:flex-[0_1_518px]">
                <div>
                  <h3 className="h3 md:mb-4 mb-6 !text-ON_SURFACE">Наши контакты</h3>

                  <Button variant={'outline'} className="w-full md:w-fit justify-start">
                    <MapPin />
                    проспект Битарап Туркменистан 183
                  </Button>

                  <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <Button variant={'outline'} className="justify-start">
                      <Mail />
                      hello@turkmenexpo.com
                    </Button>
                    <Button variant={'outline'} className="justify-start">
                      <Phone />
                      993 XX XX-XX-XX
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="h3 mb-4 !text-ON_SURFACE">Социальные сети</h3>
                  <Socials />
                </div>
              </div>
            </div>
          </section>
        </Animate>
      </Container>
    </div>
  );
};
