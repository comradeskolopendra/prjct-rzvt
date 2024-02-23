import { FC } from 'react';

import { setUserInfo } from '../../../redux/slices/user';

import { ValidatedInput, Button, Title, Form, Section, RegisterLink } from '../components';
import { SubmitHandler, useForm } from 'react-hook-form';
import type { IFormValues } from '../interfaces';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';


const LoginPage: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>({
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit: SubmitHandler<IFormValues> = async ({ email, password }) => {
        await signInWithEmailAndPassword(auth, email, password).then((userCred) => {
            console.log(`user: ${userCred.user} is logined`);
        })
    }

    return (
        <Section>
            <Title>Вход</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ValidatedInput register={register} type='email' registerlabel='email' inputLabel='E-mail' errors={errors} />
                <ValidatedInput register={register} type='password' registerlabel='password' inputLabel='Пароль' errors={errors} />
                <Button type='submit'>
                    Войти
                </Button>

                <RegisterLink to={"/auth/register"}>
                    Зарегистрироваться
                </RegisterLink>
            </Form>
        </Section>
    );
};

export default LoginPage;
