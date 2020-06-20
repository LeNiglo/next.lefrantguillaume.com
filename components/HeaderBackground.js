export default function HeaderBackground () {
  return (
    <div className="header-background">
      <h1 className="title">
        Guillaume Lefrant
      </h1>

      <p className="description">
        Développeur Web FullStack
      </p>
      <style jsx>{`
        .header-background {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #2E3D47;
          color: #FFFFFF;
          animation: backgroundColor 5s linear 2s infinite alternate both;
        }

        @keyframes backgroundColor {
          0% {
            background-color: #2E3D47;
            color: #8AB5D4;
          }
          16% {
            background-color: #2E3D47;
            color: #8AB5D4;
          }
          33% {
            background-color: #587387;
            color: #81AAC7;
          }
          50 % {
            background-color: #7194AD;
            color: #7194AD;
          }
          66% {
            background-color: #81AAC7;
            color: #587387;
          }
          84% {
            background-color: #8AB5D4;
            color: #2E3D47;
          }
          100% {
            background-color: #8AB5D4;
            color: #2E3D47;
          }
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          font-weight: 100;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  )
}