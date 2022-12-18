import { FormikConfig, useFormik } from 'formik'
import * as yup from 'yup'

import { Alert } from 'react-native'

import { ViewModelFormReturn, ViewModelHook } from '@common/interfaces/app'
import { logUserInUseCase } from '@useCases/user/logUserIn'
import { getExceptionMessage } from '@utils/exceptions'

import { useLoginRouter } from './view-router'

export interface LoginViewModelReturn extends ViewModelFormReturn<LoginForm> {
    onChange(fieldName: keyof LoginForm): (e: string) => void
    onSubmit(): void
    onPressCreateNewAccount(): void
    onPressPasswordRecover(): void
}

export interface LoginForm {
    email: string
    password: string
}

const loginValidation = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo email é obrigatório'),
    password: yup.string().required('Campo senha é obrigatório'),
})

const loginInitalValues: LoginForm = {
    email: '',
    password: '',
}

export const useLoginViewModel: ViewModelHook<LoginViewModelReturn> = () => {
    const { goToNewAccount, goToPasswordRecover, goToHome } = useLoginRouter()

    const handleSubmit: FormikConfig<LoginForm>['onSubmit'] = async (result) => {
        try {
            await logUserInUseCase(result.email, result.password)
            goToHome()
        } catch (err) {
            Alert.alert(getExceptionMessage(err))
        }
    }

    const {
        isSubmitting,
        errors,
        values,
        handleChange,
        handleSubmit: onSubmit,
    } = useFormik<LoginForm>({
        validationSchema: loginValidation,
        onSubmit: handleSubmit,
        initialValues: loginInitalValues,
    })

    const onChange: LoginViewModelReturn['onChange'] = (fieldName) => (e) => {
        handleChange(fieldName)(e)
    }

    function onPressCreateNewAccount() {
        goToNewAccount()
    }
    function onPressPasswordRecover() {
        goToPasswordRecover()
    }

    return {
        loading: isSubmitting,
        formErrors: errors,
        formValues: values,
        formDisabled: isSubmitting,
        onChange,
        onSubmit,
        onPressCreateNewAccount,
        onPressPasswordRecover,
    }
}
