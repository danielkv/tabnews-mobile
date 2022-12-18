import { FormikConfig, useFormik } from 'formik'
import * as yup from 'yup'

import { Alert } from 'react-native'

import { ViewModelFormReturn, ViewModelHook } from '@common/interfaces/app'
import { recoverPasswordUseCase } from '@useCases/users/recoverPassword'
import { getExceptionMessage } from '@utils/exceptions'

import { usePassworRecoverRouter } from './view-router'

export interface PasswordRecoverViewModelReturn extends ViewModelFormReturn<NewAccountForm> {
    onChange(fieldName: keyof NewAccountForm): (e: string) => void
    onSubmit(): void
    onPressAlreadyHaveAccount(): void
}

export interface NewAccountForm {
    email: string
}

const validation = yup.object().shape({
    email: yup.string().email().required('Campo email é obrigatório'),
})

const initalValues: NewAccountForm = {
    email: '',
}

export const usePasswordRecoverViewModel: ViewModelHook<PasswordRecoverViewModelReturn> = () => {
    const { goToHome, goToLogin } = usePassworRecoverRouter()

    const handleSubmit: FormikConfig<NewAccountForm>['onSubmit'] = async (result) => {
        try {
            await recoverPasswordUseCase(result.email)
            Alert.alert(
                'Confira seu e-mail',
                'Você receberá um link para definir uma nova senha.',
                [{ onPress: goToHome }],
                {
                    onDismiss: goToHome,
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
        validationSchema: validation,
        onSubmit: handleSubmit,
        initialValues: initalValues,
    })

    const onChange: PasswordRecoverViewModelReturn['onChange'] = (fieldName) => (e) => {
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
