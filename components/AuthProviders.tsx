'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { getProviders, signIn } from 'next-auth/react'


type Provider = {
    id: string,
    name: string,
    type: string,
    signinUrl: string,
    callbackUrl: string,
    signinUrlParams?: Record<string, string> | null
}

type Providers = Record<string, Providers>

const AuthProviders = () => {

    const [providers, setProviders] = useState<Provider | null>(null)




    useEffect(() => {

        const fetchProviders = async () => {
            const res = await getProviders()
            setProviders(res)
        }

        fetchProviders()
    }, [])

    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: Provider, i) => (
                    <button key={i}> {provider.id} </button>
                ))}
            </div>
        )
    }
}

export default AuthProviders