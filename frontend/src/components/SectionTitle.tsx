type Props = {

  title: string
  subtitle: string

}

export default function SectionTitle({

  title,
  subtitle

}: Props) {

  return (

    <div className="mb-4">

      <h2
        className="
        text-xl
        font-bold
        tracking-tight
        "
      >
        {title}
      </h2>

      <p
        className="
        text-zinc-400
        text-sm
        mt-1
        "
      >
        {subtitle}
      </p>

    </div>

  )

}