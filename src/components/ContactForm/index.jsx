'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './contactform.css'
import ButtonOne from '../buttons/ButtonOne'

export default function ContactForm(user, validate) {
  // watch, formState, reset
  const [successMessage, setSuccessMessage] = useState('')

  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required('Veuillez rentrer votre nom et prénom'),
      email: yup
        .string()
        .max(255)
        .email('Veuillez entrer un email valide')
        .required('Veuillez indiquer votre adresse email'),
      subject: yup
        .string()
        .max(255)
        .required('Veuillez indiquer la raison de votre prise de contact'),
      message: yup.string().max(5000).required('Merci de rentrer un message'),
    })
    .required()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const apiMailServerUrl = process.env.API_MAIL_SERVER_URL
    fetch(`${apiMailServerUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((datas) => {
        reset()
        setSuccessMessage(
          'Votre demande à bien été envoyé, vous recevrez une réponse au plus vite.'
        )
      })
      .catch((error) => console.log(error))
  }
  return (
    <section id="contact" className="section contact">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <h2 className="contact-title">Contactez-moi</h2>

        {successMessage ? <p className="success">{successMessage}</p> : ''}
        <label htmlFor="name">
          Nom :
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom et prénom"
            autoComplete="on"
            {...register('name')}
          />
        </label>
        {errors.name && <p className="c-yup">{errors.name.message}</p>}
        <label htmlFor="email">
          Email :
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre@email.com"
            autoComplete="on"
            {...register('email')}
          />
        </label>
        {errors.name && <p className="c-yup">{errors.name.message}</p>}
        <label htmlFor="subject">
          Sujet :
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Pourquoi nous contactez-vous ?"
            autoComplete="on"
            {...register('subject')}
          />
        </label>
        {errors.email && <p className="c-yup">{errors.email.message}</p>}
        <label htmlFor="message">
          Message :
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            {...register('message')}
          />
        </label>
        {errors.message && <p className="c-yup">{errors.message.message}</p>}
        <ButtonOne type="submit" txt="envoyer" />
      </form>
    </section>
  )
}
