//styled components
import {
    StyledFormButton,
    StyledFormsArea,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    StyledContainer,
} from "../../components/Styles";

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../../components/FormLib";
import * as Yup from 'yup';

//icons
import { FiMail, FiLock, FiUser, FiCalendar, FiPhone } from 'react-icons/fi';
import {HiOutlineIdentification} from 'react-icons/hi'

//Loader
import Loader from "react-loader-spinner";

import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const history = useNavigate();

    return (
        <StyledContainer>
            <StyledFormsArea>
                <StyledTitle
                    color={colors.theme}
                    size={30}
                >
                    Cadastro
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        senha: "",
                        repetirSenha: "",
                        dataNascimento: "",
                        nome: "",
                        cpfCpnj: "",
                        telefoneContato: "",

                    }}
                >
                    <Form>
                        <TextInput
                            name="nome"
                            type="text"
                            label="Nome"
                            placeholder="Digite seu nome"
                            icon={<FiUser/>}
                        />

                        <TextInput
                            name="email"
                            type="text"
                            label="E-mail"
                            placeholder="Digite seu e-mail"
                            icon={<FiMail/>}
                        />

                        <TextInput
                            name="telefoneContato"
                            type="text"
                            label="Telefone"
                            placeholder="Digite seu telefone"
                            icon={<FiPhone/>}
                        />

                        <TextInput
                            name="cpfCpnj"
                            type="text"
                            label="CPF ou CNPJ"
                            placeholder="Digite seu CPF/CNPJ"
                            icon={<HiOutlineIdentification/>}
                        />

                        <TextInput
                            name="dataNascimento"
                            type="date"
                            label="Data de nascimento"
                            placeholder="Digite sua data de nascimento"
                            icon={<FiCalendar/>}
                        />
                        <TextInput
                            name="senha"
                            type="password"
                            label="Senha"
                            placeholder="Digite sua senha"
                            icon={<FiLock/>}
                        />

                        <TextInput
                            name="repetirSenha"
                            type="password"
                            label="Confirmação senha"
                            placeholder="Confirme sua senha"
                            icon={<FiLock/>}
                        />

                        <TextInput
                            name="tipo_usuario"
                            type="text"
                            label="Tipo de usuário"
                            placeholder="Escolha uma opção"
                            icon={<FiLock/>}
                        />
                        <ButtonGroup>
                            <StyledFormButton type="submit">
                                Cadastrar
                            </StyledFormButton>
                        </ButtonGroup>
                    </Form>
                </Formik>
                <ExtraText>
                    Já tem cadastro?
                    <TextLink to="/login"> Faça o login.</TextLink>
                </ExtraText>
            </StyledFormsArea>
        </StyledContainer>
    );
}

export default Signup;