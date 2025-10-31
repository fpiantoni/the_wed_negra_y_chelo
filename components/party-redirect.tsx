"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function PartyRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Verificar si el usuario tiene marcado que accedió a /party
    const weddingAccess = localStorage.getItem("wedding-access")
    
    if (weddingAccess === "party") {
      // Redirigir automáticamente a /party
      router.push("/party")
    }
  }, [router])

  return null
}
