import { Medal, Users, Clock, Star } from 'lucide-react'

export default function About() {
  const card = [
    {
      icon: <Medal size={25} />,
      title: '15+',
      span: 'Anos de Experiência'
    },
    {
      icon: <Users size={25} />,
      title: '10.000+',
      span: 'Pacientes Atendidos'
    },
    {
      icon: <Clock size={25} />,
      title: '24h',
      span: 'Emergências'
    },
    {
      icon: <Star size={25} />,
      title: '5.0',
      span: 'Avaliação Média'
    },
  ]

  return(
    <>
      <section className='w-full flex flex-wrap justify-between gap-10 py-20 px-5 md:px-20 bg-white'>
        <div className='flex flex-1 flex-col gap-5'>
          <h3 className='text-[4rem] font-semibold leading-18'>
            Excelência em
            <span className='block text-teal-500'>Odontologia</span>
          </h3>

          <p className='text-[1.1rem] text-zinc-500'>
            Nossa clínica combina anos de experiência com as mais modernas tecnologias para oferecer tratamentos odontológicos de alta qualidade.
          </p>

          <p className='text-[1.1rem] text-zinc-500'>
            Acreditamos que cada sorriso é único e merece atenção personalizada. Nossa equipe de especialistas está comprometida em proporcionar o melhor atendimento em um ambiente acolhedor e confortável.
          </p>

          <div className='flex flex-wrap items-center gap-2'>
            <div className='flex items-center gap-2 text-nowrap'>
              <div className='w-2 h-2 rounded-full bg-teal-500'></div>
              <span className='text-sm text-black'>Equipamentos Modernos</span>
            </div>

            <div className='flex items-center gap-2 text-nowrap'>
              <div className='w-2 h-2 rounded-full bg-teal-500'></div>
              <span className='text-sm text-black'>Equipe Qualificada</span>
            </div>

            <div className='flex items-center gap-2 text-nowrap'>
              <div className='w-2 h-2 rounded-full bg-teal-500'></div>
              <span className='text-sm text-black'>Atendimento Humanizado</span>
            </div>
          </div>
        </div>

        <div className='flex flex-1 flex-wrap justify-center gap-5'>
          {
            card.map((item, index) => (
              <div key={index} className='cursor-default  transition-all duration-300 hover:-translate-y-2 animate-scale-in w-full max-w-[200px] flex flex-col justify-center gap-2 p-5 bg-slate-100 rounded-xl'>
                <span className='w-[50px] h-[50px] rounded-full bg-teal-500 text-white flex justify-center items-center'>{item.icon}</span>
                <h3 className='text-3xl font-semibold text-teal-500'>{item.title}</h3>
                <p className='text-zinc-500'>{item.span}</p>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}