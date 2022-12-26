'use client'

export default function ErrorPage ({
  error,
  reset,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">
        {error.message}
      </h1>
      <p>
        La página no pudo ser cargada
      </p>
    </div>
  )
}
