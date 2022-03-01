import { addDoc, collection } from 'firebase/firestore'
import { FC, useState } from 'react'

import { database } from './helpers/Firebase'

type ProfileType = {
  name?: string
  mail?: string
  phone?: number
  song?: string
  restrictions?: string
  confirm: string
}

const RSVP: FC = () => {
  const [profile, setProfile] = useState<ProfileType>({
    confirm: 'none',
  } as ProfileType)
  const [loading, setLoading] = useState(false)
  const dbInstance = collection(database, 'guests')

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    addDoc(dbInstance, profile)
      .then(() => {
        setProfile({
          name: '',
          mail: '',
          phone: 0,
          song: '',
          restrictions: '',
          confirm: 'none',
        })
        alert('Invitación confirmada')
        setLoading(false)
      })
      .catch(() => {
        alert('Error, intentalo de nuevo más tarde')
        setLoading(false)
      })
  }

  return (
    <section className="section-container" id="rsvp">
      <h2 className="text-4xl text-center text-secondary mb-4">
        ¡Por favor confirma tu asistencia!
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex mb-5 flex-col md:flex-row">
          <div className="flex flex-col">
            <input
              onChange={handleChange}
              className="w-80 md:w-96 m-2 p-1 rounded-2xl text-center bg-inpBg bg-opacity-50 placeholder:text-secondary"
              value={profile.name}
              type="text"
              name="name"
              placeholder="Nombre completo"
              required
            />
            <input
              onChange={handleChange}
              className="w-80 md:w-96 m-2 p-1 rounded-2xl text-center bg-inpBg bg-opacity-50 placeholder:text-secondary"
              type="email"
              value={profile.mail}
              name="mail"
              placeholder="Correo"
              required
            />
            <input
              onChange={handleChange}
              className="w-80 md:w-96 m-2 p-1 rounded-2xl text-center bg-inpBg bg-opacity-50 placeholder:text-secondary"
              type="number"
              value={profile.phone}
              name="phone"
              placeholder="Celular"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              onChange={handleChange}
              className="w-80 md:w-96 m-2 p-1 rounded-2xl text-center bg-inpBg bg-opacity-50 placeholder:text-secondary"
              type="text"
              value={profile.song}
              name="song"
              placeholder="Canción que no puede faltar"
              required
            />
            <input
              onChange={handleChange}
              className="w-80 md:w-96 m-2 p-1 rounded-2xl text-center bg-inpBg bg-opacity-50 placeholder:text-secondary"
              type="text"
              value={profile.restrictions}
              name="restrictions"
              placeholder="Restricciones alimentarias"
              required
            />
            <select
              onChange={handleChange}
              className="w-80 md:w-96 m-2 p-1 rounded-2xl text-center bg-inpBg bg-opacity-50 text-secondary"
              value={profile.confirm}
              name="confirm"
              required
            >
              <option className="text-secondary" disabled value="none">
                Confirmo para el pre-plan
              </option>
              <option className="text-secondary">Sí</option>
              <option className="text-secondary">No</option>
            </select>
          </div>
        </div>

        <button
          className="w-60 md:w-72 my-1 p-3 rounded-2xl bg-secondary text-[white] active:bg-inpBg active:text-secondary"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Confirmar mi asistencia'}
        </button>
      </form>

      <p className="text-center  md:w-1/2 pt-6">
        Les sugerimos limitar las salidas 2 semanas previas a la boda y durante
        el evento tomar todas las medidas de bioseguridad posible para que todos
        estemos tranquilos y disfrutemos!
      </p>
    </section>
  )
}

export default RSVP
