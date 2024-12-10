import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field } from './';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface Props {
  className?: string;
  description?: boolean;
}

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).optional(),
});

type FormType = z.infer<typeof formSchema>;

export const ContactsForm: FC<Props> = ({ className = 'mx-auto', description = true }) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormType) => {
    console.log(data);
  };

  return (
    <div className={cn(className, 'w-[628px]')}>
      {description && (
        <div className="flex flex-col gap-2 text-center mb-8">
          <h3 className="h3 !text-ON_SURFACE">Давайте сотрудничать</h3>
          <p className="h4">
            Свяжитесь с нами прямо сейчас, чтобы обсудить возможности сотрудничества для повышения
            вашего авторитета в отрасли - будь то выступления, партнерство или участие в наших
            мероприятиях.
          </p>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-8 mb-4">
            <Field
              control={form.control}
              name="name"
              placeholder="Франческо Далавэли"
              label="Имя"
              error={form.formState.errors.name}
              description="Введите ваше имя (не менее 2 символов)"
            />
            <Field
              control={form.control}
              name="email"
              placeholder="francesco.dalaveli@gmail.com"
              label="Эл. почта"
              error={form.formState.errors.email}
              description="Укажите ваш адрес электронной почты"
            />
          </div>

          <Field
            control={form.control}
            name="message"
            placeholder="Сообщение"
            label="Эл. почта"
            error={form.formState.errors.message}
            description="Оставьте ваш вопрос или пожелание"
            area
          />

          <Button className="bg-PRIMARY w-full mt-4 rounded-[4px] text-white">Отправить</Button>
        </form>
      </Form>
    </div>
  );
};
