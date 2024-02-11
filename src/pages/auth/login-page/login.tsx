import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { CustomLink } from '../../../components/link/link';

import strapi from '../../../services/strapi';
import { setUserInfo } from '../../../redux/slices/user';

import { Input, Button, Title, Form, Section } from '../components';

const LoginPage: FC = () => {
    const [formData, setFormData] = useState<{ username: string; password: string }>({
        username: '',
        password: '',
    });
    const dispatch = useDispatch();

    const { mutate, data, isPending } = useMutation({
        mutationKey: ['login'],
        mutationFn: async ({ username, password }: { username: string; password: string }) => {
            return await strapi.login({ identifier: username, password });
        },
        onSuccess: data => {
            const {
                data:
                { login:
                    { jwt, user }
                }
            } = data;

            localStorage.setItem("token", jwt);

            if (Object.keys(data).length !== 0) {
                dispatch(setUserInfo({ jwt, user }))
            }
        },
        onError: response => {
            console.log(response);
        },
    });

    const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handlerOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutate(formData);
    };

    return (
        <Section>
            <Title>Авторизация</Title>
            <Form onSubmit={handlerOnSubmit}>
                <Input
                    type='text'
                    name='username'
                    placeholder='Имя пользователя'
                    value={formData.username}
                    onChange={handlerOnChange}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Пароль'
                    value={formData.password}
                    onChange={handlerOnChange}
                />
                <Button type='submit' disabled={isPending}>
                    Войти
                </Button>

                <CustomLink style={{ marginTop: "15px" }} to={"/auth/register"}>
                    Зарегистрироваться
                </CustomLink>
            </Form>
        </Section>
    );
};

export default LoginPage;
