/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //permitir dominios externos para renderizar imagenes
  images: {
    domains: ["img.daisyui.com","picsum.photos"], // ⬅ dominio permitido
  },
};

export default nextConfig;
