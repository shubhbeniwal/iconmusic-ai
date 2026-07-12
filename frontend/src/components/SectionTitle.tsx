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
        "
      >
        {title}
      </h2>

      <p
        className="
        text-zinc-500
        text-sm
        mt-1
        "
      >
        {subtitle}
      </p>

    </div>

  )

}