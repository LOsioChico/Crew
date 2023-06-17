import { ProjectInput, ProjectInputSelect, ProjectTextArea } from './components'
import { useProjectForm } from './hooks'

export const ProjectForm: React.FC = () => {
  const { register, handleSubmit, errors, onSubmit } = useProjectForm()

  return (
    <div className='container mx-auto my-10 px-4'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto max-w-md rounded border bg-gray-50 p-4'
      >
        <ProjectInput
          name='title'
          type='text'
          placeholder='Título'
          register={register}
          label='Título'
          errors={errors}
        />

        <ProjectInput
          name='shortDescription'
          type='text'
          placeholder='Descripción corta'
          register={register}
          label='Descripción corta'
          errors={errors}
        />

        <ProjectTextArea
          name='description'
          register={register}
          label='Descripción'
          errors={errors}
          placeholder='Descripción general'
        />

        <ProjectInput
          name='fundingGoal'
          type='number'
          placeholder='Recaudación pretendida'
          register={register}
          label='Recaudación'
          errors={errors}
          defaultValue='0'
        />

        <ProjectInput
          name='fundingDayLeft'
          type='number'
          placeholder='Plazo de recaudación'
          register={register}
          label='Plazo en días'
          errors={errors}
          defaultValue='0'
        />

        <ProjectInputSelect
          name='category'
          register={register}
          label='Categoría'
          errors={errors}
          defaultOption='Selecciona una categoría'
          options={[
            'Tecnologia e innovación',
            'Trabajos Creativos',
            'Proyectos Comunitarios',
          ]}
        />

        <ProjectInputSelect
          name='location'
          register={register}
          label='Ubicación'
          errors={errors}
          defaultOption='Selecciona una ubicación'
          options={['Argentina']}
        />

        <button
          type='submit'
          className='bg-primary-500 mx-auto block rounded bg-primary px-4 py-2 font-bold text-white duration-300 hover:bg-secondaryDark active:scale-95'
        >
          Crear proyecto
        </button>
      </form>
    </div>
  )
}
