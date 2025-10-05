'use client'

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorProps = {
  error: Error,
  reset: () => void
}

export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <>
      <ErrorMessage
        pageTitle="Internal Server Error"
        contentTitle="501"
        content="Ocorrou um erro do qual nossa aplicação não conseguiu se recuperar. Tente novamente mais tarde."
      />

    </>
  )
}
