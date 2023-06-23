import { useQueryClient } from '@tanstack/react-query'
import { ProjectInput, ProjectInputSelect, ProjectTextArea } from './components'
import { useProjectForm } from './hooks'

export const ProjectForm: React.FC = () => {
  const { register, handleSubmit, errors, onSubmit, isSubmitSuccessful } =
    useProjectForm()
  const queryClient = useQueryClient()

  if (isSubmitSuccessful) {
    void queryClient.invalidateQueries(['popularProjects'])
  }

  return (
    <div className='container mx-auto my-10 px-4'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto max-w-md rounded border bg-gray-50 p-4'
      >
        <ProjectInput
          name='title'
          type='text'
          placeholder='Title'
          register={register}
          label='Title'
          errors={errors}
        />

        <ProjectInput
          name='shortDescription'
          type='text'
          placeholder='Short description'
          register={register}
          label='Short description'
          errors={errors}
        />

        <ProjectTextArea
          name='description'
          register={register}
          label='General description'
          errors={errors}
          placeholder='General description'
        />

        <ProjectInput
          name='fundingGoal'
          type='number'
          placeholder='Goal funding'
          register={register}
          label='Goal funding'
          errors={errors}
          defaultValue='0'
        />

        <ProjectInput
          name='fundingDayLeft'
          type='number'
          placeholder='Funding deadline'
          register={register}
          label='Funding deadline'
          errors={errors}
          defaultValue='0'
        />

        <ProjectInputSelect
          name='category'
          register={register}
          label='Category'
          errors={errors}
          defaultOption='Select a category'
          options={[
            'Tecnologia e innovación',
            'Trabajos Creativos',
            'Proyectos Comunitarios',
          ]}
        />

        <ProjectInputSelect
          name='location'
          register={register}
          label='Location'
          errors={errors}
          defaultOption='Select a location'
          options={['Argentina']}
        />

        <button
          type='submit'
          className='bg-primary-500 mx-auto block rounded bg-primary px-4 py-2 font-bold text-white duration-300 hover:bg-secondaryDark active:scale-95'
        >
          Create project
        </button>
      </form>
    </div>
  )
}
