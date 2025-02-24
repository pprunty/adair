import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { HelloWorld } from "@/registry/hello-world/hello-world"
import { ExampleForm } from "@/registry/example-form/example-form"
import PokemonPage from "@/registry/complex-component/page"
import {Card} from "@/registry/card/card"
import {TrackCarousel} from "@/registry/track-carousel/track-carousel"

// This page displays items from the custom registry.

export default function Home() {
  return (
    <main className="w-full mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distribution code using shadcn.
        </p>
      </header>
      <div className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 w-full border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple hello world component
            </h2>
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <HelloWorld />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A complex component showing hooks, libs and components.
            </h2>
            <OpenInV0Button name="complex-component" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PokemonPage />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A basic card component.
          </h2>
          <OpenInV0Button name="complex-component" className="w-fit" />
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Card>some content </Card>
        </div>
      </div>
        <div className="flex flex-col gap-4 w-full border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A track carousel for animated media (only works well on desktop for now).
            </h2>
            <OpenInV0Button name="complex-component" className="w-fit" />
          </div>
            <TrackCarousel images={['https://patrickprunty.com/images/me-sketch.png', 'https://patrickprunty.com/images/me-sketch.png', 'https://patrickprunty.com/images/me-sketch.png', 'https://patrickprunty.com/images/me-sketch.png']}/>
        </div>
      </div>
    </main>
  )
}
