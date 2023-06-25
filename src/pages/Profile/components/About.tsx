export const About: React.FC = () => {
  return (
    <div className='flex h-auto w-full border border-black'>
      <div className='w-8/12'>
        <img
          src='https://images.wallpaperscraft.com/image/single/bell_tower_building_paving_stones_968989_3840x2400.jpg'
          alt=''
          className='min-h-[220px] w-auto min-w-[355px] '
        />
      </div>
      <div className='mt-10 w-4/12 text-center text-4xl'>
        <p>About me</p>
        <p className='mt-5 text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos quae
          tenetur nam iste esse, cupiditate delectus doloremque nemo ad nostrum
          nobis maxime vitae minus vero recusandae architecto sunt praesentium.
        </p>
      </div>
    </div>
  )
}
