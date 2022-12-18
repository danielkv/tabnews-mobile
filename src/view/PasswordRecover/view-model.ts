import { FormikConfig, useFormik } from 'formik'
import * as yup from 'yup'

import { ViewModelHook } from '@common/interfaces/app'

import { usePassworRecoverRouter } from './view-router'

export interface PasswordRecoverViewModelReturn {
    loading: boolean
    formErrors?: Partial<NewAccountForm>
    formValues: NewAccountForm
    onChange(fieldName: keyof NewAccountForm): (e: string) => void
    onSubmit(): void
    onPressAlreadyHaveAccount(): void
}

export interface NewAccountForm {
    email: string
}

const validation = yup.object().shape({
    email: yup.string().required('Campo email é obrigatório'),
})

const initalValues: NewAccountForm = {
    email: '',
}

export const usePasswordRecoverViewModel: ViewModelHook<PasswordRecoverViewModelReturn> = () => {
    const { goToLogin } = usePassworRecoverRouter()

    const handleSubmit: FormikConfig<NewAccountForm>['onSubmit'] = async (result) => {
        console.log(result)
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
        onChange,
        onSubmit,
        onPressAlreadyHaveAccount,
    }
}
