import { FormikConfig, useFormik } from 'formik'
import * as yup from 'yup'

import { Alert } from 'react-native'

import { ViewModelFormReturn, ViewModelHook } from '@common/interfaces/app'
import { createNewAccountUseCase } from '@useCases/users/createNewAccount'
import { getExceptionMessage } from '@utils/exceptions'

import { useNewAccountRouter } from './view-router'

export interface NewAccountViewModelReturn extends ViewModelFormReturn<NewAccountForm> {
    onChange(fieldName: keyof NewAccountForm): (e: string) => void
    onSubmit(): void
    onPressAlreadyHaveAccount(): void
}

export interface NewAccountForm {
    username: string
    email: string
    password: string
}

const loginValidation = yup.object().shape({
    username: yup.string().required('Campo usuário é obrigatório'),
    email: yup.string().email('Email inválido').required('Campo email é obrigatório'),
    password: yup.string().required('Campo senha é obrigatório'),
})

const newAccountInitalValues: NewAccountForm = {
    username: '',
    email: '',
    password: '',
}

export const useNewAccountViewModel: ViewModelHook<NewAccountViewModelReturn> = () => {
    const { goToLogin } = useNewAccountRouter()

    const handleSubmit: FormikConfig<NewAccountForm>['onSubmit'] = async (result) => {
        try {
            await createNewAccountUseCase(result)
            Alert.alert(
                'Sua conta foi criada',
                'Verifique seu email para confirmar sua conta.',
                undefined,
                {
                    onDismiss: goToLogin,
                }
            )
        } catch (err) {
            Alert.alert('Ocorreu um erro', getExceptionMessage(err))
        }
    }

    const {
        isSubmitting,
        errors,
        values,
        handleChange,
        handleSubmit: onSubmit,
    } = useFormik<NewAccountForm>({
        validationSchema: loginValidation,
        onSubmit: handleSubmit,
        initialValues: newAccountInitalValues,
    })

    const onChange: NewAccountViewModelReturn['onChange'] = (fieldName) => (e) => {
        handleChange(fieldName)(e)
    }

    function onPressAlreadyHaveAccount() {
        goToLogin()
    }

    return {
        loading: isSubmitting,
        formErrors: errors,
        formValues: values,
        formDisabled: isSubmitting,
        onChange,
        onSubmit,
        onPressAlreadyHaveAccount,
    }
}
