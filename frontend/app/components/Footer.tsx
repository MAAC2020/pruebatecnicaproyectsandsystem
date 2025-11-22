

const Footer = () => {
    return (
      <footer className="bg-primary">
        <div className="grid grid-cols-2 container sm:mx-auto py-2  lg:py-10 px-4 lg:px-80">
          <h2 className="col-span-2 font-bold text-2xl text-white">Contacto</h2>
          <p className="col-span-2 text-white text-[14px] pt-6">
            Ingeniero de Sistemas con más de 5 años de experiencia en desarrollo
            de software y automatización de procesos. Especialista en Google
            Workspace, Apps Script, AppSheet y desarrollo web con tecnologías
            modernas como JavaScript, React.js y Python.{" "}
          </p>
          <p className="text-white pt-2">
            <span>Linkedin:</span>{" "}
            <span className="font-bold">https://www.linkedin.com/in/mauricio-andres-araujo-castaño/</span>
          </p>
        </div>
      </footer>
  )
}

export default Footer