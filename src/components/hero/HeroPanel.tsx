import { SocialLinks } from '../social/SocialLinks'

export function HeroPanel() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center px-2 py-8 text-center"
    >
      <div className="flex max-w-lg flex-col items-center gap-3">
        <header className="flex flex-col items-center">
          <h1>Kyle Chiem</h1>
          <p className="hero-tagline">Software Engineer | CS Student</p>
        </header>
        <SocialLinks />
      </div>
    </section>
  )
}
