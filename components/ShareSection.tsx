'use client'

import { useState } from 'react'

export default function ShareSection() {
  const [shareText, setShareText] = useState('')

  return (
    <section id="share" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Comparte algo increíble
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Comparte tus ideas, descubrimientos y contenido favorito con la comunidad.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="share-input" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  ¿Qué quieres compartir?
                </label>
                <div className="mt-2">
                  <textarea
                    id="share-input"
                    rows={4}
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:placeholder:text-gray-400 dark:focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Escribe algo increíble para compartir..."
                    value={shareText}
                    onChange={(e) => setShareText(e.target.value)}
                    aria-label="Campo de texto para compartir"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Añadir imagen"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Añadir enlace"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  className="rounded-md bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!shareText.trim()}
                  aria-label="Compartir contenido"
                >
                  Compartir
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Example Posts Grid */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Contenido reciente
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <svg
                    className="h-16 w-16 text-gray-400 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    Contenido compartido por la comunidad
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Usuario</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

