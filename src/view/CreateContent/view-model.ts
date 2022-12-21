import { useFormik } from 'formik'
import * as yup from 'yup'

import { useState } from 'react'
import { Alert } from 'react-native'

import { ViewModelFormReturn, ViewModelHook } from '@common/interfaces/app'
import { CreateContentPayload, createContentUseCase } from '@useCases/content/createContent'
import { getExceptionMessage, isUnauthorizedException } from '@utils/exceptions'

import { useCreateContentRouter } from './view-router'

export interface CreateContentViewModelReturn extends ViewModelFormReturn<CreateContentForm> {
    parentId: string | null
    showPreview: boolean
    toggleShowPreview(): void
}

export interface CreateContentForm {
    title: string
    body: string
    source_url: string
}

function createValidation(parentId: string | null) {
    if (parentId)
        return yup.object().shape({
            body: yup.string().required('O conteúdo é obrigatório'),
        })

    return yup.object().shape({
        title: yup.string().required('Campo título é obrigatório'),
        body: yup.string().required('O conteúdo é obrigatório'),
        source_url: yup.string().notRequired(),
    })
}

const initialValues: CreateContentForm = {
    title: '',
    body: '',
    source_url: '',
}

export const useCreateContentViewModel: ViewModelHook<CreateContentViewModelReturn> = () => {
    const [showPreview, setShowPreview] = useState(false)

    const { parentId, goBack, goToContent, goToLogin } = useCreateContentRouter()

    function onCancel() {
        goBack()
    }

    function hidrateData(data: CreateContentForm): CreateContentPayload {
        const result: CreateContentPayload = {
            ...data,
            source_url: data.source_url || null,
            parent_id: parentId,
            slug: 'asasd-asdad',
        }

        if (parentId) {
            result.title = null
        }

        return result
    }

    async function onPressSubmit(data: CreateContentForm) {
        try {
            const result = await createContentUseCase(hidrateData(data))

            goToContent(result.owner_username, result.slug)
        } catch (err) {
            if (isUnauthorizedException(err))
                return Alert.alert('Autenticação', getExceptionMessage(err), [
                    { text: 'OK' },
                    { text: 'Fazer login', onPress: goToLogin },
                ])

            Alert.alert('Ocorreu um erro', getExceptionMessage(err))
        }
    }

    const { values, errors, isSubmitting, handleSubmit, handleChange } = useFormik({
        onSubmit: onPressSubmit,
        initialValues,
        validationSchema: createValidation(parentId),
    })

    function toggleShowPreview() {
        setShowPreview(!showPreview)
    }

    const onChange: CreateContentViewModelReturn['onChange'] = (fieldName) => (e) => {
        handleChange(fieldName)(e)
    }

    return {
        parentId,
        formValues: values,
        formDisabled: isSubmitting,
        loading: isSubmitting,
        formErrors: errors,
        showPreview,
        onChange,
        onCancel,
        onSubmit: handleSubmit,
        toggleShowPreview,
    }
}
