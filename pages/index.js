import HeaderBackground from '../components/HeaderBackground'

export default function Home () {
  return (
    <main>
      <section className="container">
        <HeaderBackground />
      </section>

      <section className="container">

      </section>
      <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        position: relative;
        width: 100%;
      }

      main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
      `}</style>

      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
      }

      * {
        box-sizing: border-box;
      }
      `}</style>
    </main>
    )
  }
