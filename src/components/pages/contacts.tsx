import { Mail, MapPin, Phone } from 'lucide-react';
import { Container, PageHero } from '../layout';
import { ContactsForm, Socials } from '../shared';
import { Button } from '../ui/button';

export const Contacts = () => {
  return (
    <div>
      <PageHero title="Свяжитесь с нами" img="/contacts-header.png" className="mb-16" />

      <Container>
        <section className="flex flex-col gap-8">
          <div className="flex justify-between">
            <h2 className="h2 flex-[0_1_648px]">Давайте сотрудничать</h2>
            <p className="flex-[0_1_518px] text-18">
              Свяжитесь с нами прямо сейчас, чтобы обсудить возможности сотрудничества для повышения
              вашего авторитета в отрасли - будь то выступления, партнерство или участие в наших
              мероприятиях.
            </p>
          </div>

          <div className="flex justify-between">
            <ContactsForm description={false} className="" />

            <div className="flex flex-col gap-16 flex-[0_1_518px]">
              <div>
                <h3 className="h3 mb-4 !text-ON_SURFACE">Наши контакты</h3>

                <Button variant={'outline'}>
                  <MapPin />
                  проспект Битарап Туркменистан 183
                </Button>

                <div className="mt-4 flex gap-4">
                  <Button variant={'outline'}>
                    <Mail />
                    hello@turkmenexpo.com
                  </Button>
                  <Button variant={'outline'}>
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
      </Container>
    </div>
  );
};
